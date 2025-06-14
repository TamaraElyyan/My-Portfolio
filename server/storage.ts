import { users, resumeAnalyses, contactMessages, type User, type InsertUser, type ResumeAnalysis, type InsertResumeAnalysis, type ContactMessage, type InsertContactMessage } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createResumeAnalysis(analysis: InsertResumeAnalysis): Promise<ResumeAnalysis>;
  getResumeAnalyses(): Promise<ResumeAnalysis[]>;
  getResumeAnalysis(id: number): Promise<ResumeAnalysis | undefined>;
  
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private resumeAnalyses: Map<number, ResumeAnalysis>;
  private contactMessages: Map<number, ContactMessage>;
  private currentUserId: number;
  private currentAnalysisId: number;
  private currentMessageId: number;

  constructor() {
    this.users = new Map();
    this.resumeAnalyses = new Map();
    this.contactMessages = new Map();
    this.currentUserId = 1;
    this.currentAnalysisId = 1;
    this.currentMessageId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createResumeAnalysis(insertAnalysis: InsertResumeAnalysis): Promise<ResumeAnalysis> {
    const id = this.currentAnalysisId++;
    const analysis: ResumeAnalysis = { 
      ...insertAnalysis, 
      id, 
      createdAt: new Date()
    };
    this.resumeAnalyses.set(id, analysis);
    return analysis;
  }

  async getResumeAnalyses(): Promise<ResumeAnalysis[]> {
    return Array.from(this.resumeAnalyses.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getResumeAnalysis(id: number): Promise<ResumeAnalysis | undefined> {
    return this.resumeAnalyses.get(id);
  }

  async createContactMessage(insertMessage: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentMessageId++;
    const message: ContactMessage = { 
      ...insertMessage, 
      id, 
      createdAt: new Date()
    };
    this.contactMessages.set(id, message);
    return message;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
}

export const storage = new MemStorage();
