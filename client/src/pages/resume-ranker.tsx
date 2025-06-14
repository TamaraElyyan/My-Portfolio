import { useState } from "react";
import { Link } from "wouter";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { 
  Upload, 
  FileText, 
  BarChart3, 
  TrendingUp, 
  CheckCircle, 
  XCircle, 
  Lightbulb,
  ArrowLeft,
  Star,
  Target,
  Users
} from "lucide-react";
import { analyzeResume, getResumeAnalyses, type ResumeAnalysisResult } from "@/lib/api";

export default function ResumeRanker() {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [analysisResult, setAnalysisResult] = useState<ResumeAnalysisResult | null>(null);

  // Fetch previous analyses
  const { data: previousAnalyses, isLoading: isLoadingAnalyses } = useQuery({
    queryKey: ["/api/resume-analyses"],
    enabled: true,
  });

  const analyzeMutation = useMutation({
    mutationFn: ({ file, jobTitle, jobDescription }: { 
      file: File; 
      jobTitle: string; 
      jobDescription: string; 
    }) => analyzeResume(file, jobTitle, jobDescription),
    onSuccess: (result) => {
      setAnalysisResult(result);
      toast({
        title: "Analysis Complete!",
        description: "Your resume has been successfully analyzed.",
      });
    },
    onError: (error) => {
      toast({
        title: "Analysis Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.includes('text') && !file.type.includes('pdf')) {
        toast({
          title: "Invalid file type",
          description: "Please upload a text (.txt) or PDF file.",
          variant: "destructive",
        });
        return;
      }
      
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB.",
          variant: "destructive",
        });
        return;
      }
      
      setSelectedFile(file);
    }
  };

  const handleAnalyze = () => {
    if (!selectedFile || !jobTitle || !jobDescription) {
      toast({
        title: "Missing Information",
        description: "Please provide a resume file, job title, and job description.",
        variant: "destructive",
      });
      return;
    }

    analyzeMutation.mutate({ file: selectedFile, jobTitle, jobDescription });
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600 dark:text-green-400";
    if (score >= 60) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const getScoreBackground = (score: number) => {
    if (score >= 80) return "bg-green-100 dark:bg-green-900/20";
    if (score >= 60) return "bg-yellow-100 dark:bg-yellow-900/20";
    return "bg-red-100 dark:bg-red-900/20";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="pt-20 pb-12 bg-gradient-to-br from-primary/10 to-emerald-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground p-3 rounded-lg">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-bold gradient-text">Resume Ranker</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI-powered resume analysis tool for HR professionals. Upload resumes and get detailed insights, 
              rankings, and recommendations based on job requirements.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload and Analysis Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload Resume & Job Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* File Upload */}
                <div>
                  <Label htmlFor="resume-upload">Resume File</Label>
                  <div className="mt-2">
                    <Input
                      id="resume-upload"
                      type="file"
                      accept=".txt,.pdf"
                      onChange={handleFileChange}
                      className="cursor-pointer"
                    />
                    {selectedFile && (
                      <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <FileText className="h-4 w-4" />
                        {selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)
                      </div>
                    )}
                  </div>
                </div>

                {/* Job Title */}
                <div>
                  <Label htmlFor="job-title">Job Title</Label>
                  <Input
                    id="job-title"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="e.g., Senior Full Stack Developer"
                  />
                </div>

                {/* Job Description */}
                <div>
                  <Label htmlFor="job-description">Job Description</Label>
                  <Textarea
                    id="job-description"
                    rows={6}
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste the complete job description here, including required skills, qualifications, and responsibilities..."
                  />
                </div>

                <Button 
                  onClick={handleAnalyze}
                  disabled={analyzeMutation.isPending || !selectedFile || !jobTitle || !jobDescription}
                  className="w-full"
                  size="lg"
                >
                  {analyzeMutation.isPending ? (
                    "Analyzing Resume..."
                  ) : (
                    <>
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Analyze Resume
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Previous Analyses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Recent Analyses
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isLoadingAnalyses ? (
                  <div className="text-center py-4 text-muted-foreground">
                    Loading previous analyses...
                  </div>
                ) : previousAnalyses && previousAnalyses.length > 0 ? (
                  <div className="space-y-3">
                    {previousAnalyses.slice(0, 5).map((analysis: any, index: number) => (
                      <div key={analysis.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{analysis.jobTitle}</p>
                          <p className="text-xs text-muted-foreground">{analysis.fileName}</p>
                        </div>
                        <Badge variant="secondary" className={getScoreColor(analysis.score)}>
                          {analysis.score}%
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4 text-muted-foreground">
                    No previous analyses found
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Analysis Results */}
          <div>
            {analysisResult ? (
              <div className="space-y-6">
                {/* Overall Score */}
                <Card className={getScoreBackground(analysisResult.score)}>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className={`text-4xl font-bold mb-2 ${getScoreColor(analysisResult.score)}`}>
                        {analysisResult.score}%
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">Overall Match Score</p>
                      <Progress value={analysisResult.score} className="w-full h-3" />
                    </div>
                  </CardContent>
                </Card>

                {/* Experience Relevance */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">Experience Relevance</h3>
                    </div>
                    <Progress value={analysisResult.experienceRelevance} className="mb-2" />
                    <p className="text-sm text-muted-foreground">
                      {analysisResult.experienceRelevance}% relevant experience
                    </p>
                  </CardContent>
                </Card>

                {/* Skills Match */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      Skills Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {analysisResult.skillsMatch.matched.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-green-600 mb-2">Matched Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {analysisResult.skillsMatch.matched.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {analysisResult.skillsMatch.missing.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium text-red-600 mb-2">Missing Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {analysisResult.skillsMatch.missing.map((skill, index) => (
                            <Badge key={index} variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Strengths */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-emerald-600" />
                      Strengths
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {analysisResult.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Areas for Improvement */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-orange-600" />
                      Areas for Improvement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {analysisResult.weaknesses.map((weakness, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <XCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{weakness}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-yellow-600" />
                      Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {analysisResult.recommendations.map((recommendation, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Lightbulb className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{recommendation}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Overall Assessment */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-primary" />
                      Overall Assessment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed">{analysisResult.overallFit}</p>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="h-full">
                <CardContent className="flex items-center justify-center h-full py-12">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Ready to Analyze</h3>
                    <p className="text-muted-foreground">
                      Upload a resume and provide job details to get started with AI-powered analysis.
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
