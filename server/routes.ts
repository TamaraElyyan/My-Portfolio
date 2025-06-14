import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
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
