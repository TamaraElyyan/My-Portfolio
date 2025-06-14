# Resume Ranker Portfolio Application

## Overview

This is a full-stack web application that serves as both a personal portfolio website and a resume analysis tool. Built with React.js frontend and Express.js backend, it demonstrates modern web development practices with PostgreSQL database integration via Drizzle ORM.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React.js with TypeScript, Vite build tool, and Tailwind CSS
- **Backend**: Express.js with TypeScript, serving both API endpoints and static files
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **UI Framework**: shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack React Query for server state management

## Key Components

### Frontend Architecture
- **Component Library**: Comprehensive UI component system based on shadcn/ui
- **Routing**: Wouter for lightweight client-side routing
- **Theme System**: Custom theme provider with light/dark mode support
- **Form Handling**: React Hook Form with Zod validation
- **File Upload**: Multer integration for resume file processing

### Backend Architecture
- **API Structure**: RESTful endpoints organized in `/api` namespace
- **File Processing**: Support for text and PDF resume uploads (up to 5MB)
- **AI Integration**: OpenAI GPT-4o integration for resume analysis
- **Storage Layer**: Abstract storage interface with in-memory implementation
- **Error Handling**: Centralized error handling middleware

### Database Schema
Three main entities:
- **Users**: Basic user authentication system
- **Resume Analyses**: Stores resume analysis results with scoring and recommendations
- **Contact Messages**: Handles portfolio contact form submissions

## Data Flow

1. **Resume Analysis Flow**:
   - User uploads resume file and provides job description
   - Backend extracts text from uploaded file
   - OpenAI API analyzes resume against job requirements
   - Results stored in database and returned to frontend
   - Frontend displays comprehensive analysis with scoring

2. **Portfolio Flow**:
   - Static portfolio sections (Hero, About, Skills, Projects, Contact)
   - Contact form submissions stored in database
   - Theme switching with localStorage persistence

## External Dependencies

### Core Dependencies
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM with Zod schema validation
- **AI Service**: OpenAI API for resume analysis
- **UI Components**: Extensive Radix UI component library
- **Build Tools**: Vite for development and production builds

### Development Tools
- **TypeScript**: Full type safety across the stack
- **ESBuild**: Fast server-side bundling
- **PostCSS**: CSS processing with Tailwind
- **Replit Integration**: Development environment optimizations

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20 with PostgreSQL 16
- **Hot Reload**: Vite dev server with HMR
- **Port Configuration**: Server runs on port 5000, proxied to port 80

### Production Build
- **Frontend**: Vite builds optimized static assets
- **Backend**: ESBuild bundles server code for Node.js
- **Database**: Drizzle migrations handle schema updates
- **Deployment**: Replit autoscale deployment target

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- OpenAI API key configuration for resume analysis
- Separate development and production build processes

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 14, 2025. Initial setup