import HealthHubImage from "../../assets/healthhub.png";
import LibraryImage from "../../assets/LibraryImage.png";
import FitFinderImage from "../../assets/fitfinder.png";
import TravelImage from "../../assets/travel&booking.png";
import YallaShabab from "../../assets/yallashabab.png";

/** Placeholder until a real live URL is provided (UI shows a disabled Live demo button). */
export const PENDING_DEMO = "__PENDING_DEMO__";

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  /** Live demo. Use `PENDING_DEMO` until a real URL is set. */
  demoUrl: string;
  codeUrl: string;
  featured?: boolean;
  fullWidth?: boolean;
  features?: string[];
};

export const projects: Project[] = [
  {
    title: "HealthHub – Hospital Management System",
    description:
      "End-to-end hospital management app: secure login, role-aware workflows, and a React dashboard backed by a Spring Boot API. Deployed on Render with a polished bilingual-friendly UI (HealthHub).",
    image: HealthHubImage,
    technologies: ["React.js", "Spring Boot", "Java", "REST API"],
    demoUrl: "https://hospital-manegment-system-zu6i.onrender.com",
    codeUrl: "https://github.com/TamaraElyyan/hospital_manegment_system",
    featured: false,
  },
  {
    title: "My Dream Place – Travel & Booking Website",
    description:
      "Fully responsive travel UI built with React and Tailwind: search, booking flow, and REST integration with clear loading and error states.",
    image: TravelImage,
    technologies: ["React.js", "Tailwind CSS", "REST API", "axios"],
    demoUrl: PENDING_DEMO,
    codeUrl: "https://github.com/TamaraElyyan/Travel-Booking-Website",
    featured: false,
  },
  {
    title: "Book Library – E-commerce Platform",
    description:
      "Full-stack bookstore: Express REST APIs for catalog and orders, MongoDB persistence, and a React UI for browsing, cart, and checkout.",
    image: LibraryImage,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    demoUrl: PENDING_DEMO,
    codeUrl: "https://github.com/TamaraElyyan/library_store",
    featured: false,
  },
  {
    title: "YALLA SHABAB – Event Management Website",
    description:
      "Team-built event platform: Spring Boot APIs for events and registration, React frontend with Bootstrap. Repository maintained with collaborators—see GitHub for contribution history.",
    image: YallaShabab,
    technologies: ["React.js", "Spring Boot", "Bootstrap", "REST API"],
    demoUrl: PENDING_DEMO,
    codeUrl: "https://github.com/Israa-Mousa/event-website",
    features: [
      "Event creation and lifecycle management",
      "User registration flow",
      "Admin dashboard",
      "Spring Boot REST services",
    ],
    featured: false,
    fullWidth: false,
  },
  {
    title: "FitFinder – Resume Ranker",
    description:
      "Resume-to-job-description matcher: Flask REST API for parsing and scoring, Next.js + TypeScript UI to upload resumes and compare against role text (keyword and structured-field analysis).",
    image: FitFinderImage,
    technologies: ["Flask", "React", "TypeScript", "Next.js"],
    demoUrl: PENDING_DEMO,
    codeUrl: "https://github.com/TamaraElyyan/FitFinder2",
    features: [
      "Resume parsing and keyword extraction",
      "Match score vs. job description",
      "RESTful Flask backend",
      "Next.js + TypeScript frontend",
    ],
    featured: false,
    fullWidth: false,
  },
];
