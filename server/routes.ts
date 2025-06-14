import type { Express } from "express";
import { createServer, type Server } from "http";
import multer from "multer";
import { storage } from "./storage";
import { insertResumeAnalysisSchema, insertContactMessageSchema } from "@shared/schema";
import { analyzeResume } from "./services/openai";

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept only text files and PDFs
    if (file.mimetype === 'text/plain' || file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only text files and PDFs are allowed'));
    }
  }
});

function extractTextFromBuffer(buffer: Buffer, mimetype: string): string {
  if (mimetype === 'text/plain') {
    return buffer.toString('utf-8');
  }
  // For PDF files, we'll accept the uploaded content as text for now
  // In a real implementation, you'd use a PDF parser like pdf-parse
  return buffer.toString('utf-8');
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume analysis endpoint
  app.post("/api/analyze-resume", upload.single('resume'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No resume file uploaded" });
      }

      const { jobTitle, jobDescription } = req.body;
      
      if (!jobTitle || !jobDescription) {
        return res.status(400).json({ error: "Job title and description are required" });
      }

      // Extract text from uploaded file
      const resumeText = extractTextFromBuffer(req.file.buffer, req.file.mimetype);
      
      if (!resumeText.trim()) {
        return res.status(400).json({ error: "Could not extract text from resume file" });
      }

      // Analyze resume using OpenAI
      const analysis = await analyzeResume(resumeText, jobDescription, jobTitle);
      
      // Validate and store the analysis
      const analysisData = insertResumeAnalysisSchema.parse({
        jobTitle,
        jobDescription,
        resumeText,
        fileName: req.file.originalname,
        score: analysis.score,
        analysis: analysis
      });

      const savedAnalysis = await storage.createResumeAnalysis(analysisData);
      
      res.json({
        id: savedAnalysis.id,
        ...analysis
      });
    } catch (error) {
      console.error("Resume analysis error:", error);
      res.status(500).json({ 
        error: error instanceof Error ? error.message : "Failed to analyze resume" 
      });
    }
  });

  // Get all resume analyses
  app.get("/api/resume-analyses", async (req, res) => {
    try {
      const analyses = await storage.getResumeAnalyses();
      res.json(analyses);
    } catch (error) {
      console.error("Error fetching analyses:", error);
      res.status(500).json({ error: "Failed to fetch analyses" });
    }
  });

  // Get specific resume analysis
  app.get("/api/resume-analyses/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const analysis = await storage.getResumeAnalysis(id);
      
      if (!analysis) {
        return res.status(404).json({ error: "Analysis not found" });
      }
      
      res.json(analysis);
    } catch (error) {
      console.error("Error fetching analysis:", error);
      res.status(500).json({ error: "Failed to fetch analysis" });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const messageData = insertContactMessageSchema.parse(req.body);
      const savedMessage = await storage.createContactMessage(messageData);
      res.json({ success: true, id: savedMessage.id });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        error: error instanceof Error ? error.message : "Failed to send message" 
      });
    }
  });

  // Download CV endpoint (returns CV data from the design reference)
  app.get("/api/download-cv", (req, res) => {
    // In a real implementation, this would serve the actual CV file
    res.json({
      message: "CV download functionality would be implemented here",
      cvData: {
        name: "Tamara Elyyan",
        email: "TamaraElyyan1@gmail.com",
        phone: "+972562667777",
        location: "Palestine, Ramallah"
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
