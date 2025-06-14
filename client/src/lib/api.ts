import { apiRequest } from "./queryClient";

export interface ResumeAnalysisResult {
  id: number;
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
  file: File,
  jobTitle: string,
  jobDescription: string
): Promise<ResumeAnalysisResult> {
  const formData = new FormData();
  formData.append("resume", file);
  formData.append("jobTitle", jobTitle);
  formData.append("jobDescription", jobDescription);

  const response = await fetch("/api/analyze-resume", {
    method: "POST",
    body: formData,
    credentials: "include",
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to analyze resume");
  }

  return response.json();
}

export async function getResumeAnalyses() {
  const response = await apiRequest("GET", "/api/resume-analyses");
  return response.json();
}

export async function getResumeAnalysis(id: number) {
  const response = await apiRequest("GET", `/api/resume-analyses/${id}`);
  return response.json();
}
