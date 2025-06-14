import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY_ENV_VAR || "default_key"
});

export interface ResumeAnalysisResult {
  score: number;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  skillsMatch: {
    matched: string[];
    missing: string[];
  };
  experienceRelevance: number;
  overallFit: string;
}

export async function analyzeResume(
  resumeText: string, 
  jobDescription: string, 
  jobTitle: string
): Promise<ResumeAnalysisResult> {
  try {
    const prompt = `
You are an expert HR professional analyzing a resume against a job description. Please provide a comprehensive analysis in JSON format.

Job Title: ${jobTitle}
Job Description: ${jobDescription}

Resume Content: ${resumeText}

Please analyze the resume and provide a detailed assessment with the following structure:
{
  "score": <number from 0-100>,
  "strengths": [<array of key strengths>],
  "weaknesses": [<array of areas needing improvement>],
  "recommendations": [<array of specific recommendations>],
  "skillsMatch": {
    "matched": [<array of skills that match job requirements>],
    "missing": [<array of important skills missing from resume>]
  },
  "experienceRelevance": <number from 0-100>,
  "overallFit": "<brief summary of overall fit>"
}

Focus on:
1. Technical skills alignment
2. Experience relevance
3. Education and certifications
4. Professional achievements
5. Career progression
6. Communication and soft skills indicators

Provide actionable insights and specific recommendations for improvement.
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an expert HR professional and resume analyst. Provide detailed, actionable feedback in valid JSON format."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.3,
      max_tokens: 2000
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    
    // Validate and sanitize the response
    return {
      score: Math.max(0, Math.min(100, result.score || 0)),
      strengths: Array.isArray(result.strengths) ? result.strengths : [],
      weaknesses: Array.isArray(result.weaknesses) ? result.weaknesses : [],
      recommendations: Array.isArray(result.recommendations) ? result.recommendations : [],
      skillsMatch: {
        matched: Array.isArray(result.skillsMatch?.matched) ? result.skillsMatch.matched : [],
        missing: Array.isArray(result.skillsMatch?.missing) ? result.skillsMatch.missing : []
      },
      experienceRelevance: Math.max(0, Math.min(100, result.experienceRelevance || 0)),
      overallFit: result.overallFit || "Analysis unavailable"
    };
  } catch (error) {
    console.error("Error analyzing resume:", error);
    throw new Error("Failed to analyze resume. Please try again.");
  }
}
