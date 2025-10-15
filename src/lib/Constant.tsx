// import { type EasingDefinition, type Transition } from "motion/react";
// import {
//   Home,
//   Zap,
//   Briefcase,
//   Mail,
//   User,
//   Quote,
//   HelpCircle,
//   ClipboardList,
// } from "lucide-react";
// import React from "react";

// // --- ANIMATION CONSTANTS ---
// export const calmEase: EasingDefinition = [0.23, 1, 0.32, 1];
// export const gentleSpring: Transition = {
//   type: "spring",
//   stiffness: 200,
//   damping: 20,
// };

// // --- DATA CONSTANTS ---
// export const projects = [
//   {
//     id: 9,
//     title: "SketchWiz",
//     shortDescription:
//       "A collaborative sketching tool with infinite canvas and real-time drawing.",
//     fullDescription:
//       "A collaborative sketching tool with infinite canvas, real-time drawing, and smooth zoom/pan interactions.",
//     image: "/projects/SketchWiz.png",
//     video: "/placeholder.svg?text=SketchWiz+Demo",
//     link: "https://sketch-wiz-web.vercel.app/",
//     github: "https://github.com/Dev-kaif/SketchWiz",
//     tags: [
//       "Turborepo",
//       "WebSockets",
//       "Next.js",
//       "Node.js",
//       "Express",
//       "Tailwind CSS",
//       "Google Gemini AI",
//       "Prisma ORM",
//       "PostgreSQL",
//     ],
//     type: "fullstack",
//   },
//   {
//     id: 6,
//     title: "GreenWatt",
//     shortDescription:
//       "AI-powered energy dashboard that helps households reduce electricity bills and carbon footprint.",
//     fullDescription:
//       "GreenWatt is an AI-powered energy dashboard that helps households reduce electricity bills and carbon footprint through personalized insights and semantic search and AI based energy-saving tips.",
//     image: "/projects/GreenWatt.png",
//     video: "/placeholder.svg?text=GreenWatt+Demo",
//     link: "https://green-watt.vercel.app/",
//     github: "https://github.com/Dev-kaif/GreenWatt",
//     tags: [
//       "Node.js",
//       "Express",
//       "NeonDB",
//       "Prisma",
//       "ReactJs",
//       "Tailwind CSS",
//       "Framer Motion",
//       "Langchain",
//       "Gemini",
//     ],
//     type: "fullstack",
//   },
//   {
//     id: 7,
//     title: "WorkNest",
//     shortDescription:
//       "Employee Management System to manage employee tasks, track statuses, and handle shifts.",
//     fullDescription:
//       "Employee Management System Manage employee tasks, track task statuses, handle shifts with start/end times, and empower employees to update their work and shift status.",
//     image: "/projects/worknest.png",
//     video: "/placeholder.svg?text=WorkNest+Demo",
//     link: "https://employee-management-sys-lime.vercel.app",
//     github: "https://github.com/Dev-kaif/Employee-Management-Sys",
//     tags: [
//       "Node.js",
//       "Express",
//       "MongoDB",
//       "NextJs",
//       "Tailwind CSS",
//       "Framer Motion",
//       "Node-cron",
//     ],
//     type: "fullstack",
//   },
//   {
//     id: 8,
//     title: "Curated Crate",
//     shortDescription:
//       "A modern e-commerce platform for creating and purchasing personalized gift boxes.",
//     fullDescription:
//       "Curated Crate is a modern e-commerce platform for creating and purchasing personalized gift boxes. It allows users to select from a variety of artisanal products to build their own unique crate or choose from pre-designed themed boxes.",
//     image: "/projects/curated-crate.png",
//     video: "/placeholder.svg?text=Curated+Crate+Demo",
//     link: "https://curated-crate.vercel.app",
//     github: "https://github.com/Dev-kaif/Curated-Crate",
//     tags: [
//       "Next.js",
//       "TypeScript",
//       "Tailwind CSS",
//       "MongoDB",
//       "Mongoose",
//       "NextAuth.js",
//       "Framer Motion",
//     ],
//     type: "fullstack",
//   },
//   {
//     id: 2,
//     title: "Zentry Clone",
//     shortDescription:
//       "Recreation of the Zentry website with modern UI components and responsive design.",
//     fullDescription:
//       "Recreation of the Zentry website with modern UI components and responsive design.",
//     image: "/projects/zentry.png",
//     video: "/placeholder.svg?text=Zentry+Demo",
//     link: "https://zentry-clone-delta.vercel.app/",
//     github: "https://github.com/Dev-kaif/Zentry",
//     tags: ["React", "GSAP", "Styled Components", "Tailwind CSS"],
//     type: "fullstack",
//   },
//   {
//     id: 4,
//     title: "Obsy Agency",
//     shortDescription:
//       "A creative agency website with stunning animations and interactive elements.",
//     fullDescription:
//       "A creative agency website with stunning animations and interactive elements.",
//     image: "/projects/obsy.png",
//     video: "/placeholder.svg?text=Obsy+Agency+Demo",
//     link: "https://dev-kaif.github.io/Obys-Agency/",
//     github: "https://github.com/Dev-kaif/Obys-Agency",
//     tags: ["HTML", "CSS", "JavaScript", "GSAP"],
//     type: "fullstack",
//   },
//   {
//     id: 5,
//     title: "LuxeHaven",
//     shortDescription:
//       "A streamlined system for managing hotel bookings, guests, rooms, and staff operations efficiently.",
//     fullDescription:
//       "A streamlined system for managing hotel bookings, guests, rooms, and staff operations efficiently.",
//     image: "/projects/hotel.png",
//     video: "/placeholder.svg?text=LuxeHaven+Demo",
//     link: "https://hotel-management-three-ebon.vercel.app/",
//     github: "https://github.com/Dev-kaif/Hotel-Management",
//     tags: ["Node.js", "Express", "MongoDB", "React"],
//     type: "fullstack",
//   },
// ];

// export const WORK_EXPERIENCE = [
//   {
//     tabTitle: "Feb - Apr 2025",
//     company: "ScrollConnect",
//     role: "Web Developer Intern",
//     achievements: [
//       "Worked with a cross-functional team to build a scalable event platform for students.",
//       "Gained over 2000 users within the first two months, validating platform demand.",
//     ],
//   },
//   {
//     tabTitle: "June - July 2025",
//     company: "AiExecute",
//     role: "Web Development Intern",
//     achievements: [
//       "Developed and deployed full-stack web projects for client needs using React, Node.js, and MongoDB.",
//       "Built responsive UIs, integrated APIs, and ensured smooth delivery of production-ready features.",
//     ],
//   },
// ];

// export const skills = [
//   { name: "TypeScript", logo: "/SVG/typescript.svg" },
//   { name: "JavaScript", logo: "/SVG/javascript.svg" },
//   { name: "Python", logo: "/SVG/python.svg" },
//   { name: "HTML5", logo: "/SVG/html5.svg" },
//   { name: "CSS", logo: "/SVG/css_old.svg" },
//   { name: "Bash", logo: "/SVG/bash.svg" },
//   { name: "Next.js", logo: "/SVG/nextjs_icon_dark.svg" },
//   { name: "React", logo: "/SVG/react_dark.svg" },
//   { name: "Tailwind CSS", logo: "/SVG/tailwindcss.svg" },
//   { name: "Tanstack Query", logo: "/SVG/tanstack.png" },
//   { name: "vite", logo: "/SVG/vitejs.svg" },
//   { name: "Node.js", logo: "/SVG/nodejs.svg" },
//   { name: "NestJS", logo: "/SVG/nestjs.svg" },
//   { name: "Express", logo: "/SVG/expressjs_dark.svg" },
//   { name: "FastAPI", logo: "/SVG/fastapi.svg" },
//   { name: "tRPC", logo: "/SVG/Trpc--Streamline-Svg-Logos.svg" },
//   { name: "WebSocket", logo: "/SVG/websocket.svg" },
//   { name: "Socket IO", logo: "/SVG/socketio-light.svg" },
//   { name: "Inngest", logo: "/SVG/inngest-light.svg" },
//   { name: "PostgreSQL", logo: "/SVG/postgresql.svg" },
//   { name: "MongoDB", logo: "/SVG/mongodb.svg" },
//   { name: "mySQL", logo: "/SVG/mysql.svg" },
//   { name: "NeonDB", logo: "/SVG/neon.svg" },
//   { name: "Firebase", logo: "/SVG/firebase.svg" },
//   { name: "Supabase", logo: "/SVG/supabase.svg" },
//   { name: "Neo4j", logo: "/SVG/neo4j-icon.svg" },
//   { name: "Pinecone", logo: "/SVG/Pinecone-Icon--Streamline-Svg-Logos.svg" },
//   { name: "QuadrantDB", logo: "/SVG/Qdrant-Icon--Streamline-Svg-Logos.svg" },
//   { name: "Prisma ORM", logo: "/SVG/prisma.svg" },
//   { name: "Drizzel", logo: "/SVG/drizzle-orm_light.svg" },
//   { name: "LangChain", logo: "/SVG/Langchain--Streamline-Simple-Icons.svg" },
//   { name: "LangGraph", logo: "/SVG/langgraph.png" },
//   { name: "LangFuse", logo: "/SVG/langfuse-icon-seeklogo.svg" },
//   { name: "RAG", logo: "/SVG/Rag--Streamline-Carbon.svg" },
//   { name: "Hugging Face", logo: "/SVG/hugging_face.svg" },
//   { name: "OpenAI", logo: "/SVG/openai.svg" },
//   { name: "Claude", logo: "/SVG/claude-ai-icon.svg" },
//   { name: "Deepseek", logo: "/SVG/deepseek.svg" },
//   { name: "Qwen", logo: "/SVG/qwen_light.svg" },
//   { name: "OpenRouter", logo: "/SVG/openrouter_light.svg" },
//   { name: "Docker", logo: "/SVG/docker.svg" },
//   { name: "CI/CD", logo: "/SVG/ci-cd-svgrepo-com.svg" },
//   { name: "Nginx", logo: "/SVG/nginx-icon.svg" },
//   { name: "AWS", logo: "/SVG/aws_light.svg" },
//   { name: "Vercel", logo: "/SVG/vercel.svg" },
//   { name: "Render", logo: "/SVG/render-seeklogo.svg" },
//   { name: "Linux", logo: "/SVG/linux.svg" },
//   { name: "TurboRepo", logo: "/SVG/turborepo.svg" },
//   { name: "Clerk", logo: "/SVG/clerk-wordmark-light.svg" },
//   { name: "V0", logo: "/SVG/v0_light.svg" },
//   { name: "Cursor", logo: "/SVG/cursor_light.svg" },
//   { name: "Bolt", logo: "/SVG/bolt-new.svg" },
//   { name: "Lovable", logo: "/SVG/lovable.svg" },
// ];

// export const faqs = [
//   {
//     question: "What is your current availability?",
//     answer:
//       "I'm currently available for freelance projects and open to full-time opportunities. I can dedicate 30-40 hours per week to new projects while maintaining my studies.",
//   },
//   {
//     question: "What are you most passionate about in development?",
//     answer:
//       "I'm passionate about building practical, impactful software that solves real-world problems. I particularly enjoy working with AI integration, full-stack development, and creating smooth user experiences.",
//   },
//   {
//     question: "What was your primary role in the projects listed?",
//     answer:
//       "In most projects, I served as the lead developer, handling both frontend and backend development. I was responsible for architecture decisions, UI/UX implementation, database design, and deployment.",
//   },
//   {
//     question: "Do you work with teams or prefer solo projects?",
//     answer:
//       "I enjoy both! I've successfully delivered solo projects but also thrive in collaborative environments. I believe the best solutions often come from diverse perspectives and team collaboration.",
//   },
//   {
//     question: "What's your approach to learning new technologies?",
//     answer:
//       "I learn best by doing—debugging, building, and shipping. I start with documentation, build small projects, and then apply the technology to solve real problems. This hands-on approach helps me understand both the capabilities and limitations of new tools.",
//   },
// ];

// const scrollToSection = (
//   e: React.MouseEvent<HTMLAnchorElement>,
//   sectionId: string,
// ) => {
//   e.preventDefault();
//   const element = document.getElementById(sectionId);
//   if (element) {
//     const headerOffset = 100;
//     const elementPosition = element.getBoundingClientRect().top;
//     const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

//     window.scrollTo({
//       top: offsetPosition,
//       behavior: "smooth",
//     });
//   }
// };

// export const navItems = [
//   {
//     title: "Home",
//     href: "hero",
//     icon: <Home className="h-full w-full" />,
//     onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
//       scrollToSection(e, "hero"),
//   },
//   {
//     title: "Experience",
//     href: "experience",
//     icon: <ClipboardList className="h-full w-full" />,
//     onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
//       scrollToSection(e, "experience"),
//   },
//   {
//     title: "About",
//     href: "about",
//     icon: <User className="h-full w-full" />,
//     onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
//       scrollToSection(e, "about"),
//   },
//   {
//     title: "Testimonials",
//     href: "testimonials",
//     icon: <Quote className="h-full w-full" />,
//     onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
//       scrollToSection(e, "testimonials"),
//   },
//   {
//     title: "Skills",
//     href: "skills",
//     icon: <Zap className="h-full w-full" />,
//     onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
//       scrollToSection(e, "skills"),
//   },
//   {
//     title: "Projects",
//     href: "projects",
//     icon: <Briefcase className="h-full w-full" />,
//     onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
//       scrollToSection(e, "projects"),
//   },
//   {
//     title: "FAQ",
//     href: "faq",
//     icon: <HelpCircle className="h-full w-full" />,
//     onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
//       scrollToSection(e, "faq"),
//   },
//   {
//     title: "Contact",
//     href: "contact",
//     icon: <Mail className="h-full w-full" />,
//     onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
//       scrollToSection(e, "contact"),
//   },
// ];
// wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
import { type EasingDefinition, type Transition } from "motion/react";
import {
  Home,
  Zap,
  Briefcase,
  Mail,
  User,
  Quote,
  HelpCircle,
  ClipboardList,
} from "lucide-react";
import React from "react";

// --- ANIMATION CONSTANTS ---
export const calmEase: EasingDefinition = [0.23, 1, 0.32, 1];
export const gentleSpring: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
};

// --- DATA CONSTANTS ---
// export const projects = [
//   {
//     id: 1,
//     title: "VectorDB",
//     shortDescription:
//       "A high-performance, Rust-based vector database with a decoupled Python embedding service.",
//     fullDescription:
//       "A lightweight, high-performance vector database built in Rust (Axum) for speed, featuring a decoupled Python (FastAPI) microservice for multi-model embedding generation (MiniLM, BGE, OpenAI, etc.), comprehensive REST APIs, and file-based persistence.",
//     image: "/projects/VectorDB.png",
//     video: "https://www.loom.com/share/e2880d78d93f4cc18944c1ee5674a874",
//     link: "https://github.com/YourRepo/VectorDB",
//     github: "https://github.com/YourRepo/VectorDB",
//     tags: [
//       "Rust",
//       "Axum",
//       "Python",
//       "FastAPI",
//       "Vector Database",
//       "AI/ML",
//       "Embedding",
//       "Concurrency",
//       "Docker",
//       "REST API",
//     ],
//     type: "Rust",
//   },
//   {
//     id: 2,
//     title: "Zentry Clone",
//     shortDescription:
//       "Recreation of the Zentry website with modern UI components and responsive design.",
//     fullDescription:
//       "Recreation of the Zentry website with modern UI components and responsive design.",
//     image: "/projects/zentry.png",
//     video: "/placeholder.svg?text=Zentry+Demo",
//     // link: "https://zentry-clone-delta.vercel.app/",
//     github: "https://github.com/NiMs-TG10/Zentry-Frontend",
//     tags: ["React", "GSAP", "Styled Components", "Tailwind CSS"],
//     type: "fullstack",
//   },
//   {
//     id: 4,
//     title: "Showcase Portfolio",
//     shortDescription:
//       "A creative website with stunning animations and interactive elements.",
//     fullDescription:
//       "A creative website with stunning animations and interactive elements.",
//     image: "/projects/obsy.png",
//     video: "/placeholder.svg?text=Obsy+Agency+Demo",
//     // link: "https://dev-kaif.github.io/Obys-Agency/",
//     github: "https://github.com/NiMs-TG10/Fancy-Portfolio",
//     tags: ["HTML", "CSS", "JavaScript", "GSAP"],
//     type: "fullstack",
//   },
//   {
//     id: 10,
//     title: "High-Performance Leveraged Trading System",
//     shortDescription:
//       "A production-grade, microservices-based financial trading platform supporting leveraged positions, real-time execution, and automatic liquidation.",
//     fullDescription:
//       "This system demonstrates a production-grade microservices architecture for financial trading, with four core components:\n\n1. **Trading Engine (Rust):** Core logic for order execution, risk management (automatic liquidations), and balance management. It uses **Redis Streams** for real-time order processing and persistent snapshots for fault tolerance.\n2. **HTTP Server (TypeScript/Bun):** Provides a **REST API** for user-facing endpoints (trade creation/closing, balance queries) and uses **Redis Pub/Sub** for request-response communication.\n3. **Price Poller (TypeScript/Bun):** Connects to external exchanges (e.g., Backpack Exchange) via **WebSockets** to fetch, normalize, and distribute live market data.\n4. **Pub-Sub Server (TypeScript/Bun):** A dedicated **WebSocket server** for broadcasting live price streams and event updates to frontend client applications.\n\nThe system supports leveraged trading (1x-100x) on assets like BTC, SOL, and ETH, with real-time execution and continuous risk monitoring for automatic liquidation.",
//     image: "/projects/TradingSystem.png",
//     video: "/placeholder.svg?text=Trading+System+Demo",
//     link: "",
//     github: "",
//     tags: [
//       "Rust",
//       "TypeScript",
//       "Bun",
//       "Redis",
//       "Redis Streams",
//       "Redis Pub/Sub",
//       "WebSockets",
//       "REST API",
//       "Microservices",
//       "Trading Engine",
//       "Low-Latency",
//       "Risk Management",
//     ],
//     type: "Rust",
//   },
//   {
//     id: 11,
//     title: "Concentrated Liquidity Market Maker (CLMM)",
//     shortDescription:
//       "A Uniswap V3-inspired Concentrated Liquidity Automated Market Maker (AMM) implemented on the Solana blockchain.",
//     fullDescription:
//       "This project is an implementation of a Concentrated Liquidity AMM, similar to Uniswap V3, built specifically for the **Solana** blockchain using the **Anchor framework**. The goal was to deeply understand and implement the core mathematical concepts of concentrated liquidity and efficient liquidity management.\n\nKey features include: Liquidity Providers (LPs) offering liquidity within specific price ranges; flexible, configurable fee tiers; tick-based pricing for precise liquidity tracking; and a complete suite of position management functions (create, modify, remove).\n\nThe architecture relies on specific on-chain accounts (**Pool** and **Position**) and core functions like `initialize_pool`, `add_liquidity/remove_liquidity`, `swap`, and `collect_fees` to handle the decentralized exchange mechanics.",
//     image: "/projects/SolanaCLMM.png",
//     video: "/placeholder.svg?text=CLMM+Demo",
//     link: "",
//     github: "",
//     tags: [
//       "Solana",
//       "Anchor",
//       "Rust",
//       "TypeScript",
//       "AMM",
//       "DeFi",
//       "Concentrated Liquidity",
//       "Uniswap V3",
//     ],
//     type: "Solana",
//   },
//   {
//     id: 12,
//     title: "High-Performance Website Monitoring System",
//     shortDescription:
//       "A scalable, distributed website monitoring application tracking uptime, response times, and notifying users of downtime events across multiple geographical regions.",
//     fullDescription:
//       "Inspired by leading monitoring services, this system is built for high-performance and scalability. The architecture leverages **Rust** for low-latency workers and utilizes a microservices approach for distributed load across regions.\n\n**Data Flow & Storage:** \n- **REST API (Poem framework):** Handles CRUD operations for websites and regions.\n- **PostgreSQL:** Used for persistent storage of metadata (website configurations).\n- **Redis Streams:** Serves as the backbone for distributing monitoring jobs to scalable workers and syncing with the database.\n- **InfluxDB:** Dedicated time-series database for storing high-frequency response time metrics.\n\n**Core Features:** Uptime/downtime checks every 3 minutes, time-series data visualization, precise downtime detection, and email notifications via **Lettre**.",
//     image: "/projects/MonitoringApp.png",
//     video: "/placeholder.svg?text=Monitoring+App+Demo",
//     link: "",
//     github: "",
//     tags: [
//       "Rust",
//       "Poem",
//       "PostgreSQL",
//       "Redis",
//       "InfluxDB",
//       "Redis Streams",
//       "Tokio",
//       "Tokio-Cron-Scheduler",
//       "Time-Series Database",
//       "Scalable Workers",
//       "SMTP",
//     ],
//     type: "fullstack",
//   },
//   {
//     id: 13,
//     title: "git-acm (git auto-commit-message)",
//     shortDescription:
//       "A CLI tool that generates instant, meaningful commit messages using AI models based on the staged changes in a Git repository.",
//     fullDescription:
//       "git-acm is a command-line utility built in **Rust** designed to automate the process of writing descriptive Git commit messages. It analyzes the differences in staged files and uses a selected Large Language Model (LLM) to generate a concise and relevant commit message.\n\n**Key Features:**\n- **Multi-API Support:** Integrates with **Gemini**, **OpenAI**, **Anthropic**, **DeepSeek**, and **Ollama (Llama)** via API keys.\n- **Model Selection:** Users can select their preferred model using the `git-acm use <model_name>` command.\n- **Autocommit:** Optional feature to automatically commit changes using the generated message (`git-acm autocommit enable`).\n\n**Installation** is handled via a simple `curl` script or the Rust package manager, `cargo`.",
//     image: "/projects/GitAcm.png",
//     // video: "/placeholder.svg?text=git-acm+Demo",
//     // link: "https://github.com/shivamhwp/git-acm",
//     github: "https://github.com/NiMs-TG10/Git-auto-commit-",
//     tags: [
//       "Rust",
//       "CLI",
//       "Git",
//       "LLM",
//       "Gemini API",
//       "OpenAI API",
//       "Anthropic API",
//       "DeepSeek API",
//       "Ollama",
//       "Cargo",
//       "Automation",
//     ],
//     type: "Rust",
//   },
//   {
//     id: 14,
//     title: "HCI Interaction Recorder",
//     shortDescription:
//       "A cross-platform desktop application built in Rust to capture and log user interactions (mouse, clicks, keyboard) for creating Human-Computer Interaction (HCI) model training datasets.",
//     fullDescription:
//       "The HCI Interaction Recorder is a simple, high-performance desktop application designed to capture rich datasets of user input for research and AI training. It records precise **mouse movements (X/Y coordinates)**, all **mouse clicks**, and **keyboard input**.\n\nBuilt entirely in **Rust** with the **eframe** GUI framework, the application is inherently **cross-platform** (Windows, macOS, Linux).\n\n**Data Output:** All events are saved in a clean, sequential **JSON format**, with every event meticulously **timestamped** to enable accurate, sequential analysis of human behavior. The simple, **always-on-top GUI** allows researchers to name a task and control the start/stop of the recording process easily.",
//     image: "/projects/HCI-Recorder.png",
//     video: "/placeholder.svg?text=HCI+Recorder+Demo",
//     link: "",
//     github:
//       "https://github.com/NiMs-TG10/interaction-recorder-Robotic-Process-Automation-RPA-tool-",
//     tags: [
//       "Rust",
//       "eframe",
//       "GUI",
//       "HCI",
//       "Cross-Platform",
//       "Data Generation",
//       "JSON",
//       "Desktop Application",
//       "Input Capture",
//     ],
//     type: "Rust",
//   },
//   {
//     id: 15,
//     title: "Probo-Platform Real-Time Microservices Engine",
//     shortDescription:
//       "A low-latency, real-time microservices architecture for trading or opinion markets, utilizing Rust and Actix for high-performance execution and WebSockets for client communication.",
//     fullDescription:
//       "This architecture supports a high-throughput platform (e.g., a prediction market or trading system) that requires low-latency execution and real-time updates. The system is broken into three core, decoupled components:\n\n1.  **Web Server (Actix/WsActor):** Acts as the **Entry Point and Real-Time Bridge** to the client. It uses **Actix** (a high-performance Rust web framework) and **WebSockets** to handle all inbound client requests and outbound real-time data.\n2.  **Matching Engine (Rust Struct/RwLock):** This is the **Core Logic** component. It is highly optimized (built in Rust) to execute trades, manage order books, and update in-memory balances using thread-safe primitives like **RwLock** for concurrency.\n3.  **DB Processor / Worker (Async Worker):** Handles **Persistence**. This asynchronous worker reads tasks from the message queue and performs slow, durable storage operations to the underlying database, ensuring the core engine remains fast.\n\n**Inter-Component Communication:** The entire system is decoupled using **Redis** as a **Message Broker** for communication queues and pub/sub channels, enabling scalable, non-blocking message passing between all server-side components. This makes the architecture robust and horizontally scalable.",
//     image: "/projects/ProboRealTimeEngine.png",
//     video: "/placeholder.svg?text=Probo+Engine+Demo",
//     link: "",
//     github: "https://github.com/NiMs-TG10/Probo-Platform",
//     tags: [
//       "Rust",
//       "Actix",
//       "WebSockets",
//       "Redis",
//       "Redis Queues",
//       "Microservices",
//       "Real-Time",
//       "Matching Engine",
//       "Concurrency (RwLock)",
//       "Async Worker",
//       "TS/JS/CSS (Frontend)",
//     ],
//     type: "Rust",
//   },
//   {
//     id: 18,
//     title: "Solana TSS Wallet API",
//     shortDescription:
//       "A high-performance RESTful API built in Rust for managing a Solana Threshold Signature Scheme (TSS) wallet, supporting multi-party signing and core Solana operations.",
//     fullDescription:
//       "This project is a high-performance **RESTful API** developed in **Rust** using the **Poem web framework**, converted from a previous CLI tool to simplify interaction with TSS wallet functionality. The API manages a **Solana Threshold Signature Scheme (TSS) wallet**, enabling multi-party signing crucial for secure, decentralized custody solutions.\n\n**Core Capabilities:**\n- **Wallet Management:** Key generation, balance checks, and requesting airdrops.\n- **Transaction Types:** Supports standard **single-key transactions** and the complex multi-step **TSS signature aggregation** (steps 1, 2, and final broadcast).\n- **Network Compatibility:** Designed to interact with Solana's **Mainnet, Testnet, or Devnet**.\n\nAll endpoints are exposed over HTTP, making TSS operations accessible to any external application.",
//     image: "/projects/SolanaTSSAPI.png",
//     video: "/placeholder.svg?text=Solana+TSS+API+Demo",
//     link: "https://github.com/0x-pankaj/solana-tss-cli-to-api",
//     github: "https://github.com/NiMs-TG10/Solana-tss-cli-to-API",
//     tags: [
//       "Rust",
//       "Poem (Web Framework)",
//       "Solana",
//       "TSS (Threshold Signature Scheme)",
//       "REST API",
//       "Cryptocurrency Wallet",
//       "Multi-Party Computation",
//       "Blockchain",
//     ],
//     type: "Solana",
//   },
//   {
//     id: 19,
//     title: "Solana Carbon Credit Tokenization System",
//     shortDescription:
//       "A blockchain-based carbon credit marketplace on Solana that tokenizes real-world carbon offsets into tradeable, verifiable, and permanent digital assets.",
//     fullDescription:
//       "This project digitalizes the carbon credit market by using the Solana blockchain to create a token called **CarbonCredit (CC)**, which represents real-world environmental offsets. The system ensures credits are **Transparent, Tradeable, Verifiable, and Retirable** (burned to claim offset benefit).\n\n**Core Functions (Smart Contract Logic):**\n- `initialize_mint`: Creates the initial **SPL Token** and sets up metadata via **Metaplex**.\n- `mint_tokens`: Issues new CC tokens only by authorized entities upon verified sequestration.\n- `transfer_tokens`: Facilitates the buying, selling, and trading of credits on a marketplace.\n- `burn_tokens`: **Permanently retires** credits to prevent double-counting when a company officially offsets their emissions.\n\n**Key Benefits:** The system eliminates fraud and duplication, lowers costs by removing intermediaries, and enables real-time global trading, establishing a transparent and efficient market foundation.",
//     image: "/projects/SolanaCarbonCredit.png",
//     video: "/placeholder.svg?text=Carbon+Credit+System+Demo",
//     // link: "",
//     github: "https://github.com/NiMs-TG10/Solana-Carbon-Credit",
//     tags: [
//       "Solana",
//       "Blockchain",
//       "SPL Token Standard",
//       "Metaplex",
//       "Carbon Credits",
//       "DeFi",
//       "ESG/Sustainability",
//       "Tokenization",
//       "Smart Contracts",
//     ],
//     type: "Solana",
//   },
//   {
//     id: 20,
//     title: "Pinocchio Fundraiser (Solana On-Chain Program)",
//     shortDescription:
//       "A work-in-progress Solana on-chain program for decentralized fundraising campaigns, meticulously optimized for low compute unit (CU) consumption.",
//     fullDescription:
//       "The Pinocchio Fundraiser is a core **Solana Program** designed to manage tokenized fundraising campaigns. Its architecture prioritizes performance and resource efficiency, evidenced by its focus on Compute Unit (CU) consumption, with key instructions like Initialize (2178 CUs), Contribute (6457 CUs), and Checker (7247 CUs).\n\n**Architectural Highlights:**\n- **No-Standard Library (`no_std`):** The `entrypoint.rs` and `lib.rs` are compiled without the standard library, disabling heap allocations (`global allocator is disabled`) for maximum performance tweaks.\n- **Account States:** Uses manual serialization/deserialization helper functions (`load_acc`, `load_mut_acc`) for account state management, avoiding reliance on external crates where possible.\n- **Testing:** Utilizes **mollusk-svm**, a lightweight testing framework, to run tests without a full Solana cluster.\n\n**Core Functions:**\n- `Initialize`: Sets up the campaign's Program Derived Address (PDA) using `CreateAccount` CPI.\n- `Contribute`: Handles contributions via `CreateAccount` and `TransferChecked` CPIs.\n- `Checker`: Completes the campaign and finalizes transactions using `TransferChecked` and `CloseAccount` CPIs.",
//     image: "/projects/PinocchioFundraiser.png",
//     video: "/placeholder.svg?text=Pinocchio+Fundraiser+Demo",
//     link: "https://github.com/the-repo-link-here",
//     github: "https://github.com/NiMs-TG10/fundraiser-pinocchio",
//     tags: [
//       "Solana Program",
//       "Rust",
//       "no_std",
//       "Compute Unit Optimization",
//       "CPI (Cross-Program Invocation)",
//       "PDA (Program Derived Address)",
//       "Fundraising",
//       "mollusk-svm",
//       "Decentralized Finance (DeFi)",
//     ],
//     type: "Solana",
//   },
//   {
//     id: 11,
//     title: "Ai-Terminal",
//     shortDescription:
//       "An AI-powered, cross-platform Command Line Interface (CLI) tool with a modern React/Ink-based terminal UI for interactive code error analysis and fixing.",
//     fullDescription:
//       "ScryCLI is a developer utility that brings a modern, interactive experience to code error detection. It leverages an **AI-Powered Analysis** engine to quickly detect and analyze errors within a codebase. The tool is designed to be cross-platform (Windows, macOS, Linux) and built on a powerful frontend stack adapted for the terminal.\n\n**Technology Stack:**\n- **Terminal UI:** Uses **React** and **Ink** to create a **Beautiful Terminal UI** with user-friendly prompts and real-time feedback.\n- **Core Language:** Built with **TypeScript** for type safety.\n- **Utilities:** Uses **Commander** for efficient CLI argument parsing and management.\n\nUsers interact by selecting a file path, analyzing the code, and viewing AI-powered results within the console.",
//     image: "/projects/ScryCLI.png",
//     video: "/placeholder.svg?text=ScryCLI+Demo",
//     // link: "<repository-url>",
//     github: "https://github.com/NiMs-TG10/AI_CLI-Terminal-",
//     tags: [
//       "AI/ML",
//       "CLI",
//       "React",
//       "Ink",
//       "TypeScript",
//       "Node.js",
//       "Commander",
//       "Terminal UI",
//       "Cross-Platform",
//     ],
//     type: "Ai",
//   },
//   {
//     id: 7,
//     title: "AI-Powered Next.js Development Tool (ai-next-builder)",
//     shortDescription:
//       "A sophisticated AI agent that builds and modifies Next.js applications using natural language commands within secure, isolated E2B sandboxes.",
//     fullDescription:
//       "This is a full-stack, AI-driven development tool designed to create and modify **Next.js 15** applications using natural language inputs. The **LangGraph-powered AI agent** acts as a developer, executing commands via a set of specific tools: **Terminal Execution**, **File Operations**, and **File Reading**.\n\n**Architectural Stack:**\n- **Frontend:** Next.js 15 (TypeScript, Tailwind CSS, Shadcn/UI).\n- **API:** **tRPC** for type-safe communication.\n- **Agent/Execution:** **LangGraph** for workflow logic, **OpenAI/OpenRouter** for LLM power, and **E2B Code Interpreter Sandboxes** for secure, isolated code execution.\n- **Asynchronous/Persistence:** **Inngest** manages reliable background job processing, and **MongoDB** handles conversation checkpointing for persistent session memory. **Langfuse** is integrated for AI observability and monitoring.",
//     image: "/projects/AINextBuilder.png",
//     video: "/placeholder.svg?text=AI+Next.js+Builder+Demo",
//     link: "<repository-url>",
//     github: "<repository-url>",
//     tags: [
//       "Next.js 15",
//       "TypeScript",
//       "LangGraph",
//       "AI Agent",
//       "E2B Sandboxes",
//       "OpenAI",
//       "OpenRouter",
//       "Inngest",
//       "MongoDB",
//       "tRPC",
//       "Tailwind CSS",
//       "Shadcn/UI",
//       "Langfuse",
//     ],
//     type: "Ai",
//   },
//   {
//     id: 4,
//     title: "MyProposal.live: AI-Powered Multi-Channel Proposal Generator",
//     shortDescription:
//       "A comprehensive Next.js application leveraging dual AI integration (OpenAI & Gemini) and multi-channel delivery (Email & WhatsApp) to generate and share personalized romantic proposals.",
//     fullDescription:
//       "MyProposal.live is a feature-rich, full-stack application that revolutionizes proposal creation. It achieves strong product-market fit by combining advanced **AI-Powered Proposal Generation** with reliable multi-channel delivery.\n\n**AI Layer:** The platform uses a **Dual AI Integration** (OpenAI GPT and Google Gemini) to generate personalized, multi-format, and multi-language proposals with customizable tone and emotional depth.\n\n**Delivery Architecture:** The robust **Delivery Pipeline** ensures high success rates (98%+). It integrates **AWS SES** (for email with HTML templates) and the **Twilio API** (for instant WhatsApp messaging), complete with real-time analytics, status updates, and automated retry mechanisms.\n\n**Core Stack:** The application is built on **Next.js 15, React, and TypeScript**, using **NextAuth.js** and **Google OAuth** for secure authentication, and **Tailwind CSS/shadcn/ui** for a responsive, modern user experience. Data persistence for user profiles, history, and analytics is managed by **PostgreSQL/MongoDB**.",
//     image: "/projects/MyProposal.live.png",
//     video: "/placeholder.svg?text=MyProposal.live+Demo",
//     link: "https://myproposal.live/",
//     github: "",
//     tags: [
//       "Next.js 15",
//       "React",
//       "TypeScript",
//       "OpenAI GPT",
//       "Google Gemini AI",
//       "AWS SES",
//       "Twilio API",
//       "NextAuth.js",
//       "Google OAuth",
//       "Tailwind CSS",
//       "PostgreSQL/MongoDB",
//       "Fullstack",
//       "SaaS",
//     ],
//     type: "Ai",
//   },
//   {
//     id: 2,
//     title: "Colabrative Canvas ",
//     shortDescription:
//       "A collaborative sketching tool with infinite canvas and real-time drawing.",
//     fullDescription:
//       "A collaborative sketching tool with infinite canvas, real-time drawing, and smooth zoom/pan interactions.",
//     image: "/projects/SketchWiz.png",
//     video: "/placeholder.svg?text=SketchWiz+Demo",
//     link: "https://github.com/your-username/sketchwiz",
//     github: "https://github.com/your-username/sketchwiz",
//     tags: [
//       "Turborepo",
//       "Next.js",
//       "React",
//       "Node.js",
//       "Express",
//       "WebSockets (Socket.IO)",
//       "Google Gemini AI",
//       "Prisma ORM",
//       "PostgreSQL",
//       "Tailwind CSS",
//       "Framer Motion",
//       "Monorepo",
//     ],
//     type: "Ai",
//   },
//   {
//     id: 3,
//     title: "Beatflow – AI-Powered Music Generation Platform",
//     shortDescription:
//       "An end-to-end, multi-service application that generates full music tracks, lyrics, and cover art from user prompts, utilizing a decoupled Next.js/Node.js/Python architecture.",
//     fullDescription:
//       "Beatflow is a comprehensive platform for AI music creation, split into three high-performance, decoupled services:\n\n1. ",
//     image: "/projects/Beatflow.png",
//     video: "https://youtu.be/cRrX_xsLS1E",
//     link: "https://www.beatflow.art",
//     github: "",
//     tags: [
//       "Next.js",
//       "TypeScript",
//       "React",
//       "TailwindCSS",
//       "Zustand",
//       "Neon (Postgres)",
//       "Upstash Redis",
//       "Modal",
//       "Python",
//       "Node.js",
//       "Express",
//       "FFmpeg",
//       "Cloudflare R2",
//       "AI Music Generation",
//       "stabilityai/sdxl-turbo",
//       "Microservices",
//     ],
//     type: "Ai",
//   },
//   {
//     id: 25,
//     title: "EC2 Deployment Workflow via GitHub Actions (SSH/PM2)",
//     shortDescription:
//       "A robust GitHub Actions workflow that automates code deployment to an AWS EC2 instance on push to the 'main' branch, using SSH and PM2.",
//     fullDescription:
//       "This project provides an end-to-end continuous deployment (CD) solution using **GitHub Actions** to deploy code onto a remote **Amazon EC2** instance. The core mechanism is based on the **appleboy/ssh-action** to securely execute shell commands on the remote server.\n\n**Workflow Steps:**\n1.  **Checkout Repository:** Fetches the code onto the GitHub runner.\n2.  **Execute Remote SSH Commands:** Connects to the EC2 instance using a **GitHub Secret** (`SSH_PRIVATE_KEY`) for secure authentication.\n\n**Remote Execution Script (on EC2):**\n- Changes directory to the application's root.\n- Executes `git pull origin main` to fetch the latest code.\n- Executes `pm2 restart all` to reload the application processes, assuming **PM2** is used as the Node.js process manager.\n\n**Educational Value:** The README provides an in-depth guide covering GitHub Actions **YAML syntax**, core concepts (Workflow, Job, Step, Runner, Action), and critical features like **Secrets**, built-in **Contexts** (e.g., `github`, `env`), and best practices.",
//     image: "/projects/GitHub-EC2-Deployment.png",
//     video: "/placeholder.svg?text=GitHub+Actions+EC2+Deployment",
//     // link: "https://github.com/your-repo-link",
//     github: "https://github.com/NiMs-TG10/CI-CD-pipeline-",
//     tags: [
//       "GitHub Actions",
//       "CI/CD",
//       "AWS EC2",
//       "SSH",
//       "PM2",
//       "YAML",
//       "Continuous Deployment",
//       "appleboy/ssh-action",
//       "Ubuntu",
//       "Node.js",
//     ],
//     type: "fullstack",
//   },
//   {
//     id: 10,
//     title: "GoSearch – Lightweight URL Shortcut Extension",
//     shortDescription:
//       "A lightweight Chrome extension that allows users to create custom shortcuts for websites, enabling instant redirection directly from the browser's address bar (Omnibox).",
//     fullDescription:
//       "GoSearch is a productivity tool built as a **Chrome extension** designed to eliminate long URLs and clutter. Users define custom shortcuts (e.g., `go yt`) to instantly navigate to their favorite websites directly from the browser's address bar.\n\n**Key Architecture & Features:**\n- **Omnibox Integration:** The core functionality relies on integrating with the browser's Omnibox using the default trigger keyword: `go`.\n- **Storage:** Shortcut data is securely managed and persisted using **Chrome Sync Storage**, allowing settings to sync across the user's logged-in devices.\n- **User Interface:** Includes a clean **popup UI** for easy management of shortcuts (add, edit, delete).\n\nThe project is built using a standard modern web stack (implied **JavaScript/TypeScript** and **Node.js/npm** for build) and is designed for Chromium-based browsers.",
//     image: "/projects/GoSearchExtension.png",
//     video: "/placeholder.svg?text=GoSearch+Demo",
//     link: "https://github.com/yourusername/gosearch",
//     github: "https://github.com/NiMs-TG10/Fast-Search-Ext",
//     tags: [
//       "Chrome Extension",
//       "Chromium",
//       "JavaScript/TypeScript",
//       "Omnibox API",
//       "Chrome Sync Storage",
//       "Productivity Tool",
//       "Web Extension",
//     ],
//     type: "FullStack",
//   },
//   {
//     id: 5,
//     title: "Full-Stack URL Shortener with Real-Time Analytics",
//     shortDescription:
//       "A high-performance, full-stack URL shortener application featuring a Python/FastAPI backend with Redis caching and a modern Next.js 15 frontend with a real-time analytics dashboard.",
//     fullDescription:
//       "This project implements a complete, scalable URL shortening service with a **decoupled architecture** for performance and maintainability.\n\n**Backend (API - FastAPI):**\n- Built with **Python (FastAPI)**, supporting **Async/Await** for high concurrency and **RESTful API** design.\n- **Data Layer:** Uses **PostgreSQL** for reliable data storage (managed with **SQLAlchemy/Alembic**) and **Redis** for millisecond-latency redirect caching.\n- **Authentication:** Secured via **JWT Authentication**.\n\n**Frontend (Client - Next.js):\n- A modern, responsive interface built with **Next.js 15, React 19, TypeScript**, and **Tailwind CSS 4** with **shadcn/ui** components.\n- **Key Features:** Provides a fully secured **Analytics Dashboard** (using **Recharts**) to track clicks, referrers, and geo-data in real-time, along with comprehensive **URL Management** functionality.\n- **Integration:** The frontend communicates with the backend via **Axios** (with interceptors) and handles state persistence using **Zustand**.",
//     image: "/projects/FullStackURLShortener.png",
//     video: "/placeholder.svg?text=Full-Stack+URL+Shortener+Demo",
//     link: "",
//     github: "",
//     tags: [
//       "FastAPI",
//       "Python",
//       "PostgreSQL",
//       "Redis",
//       "Next.js 15",
//       "React 19",
//       "TypeScript",
//       "Tailwind CSS 4",
//       "shadcn/ui",
//       "JWT Authentication",
//       "Zustand",
//       "Recharts",
//       "SQLAlchemy",
//     ],
//     type: "fullstack",
//   },
//   // {
//   //   id: 30,
//   //   title: "Full-Stack Image to Sketch Application (FastAPI & Next.js)",
//   //   shortDescription:
//   //     "A high-performance, full-stack application that converts images to sketches using a Python/FastAPI backend (OpenCV, NumPy) and a modern Next.js 15 frontend with real-time WebSocket progress tracking.",
//   //   fullDescription:
//   //     "This is a scalable, feature-rich application for image processing and conversion. The architecture is split between a modern frontend and a powerful, asynchronous backend.\n\n**Frontend (Next.js 15):** A responsive, mobile-first interface built with **TypeScript, Tailwind CSS, and shadcn/ui**. Features include **Cookie-based JWT Authentication**, an intuitive **Drag & Drop Dashboard** with **Real-time Progress** (via **WebSocket**), and a **Gallery** with advanced filtering and bulk operations.\n\n**Backend (FastAPI/Python):**\n- **Core Logic:** Handles **Advanced Image Processing** using **OpenCV** and **NumPy** algorithms, running these tasks asynchronously.\n- **Data & Storage:** **PostgreSQL** (with **SQLAlchemy 2.0/Alembic**) for reliable metadata. **Redis** for high-performance session management, caching, and **Rate Limiting**. Processed files are stored in **AWS S3**.\n- **Security:** Features **Google OAuth 2.0** and secure **JWT** token management.",
//   //   image: "/projects/ImageToSketchFullStack.png",
//   //   video: "/placeholder.svg?text=Image+To+Sketch+Demo",
//   //   link: "",
//   //   github: "",
//   //   tags: [
//   //     "Next.js 15",
//   //     "TypeScript",
//   //     "Tailwind CSS",
//   //     "shadcn/ui",
//   //     "FastAPI",
//   //     "Python",
//   //     "OpenCV",
//   //     "NumPy",
//   //     "PostgreSQL",
//   //     "SQLAlchemy 2.0",
//   //     "Redis",
//   //     "AWS S3",
//   //     "WebSockets",
//   //     "JWT Authentication",
//   //     "Google OAuth 2.0",
//   //     "Docker",
//   //   ],
//   //   type: "fullstack",
//   // },
//   {
//     id: 31,
//     title: "Display Manager (macOS Menu Bar App)",
//     shortDescription:
//       "A lightweight macOS menu bar application built with Swift and SwiftUI that allows users to save, manage, and quickly switch between multiple display and monitor configurations.",
//     fullDescription:
//       "Display Manager is a dedicated utility for macOS that solves the problem of frequently managing multi-monitor setups. It sits in the menu bar for **Quick Access** and allows users to **Save Current Setup** as named profiles, **Apply Profiles** with a single click, and utilize a **Visual Preview** feature before making changes.\n\n**Technical Architecture:**\n- **Core Stack:** The application is built using modern Apple frameworks: **Swift** and **SwiftUI** for the user interface, with **AppKit** for system-level menu bar integration, and **CoreGraphics** for display geometry.\n- **Core Logic:** The app is dependent on and bundles the external **`displayplacer`** binary to handle all system-level tasks: detecting configuration, parsing properties, and applying new display arrangements.\n- **Data Management:** Profiles are stored persistently using a simple **JSON-based storage** structure, including a unique identifier (UUID) and the specific `displayplacer` configuration arguments.",
//     image: "/projects/DisplayManager.png",
//     video: "/placeholder.svg?text=Display+Manager+Demo",
//     link: "https://github.com/your-username/display-manager",
//     github: "https://github.com/NiMs-TG10/Window-Tiling-Manager-Swift",
//     tags: [
//       "macOS",
//       "Swift",
//       "SwiftUI",
//       "AppKit",
//       "CoreGraphics",
//       "Menu Bar App",
//       "displayplacer",
//       "Utility",
//       "Multi-Monitor",
//     ],
//     type: "Swift",
//   },
//   {
//     id: 32,
//     title: "Threads Clone (SwiftUI + Firebase)",
//     shortDescription:
//       "A complete, modern clone of the social media platform Threads, built natively for iOS using SwiftUI for the UI and Firebase as the scalable, serverless backend.",
//     fullDescription:
//       "This project is a full-featured clone of the Threads application, demonstrating proficiency in modern iOS development and serverless architecture. The application is built for seamless performance and a native user experience.\n\n**Frontend (SwiftUI):**\n- Utilizes **SwiftUI** for a declarative, reactive, and modern user interface.\n- Implements key UI features such as a feed, user profiles, thread creation, and discovery.\n- Uses **Combine** for handling data flow and reactive updates from the Firebase backend.\n\n**Backend (Firebase):**\n- **Database:** **Cloud Firestore** for storing user data, thread content, likes, replies, and followers. Its real-time synchronization features enable the instant feed updates characteristic of social media.\n- **Authentication:** **Firebase Authentication** for secure user registration, login, and session management.\n- **Storage:** **Firebase Storage** for handling user-uploaded content, such as profile pictures and images attached to threads.\n- **Scalability:** The serverless architecture allows the application to handle growth and high traffic with minimal infrastructure management.",
//     image: "/projects/ThreadsCloneSwiftUI.png",
//     video: "/placeholder.svg?text=Threads+Clone+Demo",
//     // link: "",
//     github: "https://github.com/NiMs-TG10/Threads-Clone-Swiftui-Firebase",
//     tags: [
//       "SwiftUI",
//       "Swift",
//       "iOS",
//       "Firebase",
//       "Cloud Firestore",
//       "Firebase Authentication",
//       "Firebase Storage",
//       "Combine",
//       "Mobile Development",
//       "Social Media",
//     ],
//     type: "Swift",
//   },
//   {
//     id: 6,
//     title: "Somnia Swap - Decentralized Exchange (DEX)",
//     shortDescription:
//       "A foundational Automated Market Maker (AMM) Decentralized Exchange built to serve as the unified liquidity hub for the nascent Somnia Network ecosystem.",
//     fullDescription:
//       "SomniSwap is designed to address the critical lack of unified liquidity and fragmented token swaps within the emerging Somnia Network. By establishing a robust **AMM infrastructure**, the platform aims to consolidate scattered pools into efficient trading pairs.\n\n**Key functions** include providing continuous liquidity for token swaps, facilitating simple and seamless user experience, and serving as a crucial **unified liquidity hub**. The project includes a built-in token launchpad to simplify the creation and listing process for new tokens, thereby accelerating the growth and scaling of the entire Somnia DeFi ecosystem.",
//     image: "/projects/SomniaSwap.png",
//     video: "/placeholder.svg?text=SomniaSwap+Demo",
//     link: "",
//     github: "",
//     tags: [
//       "Somnia Network",
//       "Decentralized Exchange (DEX)",
//       "Automated Market Maker (AMM)",
//       "DeFi",
//       "Liquidity Provision",
//       "Token Swaps",
//       "Token Launchpad",
//       "Smart Contracts",
//     ],
//     type: "Solidity",
//   },
//   {
//     id: 8,
//     title: "AfterLife-Protocol: Decentralized Digital Inheritance on Ethereum",
//     shortDescription:
//       "A revolutionary blockchain protocol on Ethereum that enables secure, transparent, and automated digital inheritance of crypto assets using smart contracts, protected against periods of user inactivity.",
//     fullDescription:
//       "AfterLife-Protocol is a full-stack, security-focused solution for digital inheritance. It allows users to create **Digital Wills**, deposit ETH, and designate up to **30 Multi-Beneficiaries** with customizable share allocations, activated after flexible, user-defined **Inactivity Periods**.\n\n**Frontend (Client):** A web application built with **React.js** (using **Vite**) and styled with **Tailwind CSS**. It uses **Wagmi** for seamless Web3 integration and provides a **Real-time Dashboard** for managing wills and monitoring inheritance claims.\n\n**Smart Contract (Backend):** The core logic is a **Smart Contract** developed using the **Foundry** framework and deployed on the **Ethereum (Sepolia)** network. Security features include **Reentrancy Protection**, strict **Access Control**, and comprehensive **Input Validation** on both the contract and frontend levels. Users maintain active status via a simple 'I Am Alive' function.",
//     image: "/projects/AfterLifeProtocol.png",
//     video: "/placeholder.svg?text=AfterLife-Protocol+Demo",
//     link: "https://afterlife-protocol.app/",
//     github: "https://github.com/NiMs-TG10/Will---inheritance--Ethereum",
//     tags: [
//       "Ethereum",
//       "Solidity",
//       "Foundry",
//       "React.js",
//       "Vite",
//       "Tailwind CSS",
//       "Wagmi",
//       "Web3",
//       "DeFi",
//       "Smart Contract Security",
//       "Digital Inheritance",
//     ],
//     type: "Solidity",
//   },
//   {
//     id: 34,
//     title: "Decentralized Perpetual Futures Trading Platform",
//     shortDescription:
//       "A full-stack, decentralized perpetual futures exchange on Ethereum (Sepolia) featuring automated liquidation, an 8-hour funding rate cycle, and a virtual AMM system.",
//     fullDescription:
//       "This is a robust, three-tier decentralized exchange (DEX) designed for perpetual futures trading. The platform enables users to open long/short positions with up to **20x leverage** and customizable slippage, supported by sophisticated risk management and financial mechanisms.\n\n**Architecture:**\n- **Frontend:** **React** application (Vercel) for the interactive UI, charts, and real-time position metrics.\n- **Backend:** **Node.js** service (Google Cloud) responsible for off-chain persistence and fault-tolerant operations.\n- **Smart Contract:** Deployed on **Ethereum Sepolia** (Solidity).\n\n**Core Financial Mechanisms:**\n- **Virtual AMM (vAMM):** Uses a constant product algorithm for price discovery.\n- **Funding Rate:** An 8-hour cycle for balancing long and short interest, utilizing **TWAP** (Time-Weighted Average Price) over the last ten prices.\n- **Risk Management:** Features an **Automated Liquidation System** when margin falls below 2% maintenance margin, optimized by a **Price-based Heap Data Structure** for efficient processing.\n\n**Fault Tolerance:** The Node.js backend ensures reliability with a **PostgreSQL** database for historical data, self-healing **WebSocket** connections, and a fallback mechanism for funding rate execution. Security is ensured by the **OpenZeppelin ReentrancyGuard** in the smart contract.",
//     image: "/projects/PerpetualFuturesDEX.png",
//     video: "/placeholder.svg?text=Perpetual+DEX+Demo",
//     link: "https://decentralised-perpetual-futures-trading-platform-frontend.app/",
//     github: "",
//     tags: [
//       "Ethereum",
//       "Smart Contracts",
//       "Solidity",
//       "Decentralized Exchange (DEX)",
//       "Perpetual Futures",
//       "Virtual AMM (vAMM)",
//       "Liquidation",
//       "Funding Rate",
//       "TWAP",
//       "OpenZeppelin ReentrancyGuard",
//       "React",
//       "Node.js",
//       "PostgreSQL",
//       "WebSockets",
//     ],
//     type: "Solidity",
//   },
//   {
//     id: 35,
//     title: "High-Performance URL Shortener API",
//     shortDescription:
//       "A robust, asynchronous RESTful API for URL shortening and real-time analytics, built with FastAPI, PostgreSQL for durable storage, and Redis for millisecond-latency redirects.",
//     fullDescription:
//       "This project provides a high-performance, production-ready backend for URL shortening. It is architected for speed and scalability ",
//     image: "/projects/URLShortenerAPI_FastAPI.png",
//     video: "/placeholder.svg?text=FastAPI+URL+Shortener+Demo",
//     link: "",
//     github: "",
//     tags: [
//       "FastAPI",
//       "Python",
//       "PostgreSQL",
//       "Redis",
//       "SQLAlchemy",
//       "Alembic",
//       "JWT Authentication",
//       "Pydantic",
//       "RESTful API",
//       "Caching",
//       "Async/Await",
//       "Docker",
//     ],
//     type: "Ai",
//   },
//   {
//     id: 36,
//     title: "Context Engineering CLI Tool (File Tree Generator)",
//     shortDescription:
//       "A lightweight Node.js/TypeScript command-line interface (CLI) utility that analyzes a project directory and outputs its entire structure and context as a formatted JSON object.",
//     fullDescription:
//       "This project is a simple, single-file CLI tool written in **TypeScript** and executed via **Node.js** (`ts-node`). Its primary purpose is **Context Engineering**—generating a machine-readable representation of a codebase.\n\n**Core Logic:**\n- It accepts a target directory path (`process.argv[2]`) and resolves it to an absolute path.\n- It validates that the path exists and is a directory using **`fs.statSync`**.\n- It calls an external function (`generateProjectContext`) to recursively parse the files within the directory.\n- The final output is the project context serialized to a pretty-printed **JSON string** (`JSON.stringify(..., null, 2)`), which can be easily piped or redirected for use by other tools (e.g., AI agents).\n\n**Technology:** The core implementation relies on standard **Node.js modules** (`fs`, `path`) and a simple command-line argument parser.",
//     image: "/projects/ContextEngineeringCLI.png",
//     video: "/placeholder.svg?text=Context+Engineering+CLI+Demo",
//     link: "https://github.com/NiMs-TG10/Context-Engineering-for-getting-the-File-Tree-",
//     github:
//       "https://github.com/NiMs-TG10/Context-Engineering-for-getting-the-File-Tree-",
//     tags: [
//       "Node.js",
//       "TypeScript",
//       "CLI",
//       "fs (File System)",
//       "path (Node Module)",
//       "JSON",
//       "Context Engineering",
//       "Utility",
//     ],
//     type: "Ai",
//   },
// ];

export const projects = [
  // --- AI (7 Projects) ---
  // --- AI (7 Projects) ---
  {
    id: 1,
    title: "Colabrative Canvas ",
    shortDescription:
      "A collaborative sketching tool with infinite canvas and real-time drawing.",
    fullDescription:
      "A collaborative sketching tool with infinite canvas, real-time drawing, and smooth zoom/pan interactions.",
    image: "/projects/SketchWiz.png",
    // video: "/placeholder.svg?text=SketchWiz+Demo",
    // link: "https://github.com/your-username/sketchwiz",
    github: "https://github.com/NiMs-TG10/Ai-collaborative-canvas",
    tags: [
      "Turborepo",
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "WebSockets (Socket.IO)",
      "Google Gemini AI",
      "Prisma ORM",
      "PostgreSQL",
      "Tailwind CSS",
      "Framer Motion",
      "Monorepo",
    ],
    type: "Ai",
  },
  {
    id: 2,
    title: "Beatflow – AI-Powered Music Generation Platform",
    shortDescription:
      "An end-to-end, multi-service application that generates full music tracks, lyrics, and cover art from user prompts, utilizing a decoupled Next.js/Node.js/Python architecture.",
    fullDescription:
      "Beatflow is a comprehensive platform for AI music creation, split into three high-performance, decoupled services:\n\n1. ",
    image: "/projects/Beatflow.png",
    // video: "https://youtu.be/cRrX_xsLS1E",
    // link: "https://www.beatflow.art",
    github: "https://github.com/NiMs-TG10/Ai-Music-Maker",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "TailwindCSS",
      "Zustand",
      "Neon (Postgres)",
      "Upstash Redis",
      "Modal",
      "Python",
      "Node.js",
      "Express",
      "FFmpeg",
      "Cloudflare R2",
      "AI Music Generation",
      "stabilityai/sdxl-turbo",
      "Microservices",
    ],
    type: "Ai",
  },
  {
    id: 3,
    title: "MyProposal.live: AI-Powered Multi-Channel Proposal Generator",
    shortDescription:
      "A comprehensive Next.js application leveraging dual AI integration (OpenAI & Gemini) and multi-channel delivery (Email & WhatsApp) to generate and share personalized romantic proposals.",
    fullDescription:
      "MyProposal.live is a feature-rich, full-stack application that revolutionizes proposal creation. ",
    image: "/projects/MyProposal.live.png",
    video: "/placeholder.svg?text=MyProposal.live+Demo",
    link: "https://myproposal.live/",
    github: "https://github.com/NiMs-TG10/My-proposal-AI",
    tags: [
      "Next.js 15",
      "React",
      "TypeScript",
      "OpenAI GPT",
      "Google Gemini AI",
      "AWS SES",
      "Twilio API",
      "NextAuth.js",
      "Google OAuth",
      "Tailwind CSS",
      "PostgreSQL/MongoDB",
      "Fullstack",
      "SaaS",
    ],
    type: "Ai",
  },
  {
    id: 4,
    title: "AI-Powered Next.js Development Tool (ai-next-builder)",
    shortDescription:
      "A sophisticated AI agent that builds and modifies Next.js applications using natural language commands within secure, isolated E2B sandboxes.",
    fullDescription:
      "This is a full-stack, AI-driven development tool designed to create and modify Next.js 15 applications using natural language inputs.",
    image: "/projects/AINextBuilder.png",
    // video: "/placeholder.svg?text=AI+Next.js+Builder+Demo",
    // link: "<repository-url>",
    github: "https://github.com/NiMs-TG10/Ai-Agent-Next.js",
    tags: [
      "Next.js 15",
      "TypeScript",
      "LangGraph",
      "AI Agent",
      "E2B Sandboxes",
      "OpenAI",
      "OpenRouter",
      "Inngest",
      "MongoDB",
      "tRPC",
      "Tailwind CSS",
      "Shadcn/UI",
      "Langfuse",
    ],
    type: "Ai",
  },
  {
    id: 5,
    title: "Ai-Terminal",
    shortDescription:
      "An AI-powered, cross-platform Command Line Interface (CLI) tool with a modern React/Ink-based terminal UI for interactive code error analysis and fixing.",
    fullDescription:
      "ScryCLI is a developer utility that brings a modern, interactive experience to code error detection. ",
    image: "/projects/ScryCLI.png",
    video: "/placeholder.svg?text=ScryCLI+Demo", // link: "<repository-url>",
    github: "https://github.com/NiMs-TG10/AI_CLI-Terminal-",
    tags: [
      "AI/ML",
      "CLI",
      "React",
      "Ink",
      "TypeScript",
      "Node.js",
      "Commander",
      "Terminal UI",
      "Cross-Platform",
    ],
    type: "Ai",
  },
  // {
  //   id: 6,
  //   title: "High-Performance URL Shortener API",
  //   shortDescription:
  //     "A robust, asynchronous RESTful API for URL shortening and real-time analytics, built with FastAPI, PostgreSQL for durable storage, and Redis for millisecond-latency redirects.",
  //   fullDescription:
  //     "This project provides a high-performance, production-ready backend for URL shortening. It is architected for speed and scalability ",
  //   image: "/projects/URLShortenerAPI_FastAPI.png",
  //   video: "/placeholder.svg?text=FastAPI+URL+Shortener+Demo",
  //   link: "",
  //   github: "",
  //   tags: [
  //     "FastAPI",
  //     "Python",
  //     "PostgreSQL",
  //     "Redis",
  //     "SQLAlchemy",
  //     "Alembic",
  //     "JWT Authentication",
  //     "Pydantic",
  //     "RESTful API",
  //     "Caching",
  //     "Async/Await",
  //     "Docker",
  //   ],
  //   type: "fullstack",
  // },
  {
    id: 7,
    title: "Context Engineering CLI Tool (File Tree Generator)",
    shortDescription:
      "A lightweight Node.js/TypeScript command-line interface (CLI) utility that analyzes a project directory and outputs its entire structure and context as a formatted JSON object.",
    fullDescription:
      "A lightweight Node.js/TypeScript command-line interface (CLI) utility that analyzes a project directory and outputs its entire structure and context as a formatted JSON object.",
    image: "/projects/ContextEngineeringCLI.png",
    video: "/placeholder.svg?text=Context+Engineering+CLI+Demo",
    link: "https://github.com/NiMs-TG10/Context-Engineering-for-getting-the-File-Tree-",
    github:
      "https://github.com/NiMs-TG10/Context-Engineering-for-getting-the-File-Tree-",
    tags: [
      "Node.js",
      "TypeScript",
      "CLI",
      "fs (File System)",
      "path (Node Module)",
      "JSON",
      "Context Engineering",
      "Utility",
    ],
    type: "Ai",
  },

  // --- RUST (5 Projects) ---

  //   --------------------------------------------------------------------------------

  {
    id: 8,
    title: "VectorDB",
    shortDescription:
      "A high-performance, Rust-based vector database with a decoupled Python embedding service.",
    fullDescription:
      "A lightweight, high-performance vector database built in Rust (Axum) for speed, featuring a decoupled Python (FastAPI) microservice for multi-model embedding generation (MiniLM, BGE, OpenAI, etc.), comprehensive REST APIs, and file-based persistence.",
    image: "/projects/VectorDB.png",
    // video: "https://www.loom.com/share/e2880d78d93f4cc18944c1ee5674a874",
    // link: "https://github.com/YourRepo/VectorDB",
    github: "https://github.com/NiMs-TG10/VectorDB-",
    tags: [
      "Rust",
      "Axum",
      "Python",
      "FastAPI",
      "Vector Database",
      "AI/ML",
      "Embedding",
      "Concurrency",
      "Docker",
      "REST API",
    ],
    type: "Rust",
  },
  {
    id: 9,
    title: "High-Performance Leveraged Trading System",
    shortDescription:
      "A production-grade, microservices-based financial trading platform supporting leveraged positions, real-time execution, and automatic liquidation.",
    fullDescription:
      "A production-grade, microservices-based financial trading platform supporting leveraged positions, real-time execution, and automatic liquidation.",
    image: "/projects/TradingSystem.png",
    // video: "/placeholder.svg?text=Trading+System+Demo",
    // link: "",
    github:
      "https://github.com/NiMs-TG10/comprehensive-end-to-end-cryptocurrency-trading-system",
    tags: [
      "Rust",
      "TypeScript",
      "Bun",
      "Redis",
      "Redis Streams",
      "Redis Pub/Sub",
      "WebSockets",
      "REST API",
      "Microservices",
      "Trading Engine",
      "Low-Latency",
      "Risk Management",
    ],
    type: "Rust",
  },
  {
    id: 10,
    title: "git-acm (git auto-commit-message)",
    shortDescription:
      "A CLI tool that generates instant, meaningful commit messages using AI models based on the staged changes in a Git repository.",
    fullDescription:
      "A CLI tool that generates instant, meaningful commit messages using AI models based on the staged changes in a Git repository.",
    image: "/projects/GitAcm.png", // video: "/placeholder.svg?text=git-acm+Demo",
    // link: "https://github.com/shivamhwp/git-acm",
    github: "https://github.com/NiMs-TG10/Git-auto-commit-",
    tags: [
      "Rust",
      "CLI",
      "Git",
      "LLM",
      "Gemini API",
      "OpenAI API",
      "Anthropic API",
      "DeepSeek API",
      "Ollama",
      "Cargo",
      "Automation",
    ],
    type: "Rust",
  },
  {
    id: 11,
    title: "HCI Interaction Recorder",
    shortDescription:
      "A cross-platform desktop application built in Rust to capture and log user interactions (mouse, clicks, keyboard) for creating Human-Computer Interaction (HCI) model training datasets.",
    fullDescription:
      "A cross-platform desktop application built in Rust to capture and log user interactions (mouse, clicks, keyboard) for creating Human-Computer Interaction (HCI) model training datasets.",
    image: "/projects/HCI-Recorder.png",
    video: "/placeholder.svg?text=HCI+Recorder+Demo",
    link: "",
    github:
      "https://github.com/NiMs-TG10/interaction-recorder-Robotic-Process-Automation-RPA-tool-",
    tags: [
      "Rust",
      "eframe",
      "GUI",
      "HCI",
      "Cross-Platform",
      "Data Generation",
      "JSON",
      "Desktop Application",
      "Input Capture",
    ],
    type: "Rust",
  },
  {
    id: 12,
    title: "Probo-Platform Real-Time Microservices Engine",
    shortDescription:
      "A low-latency, real-time microservices architecture for trading or opinion markets, utilizing Rust and Actix for high-performance execution and WebSockets for client communication.",
    fullDescription:
      "A low-latency, real-time microservices architecture for trading or opinion markets, utilizing Rust and Actix for high-performance execution and WebSockets for client communication.",
    image: "/projects/ProboRealTimeEngine.png",
    video: "/placeholder.svg?text=Probo+Engine+Demo",
    link: "",
    github: "https://github.com/NiMs-TG10/Probo-Platform",
    tags: [
      "Rust",
      "Actix",
      "WebSockets",
      "Redis",
      "Redis Queues",
      "Microservices",
      "Real-Time",
      "Matching Engine",
      "Concurrency (RwLock)",
      "Async Worker",
      "TS/JS/CSS (Frontend)",
    ],
    type: "Rust",
  }, // --- SOLANA (4 Projects) ---

  //   --------------------------------------------------------------------------------

  {
    id: 13,
    title: "Concentrated Liquidity Market Maker (CLMM)",
    shortDescription:
      "A Uniswap V3-inspired Concentrated Liquidity Automated Market Maker (AMM) implemented on the Solana blockchain.",
    fullDescription:
      "A Uniswap V3-inspired Concentrated Liquidity Automated Market Maker (AMM) implemented on the Solana blockchain.",
    image: "/projects/SolanaCLMM.png",
    // video: "/placeholder.svg?text=CLMM+Demo",
    // link: "",
    github: "https://github.com/NiMs-TG10/Concentrated-Liquidity-Market-Maker-",
    tags: [
      "Solana",
      "Anchor",
      "Rust",
      "TypeScript",
      "AMM",
      "DeFi",
      "Concentrated Liquidity",
      "Uniswap V3",
    ],
    type: "Solana",
  },
  {
    id: 14,
    title: "Solana TSS Wallet API",
    shortDescription:
      "A high-performance RESTful API built in Rust for managing a Solana Threshold Signature Scheme (TSS) wallet, supporting multi-party signing and core Solana operations.",
    fullDescription:
      "A high-performance RESTful API built in Rust for managing a Solana Threshold Signature Scheme (TSS) wallet, supporting multi-party signing and core Solana operations.",
    image: "/projects/SolanaTSSAPI.png",
    video: "/placeholder.svg?text=Solana+TSS+API+Demo",
    link: "https://github.com/0x-pankaj/solana-tss-cli-to-api",
    github: "https://github.com/NiMs-TG10/Solana-tss-cli-to-API",
    tags: [
      "Rust",
      "Poem (Web Framework)",
      "Solana",
      "TSS (Threshold Signature Scheme)",
      "REST API",
      "Cryptocurrency Wallet",
      "Multi-Party Computation",
      "Blockchain",
    ],
    type: "Solana",
  },
  {
    id: 15,
    title: "Solana Carbon Credit Tokenization System",
    shortDescription:
      "A blockchain-based carbon credit marketplace on Solana that tokenizes real-world carbon offsets into tradeable, verifiable, and permanent digital assets.",
    fullDescription:
      "A blockchain-based carbon credit marketplace on Solana that tokenizes real-world carbon offsets into tradeable, verifiable, and permanent digital assets.",
    image: "/projects/SolanaCarbonCredit.png",
    video: "/placeholder.svg?text=Carbon+Credit+System+Demo", // link: "",
    github: "https://github.com/NiMs-TG10/Solana-Carbon-Credit",
    tags: [
      "Solana",
      "Blockchain",
      "SPL Token Standard",
      "Metaplex",
      "Carbon Credits",
      "DeFi",
      "ESG/Sustainability",
      "Tokenization",
      "Smart Contracts",
    ],
    type: "Solana",
  },
  // {
  //   id: 16,
  //   title: "Pinocchio Fundraiser (Solana On-Chain Program)",
  //   shortDescription:
  //     "A work-in-progress Solana on-chain program for decentralized fundraising campaigns, meticulously optimized for low compute unit (CU) consumption.",
  //   fullDescription:
  //     "The Pinocchio Fundraiser is a core **Solana Program** designed to manage tokenized fundraising campaigns. Its architecture prioritizes performance and resource efficiency, evidenced by its focus on Compute Unit (CU) consumption, with key instructions like Initialize (2178 CUs), Contribute (6457 CUs), and Checker (7247 CUs).\n\n**Architectural Highlights:**\n- **No-Standard Library (`no_std`):** The `entrypoint.rs` and `lib.rs` are compiled without the standard library, disabling heap allocations (`global allocator is disabled`) for maximum performance tweaks.\n- **Account States:** Uses manual serialization/deserialization helper functions (`load_acc`, `load_mut_acc`) for account state management, avoiding reliance on external crates where possible.\n- **Testing:** Utilizes **mollusk-svm**, a lightweight testing framework, to run tests without a full Solana cluster.\n\n**Core Functions:**\n- `Initialize`: Sets up the campaign's Program Derived Address (PDA) using `CreateAccount` CPI.\n- `Contribute`: Handles contributions via `CreateAccount` and `TransferChecked` CPIs.\n- `Checker`: Completes the campaign and finalizes transactions using `TransferChecked` and `CloseAccount` CPIs.",
  //   image: "/projects/PinocchioFundraiser.png",
  //   video: "/placeholder.svg?text=Pinocchio+Fundraiser+Demo",
  //   link: "https://github.com/the-repo-link-here",
  //   github: "https://github.com/NiMs-TG10/fundraiser-pinocchio",
  //   tags: [
  //     "Solana Program",
  //     "Rust",
  //     "no_std",
  //     "Compute Unit Optimization",
  //     "CPI (Cross-Program Invocation)",
  //     "PDA (Program Derived Address)",
  //     "Fundraising",
  //     "mollusk-svm",
  //     "Decentralized Finance (DeFi)",
  //   ],
  //   type: "Solana",
  // }, // --- SOLIDITY (3 Projects) ---

  //   --------------------------------------------------------------------------------

  {
    id: 17,
    title: "Somnia Swap - Decentralized Exchange (DEX)",
    shortDescription:
      "A foundational Automated Market Maker (AMM) Decentralized Exchange built to serve as the unified liquidity hub for the nascent Somnia Network ecosystem.",
    fullDescription:
      "A foundational Automated Market Maker (AMM) Decentralized Exchange built to serve as the unified liquidity hub for the nascent Somnia Network ecosystem.",
    image: "/projects/SomniaSwap.png",
    video: "/placeholder.svg?text=SomniaSwap+Demo",
    link: "",
    github: "https://github.com/NiMs-TG10/DEX_AMM_Somnia",
    tags: [
      "Somnia Network",
      "Decentralized Exchange (DEX)",
      "Automated Market Maker (AMM)",
      "DeFi",
      "Liquidity Provision",
      "Token Swaps",
      "Token Launchpad",
      "Smart Contracts",
    ],
    type: "Solidity",
  },
  {
    id: 18,
    title: "AfterLife-Protocol: Decentralized Digital Inheritance on Ethereum",
    shortDescription:
      "A revolutionary blockchain protocol on Ethereum that enables secure, transparent, and automated digital inheritance of crypto assets using smart contracts, protected against periods of user inactivity.",
    fullDescription:
      "A revolutionary blockchain protocol on Ethereum that enables secure, transparent, and automated digital inheritance of crypto assets using smart contracts, protected against periods of user inactivity.",
    image: "/projects/AfterLifeProtocol.png",
    video: "/placeholder.svg?text=AfterLife-Protocol+Demo",
    link: "https://afterlife-protocol.app/",
    github: "https://github.com/NiMs-TG10/Will---inheritance--Ethereum",
    tags: [
      "Ethereum",
      "Solidity",
      "Foundry",
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Wagmi",
      "Web3",
      "DeFi",
      "Smart Contract Security",
      "Digital Inheritance",
    ],
    type: "Solidity",
  },
  {
    id: 19,
    title: "Decentralized Perpetual Futures Trading Platform",
    shortDescription:
      "A full-stack, decentralized perpetual futures exchange on Ethereum (Sepolia) featuring automated liquidation, an 8-hour funding rate cycle, and a virtual AMM system.",
    fullDescription:
      "A full-stack, decentralized perpetual futures exchange on Ethereum (Sepolia) featuring automated liquidation, an 8-hour funding rate cycle, and a virtual AMM system.",
    image: "/projects/PerpetualFuturesDEX.png",
    // video: "/placeholder.svg?text=Perpetual+DEX+Demo",
    // link: "https://decentralised-perpetual-futures-trading-platform-frontend.app/",
    github:
      "https://github.com/NiMs-TG10/Decentralised-Perpetual-Futures-Trading-Platform",
    tags: [
      "Ethereum",
      "Smart Contracts",
      "Solidity",
      "Decentralized Exchange (DEX)",
      "Perpetual Futures",
      "Virtual AMM (vAMM)",
      "Liquidation",
      "Funding Rate",
      "TWAP",
      "OpenZeppelin ReentrancyGuard",
      "React",
      "Node.js",
      "PostgreSQL",
      "WebSockets",
    ],
    type: "Solidity",
  }, // --- fullstack (6 Projects) ---

  //   --------------------------------------------------------------------------------

  {
    id: 20,
    title: "Full-Stack URL Shortener with Real-Time Analytics",
    shortDescription:
      "A high-performance, full-stack URL shortener application featuring a Python/FastAPI backend with Redis caching and a modern Next.js 15 frontend with a real-time analytics dashboard.",
    fullDescription:
      "A high-performance, full-stack URL shortener application featuring a Python/FastAPI backend with Redis caching and a modern Next.js 15 frontend with a real-time analytics dashboard.",
    image: "/projects/FullStackURLShortener.png",
    // video: "/placeholder.svg?text=Full-Stack+URL+Shortener+Demo",
    // link: "",
    github: "https://github.com/NiMs-TG10/URL-Shortner",
    tags: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Redis",
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "JWT Authentication",
      "Zustand",
      "Recharts",
      "SQLAlchemy",
    ],
    type: "fullstack",
  },
  {
    id: 28,
    title: "Decentralized Fiverr on Solana",
    shortDescription:
      "A Web3 micro-task marketplace with a TypeScript/Express + Prisma backend and dual Next.js 14 frontends for users and workers, integrating Solana wallets, S3 uploads, and secure payouts.",
    fullDescription:
      "A decentralized micro-task marketplace built on Solana featuring a TypeScript/Express backend with Prisma/PostgreSQL, AWS S3 uploads, JWT-secured APIs, and Zod validation. Two separate Next.js 14 React frontends serve users and workers, each integrating Solana wallet adapters for on-chain identity and task payouts.",
    image: "/projects/DecentralizedFiverr.png",
    // "video": "/placeholder.svg?text=Decentralized+Fiverr+Demo",
    // "link": "",
    github: "https://github.com/NiMs-TG10/Decentralised-Tucker-",
    tags: [
      "Node.js",
      "Express",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Next.js 14",
      "React 18",
      "Tailwind CSS",
      "Solana",
      "Web3",
      "AWS S3",
      "JWT Authentication",
      "Zod",
      "Multer",
      "Axios",
    ],
    type: "fullstack",
  },
  {
    id: 21,
    title: "GoSearch – Lightweight URL Shortcut Extension",
    shortDescription:
      "A lightweight Chrome extension that allows users to create custom shortcuts for websites, enabling instant redirection directly from the browser's address bar (Omnibox).",
    fullDescription:
      "A lightweight Chrome extension that allows users to create custom shortcuts for websites, enabling instant redirection directly from the browser's address bar (Omnibox).",
    image: "/projects/GoSearchExtension.png",
    video: "/placeholder.svg?text=GoSearch+Demo",
    link: "https://github.com/yourusername/gosearch",
    github: "https://github.com/NiMs-TG10/Fast-Search-Ext",
    tags: [
      "Chrome Extension",
      "Chromium",
      "JavaScript/TypeScript",
      "Omnibox API",
      "Chrome Sync Storage",
      "Productivity Tool",
      "Web Extension",
    ],
    type: "fullstack",
  },
  {
    id: 22,
    title: "High-Performance Website Monitoring System",
    shortDescription:
      "A scalable, distributed website monitoring application tracking uptime, response times, and notifying users of downtime events across multiple geographical regions.",
    fullDescription:
      "A scalable, distributed website monitoring application tracking uptime, response times, and notifying users of downtime events across multiple geographical regions.",
    image: "/projects/MonitoringApp.png",
    // video: "/placeholder.svg?text=Monitoring+App+Demo",
    // link: "",
    github: "https://github.com/NiMs-TG10/BetterUpTime-Rust",
    tags: [
      "Rust",
      "Poem",
      "PostgreSQL",
      "Redis",
      "InfluxDB",
      "Redis Streams",
      "Tokio",
      "Tokio-Cron-Scheduler",
      "Time-Series Database",
      "Scalable Workers",
      "SMTP",
    ],
    type: "fullstack",
  },
  {
    id: 23,
    title: "EC2 Deployment Workflow via GitHub Actions (SSH/PM2)",
    shortDescription:
      "A robust GitHub Actions workflow that automates code deployment to an AWS EC2 instance on push to the 'main' branch, using SSH and PM2.",
    fullDescription:
      "A robust GitHub Actions workflow that automates code deployment to an AWS EC2 instance on push to the 'main' branch, using SSH and PM2.",
    image: "/projects/GitHub-EC2-Deployment.png",
    video: "/placeholder.svg?text=GitHub+Actions+EC2+Deployment", // link: "https://github.com/your-repo-link",
    github: "https://github.com/NiMs-TG10/CI-CD-pipeline-",
    tags: [
      "GitHub Actions",
      "CI/CD",
      "AWS EC2",
      "SSH",
      "PM2",
      "YAML",
      "Continuous Deployment",
      "appleboy/ssh-action",
      "Ubuntu",
      "Node.js",
    ],
    type: "fullstack",
  },
  {
    id: 25,
    title: "Zentry Clone",
    shortDescription:
      "Recreation of the Zentry website with modern UI components and responsive design.",
    fullDescription:
      "Recreation of the Zentry website with modern UI components and responsive design.",
    image: "/projects/zentry.png",
    video: "/placeholder.svg?text=Zentry+Demo", // link: "https://zentry-clone-delta.vercel.app/",
    github: "https://zentry-frontend-umber.vercel.app/#contact",
    // github: "https://github.com/NiMs-TG10/Zentry-Frontend",
    tags: ["React", "GSAP", "Styled Components", "Tailwind CSS"],
    type: "fullstack",
  },
  {
    id: 24,
    title: "Showcase Portfolio",
    shortDescription:
      "A creative website with stunning animations and interactive elements.",
    fullDescription:
      "A creative website with stunning animations and interactive elements.",
    image: "/projects/obsy.png",
    video: "/placeholder.svg?text=Obsy+Agency+Demo", // link: "https://dev-kaif.github.io/Obys-Agency/",
    github: "https://github.com/NiMs-TG10/Fancy-Portfolio",
    tags: ["HTML", "CSS", "JavaScript", "GSAP"],
    type: "fullstack",
  },

  // --- SWIFT (2 Projects) ---

  //   --------------------------------------------------------------------------------

  {
    id: 26,
    title: "Display Manager (macOS Menu Bar App)",
    shortDescription:
      "A lightweight macOS menu bar application built with Swift and SwiftUI that allows users to save, manage, and quickly switch between multiple display and monitor configurations.",
    fullDescription:
      "A lightweight macOS menu bar application built with Swift and SwiftUI that allows users to save, manage, and quickly switch between multiple display and monitor configurations.",
    image: "/projects/DisplayManager.png",
    video: "/placeholder.svg?text=Display+Manager+Demo",
    link: "https://github.com/your-username/display-manager",
    github: "https://github.com/NiMs-TG10/Window-Tiling-Manager-Swift",
    tags: [
      "macOS",
      "Swift",
      "SwiftUI",
      "AppKit",
      "CoreGraphics",
      "Menu Bar App",
      "displayplacer",
      "Utility",
      "Multi-Monitor",
    ],
    type: "Swift",
  },
  {
    id: 27,
    title: "Threads Clone (SwiftUI + Firebase)",
    shortDescription:
      "A complete, modern clone of the social media platform Threads, built natively for iOS using SwiftUI for the UI and Firebase as the scalable, serverless backend.",
    fullDescription:
      "A complete, modern clone of the social media platform Threads, built natively for iOS using SwiftUI for the UI and Firebase as the scalable, serverless backend.",
    image: "/projects/ThreadsCloneSwiftUI.png",
    video: "/placeholder.svg?text=Threads+Clone+Demo", // link: "",
    github: "https://github.com/NiMs-TG10/Threads-Clone-Swiftui-Firebase",
    tags: [
      "SwiftUI",
      "Swift",
      "iOS",
      "Firebase",
      "Cloud Firestore",
      "Firebase Authentication",
      "Firebase Storage",
      "Combine",
      "Mobile Development",
      "Social Media",
    ],
    type: "Swift",
  },
];
export const WORK_EXPERIENCE = [
  {
    tabTitle: "June 2025 - Present",
    company: "MakeMyMotor",
    role: "App Developer + Designer",
    achievements: [
      "Worked with a cross-functional team to build a scalable Ios and Android App ",
      "Designed + Integarted Payment walls and Payment systems + Integartion of PHP backend ",
    ],
  },
  {
    tabTitle: "June - July 2023",
    company: "RideVilla",
    role: "Web Designer",
    achievements: [
      "Designed  web projects for client needs using FIgma and Canva.",
      "Designed responsive UIs, integrated APIs, and ensured smooth delivery of Consumer-centric-ready features.",
    ],
  },
];

// export const skills = [
//   // ------------------------------------
//   // CORE LANGUAGES & RUNTIMES (Highest Priority)
//   // ------------------------------------
//   { name: "Rust", logo: "/rust.svg" }, // ADDED
//   { name: "JavaScript", logo: "/SVG/javascript.svg" },
//   { name: "TypeScript", logo: "/SVG/typescript.svg" },
//   { name: "Python", logo: "/SVG/python.svg" },
//   { name: "C", logo: "/c.png" },
//   { name: "C++", logo: "/c++.png" },

//   { name: "Go", logo: "/go.svg" }, // High-demand backend language
//   { name: "Node.js", logo: "/SVG/nodejs.svg" },
//   { name: "Bash", logo: "/SVG/bash.svg" },
//   { name: "HTML5", logo: "/SVG/html5.svg" },
//   { name: "CSS", logo: "/SVG/css_old.svg" },
//   { name: "Swift", logo: "/swift.svg" }, // ADDED (Mobile/Apple Dev)
//   // ------------------------------------
//   // WEB3 & BLOCKCHAIN
//   // ------------------------------------
//   { name: "Solidity", logo: "/solidity.svg" }, // ADDED
//   { name: "Ethereum", logo: "/ethereum.svg" }, // ADDED
//   { name: "Web3", logo: "/web3.png" }, // ADDED
//   { name: "Anchor (Solana)", logo: "/rust.svg" }, // ADDED

//   // ------------------------------------
//   // CLOUD & DEVOPS (High Priority)
//   // ------------------------------------
//   { name: "Docker", logo: "/SVG/docker.svg" },
//   { name: "Kubernetes", logo: "/Kubernetes.svg" }, // ADDED
//   { name: "AWS", logo: "/SVG/aws_light.svg" },
//   { name: "CI/CD", logo: "/SVG/ci-cd-svgrepo-com.svg" },
//   { name: "Nginx", logo: "/SVG/nginx-icon.svg" }, // Already present, but re-ordered
//   { name: "Load Balancer", logo: "/loadbalancer.svg" }, // ADDED
//   { name: "Rate Limiter", logo: "/ratelimiter.png" }, // ADDED
//   { name: "Vercel", logo: "/SVG/vercel.svg" },
//   { name: "Render", logo: "/SVG/render-seeklogo.svg" },
//   { name: "Linux", logo: "/SVG/linux.svg" },

//   // ------------------------------------
//   // BACKEND FRAMEWORKS & COMMUNICATION
//   // ------------------------------------
//   { name: "NestJS", logo: "/SVG/nestjs.svg" },
//   { name: "Express", logo: "/SVG/expressjs_dark.svg" },
//   { name: "FastAPI", logo: "/SVG/fastapi.svg" },
//   { name: "tRPC", logo: "/SVG/Trpc--Streamline-Svg-Logos.svg" },
//   { name: "gRPC", logo: "/grpc.png" }, // ADDED
//   { name: "WebSocket", logo: "/SVG/websocket.svg" },
//   { name: "Socket IO", logo: "/SVG/socketio-light.svg" },
//   { name: "WebRTC", logo: "/webrtc.svg" }, // ADDED

//   // ------------------------------------
//   // DATA, QUEUES & OBSERVABILITY
//   // ------------------------------------
//   { name: "PostgreSQL", logo: "/SVG/postgresql.svg" },
//   { name: "MongoDB", logo: "/SVG/mongodb.svg" },
//   { name: "mySQL", logo: "/SVG/mysql.svg" },
//   { name: "Prisma ORM", logo: "/SVG/prisma.svg" },
//   { name: "Drizzel", logo: "/SVG/drizzle-orm_light.svg" },
//   { name: "NeonDB", logo: "/SVG/neon.svg" },
//   { name: "Kafka", logo: "/kafka.svg" }, // ADDED (Streaming/Queuing)
//   { name: "Inngest", logo: "/SVG/inngest-light.svg" },
//   { name: "Prometheus", logo: "/prometheus.png" }, // ADDED
//   { name: "Grafana", logo: "/grafana.png" }, // ADDED

//   // ------------------------------------
//   // FRONTEND & UX
//   // ------------------------------------
//   { name: "Next.js", logo: "/SVG/nextjs_icon_dark.svg" },
//   { name: "React", logo: "/SVG/react_dark.svg" },
//   { name: "Tailwind CSS", logo: "/SVG/tailwindcss.svg" },
//   { name: "vite", logo: "/SVG/vitejs.svg" },
//   { name: "Tanstack Query", logo: "/SVG/tanstack.png" },
//   { name: "TurboRepo", logo: "/SVG/turborepo.svg" },

//   // ------------------------------------
//   // AI/ML & VECTOR DATABASES
//   // ------------------------------------
//   { name: "LangChain", logo: "/SVG/Langchain--Streamline-Simple-Icons.svg" },
//   { name: "LangGraph", logo: "/SVG/langgraph.png" },
//   { name: "RAG", logo: "/SVG/Rag--Streamline-Carbon.svg" },
//   { name: "Hugging Face", logo: "/SVG/hugging_face.svg" },
//   { name: "OpenAI", logo: "/SVG/openai.svg" },
//   { name: "Claude", logo: "/SVG/claude-ai-icon.svg" },
//   { name: "Deepseek", logo: "/SVG/deepseek.svg" },
//   { name: "Qwen", logo: "/SVG/qwen_light.svg" },
//   { name: "OpenRouter", logo: "/SVG/openrouter_light.svg" },
//   { name: "Pinecone", logo: "/SVG/Pinecone-Icon--Streamline-Svg-Logos.svg" },
//   { name: "QuadrantDB", logo: "/SVG/Qdrant-Icon--Streamline-Svg-Logos.svg" },
//   { name: "LangFuse", logo: "/SVG/langfuse-icon-seeklogo.svg" },

//   // ------------------------------------
//   // MISCELLANEOUS / UTILITIES
//   // ------------------------------------
//   { name: "Neo4j", logo: "/SVG/neo4j-icon.svg" },
//   { name: "Firebase", logo: "/SVG/firebase.svg" },
//   { name: "Supabase", logo: "/SVG/supabase.svg" },
//   { name: "Clerk", logo: "/SVG/clerk-wordmark-light.svg" },
//   { name: "V0", logo: "/SVG/v0_light.svg" },
//   { name: "Cursor", logo: "/SVG/cursor_light.svg" },
//   { name: "Bolt", logo: "/SVG/bolt-new.svg" },
//   { name: "Lovable", logo: "/SVG/lovable.svg" },
// ];

// export const categorizedSkills = {
//   // RUST ECOSYSTEM
//   rust: [{ name: "Rust", logo: "/rust.svg" }],

//   // WEB3 & BLOCKCHAIN
//   web3: [
//     { name: "Solidity", logo: "/solidity.svg" },
//     { name: "Ethereum", logo: "/ethereum.svg" },
//     { name: "Web3", logo: "/web3.png" },
//     { name: "Anchor (Solana)", logo: "/rust.svg" },
//   ],

//   // AI / ML
//   ai: [
//     { name: "LangChain", logo: "/SVG/Langchain--Streamline-Simple-Icons.svg" },
//     { name: "LangGraph", logo: "/SVG/langgraph.png" },
//     { name: "RAG", logo: "/SVG/Rag--Streamline-Carbon.svg" },
//     { name: "Hugging Face", logo: "/SVG/hugging_face.svg" },
//     { name: "OpenAI", logo: "/SVG/openai.svg" },
//     { name: "Claude", logo: "/SVG/claude-ai-icon.svg" },
//     { name: "Deepseek", logo: "/SVG/deepseek.svg" },
//     { name: "Qwen", logo: "/SVG/qwen_light.svg" },
//     { name: "OpenRouter", logo: "/SVG/openrouter_light.svg" },
//     { name: "Pinecone", logo: "/SVG/Pinecone-Icon--Streamline-Svg-Logos.svg" },
//     { name: "QuadrantDB", logo: "/SVG/Qdrant-Icon--Streamline-Svg-Logos.svg" },
//     { name: "LangFuse", logo: "/SVG/langfuse-icon-seeklogo.svg" },
//   ],

//   // FRONTEND
//   frontend: [
//     { name: "JavaScript", logo: "/SVG/javascript.svg" },
//     { name: "/SVG/typescript.svg" },
//     { name: "HTML5", logo: "/SVG/html5.svg" },
//     { name: "CSS", logo: "/SVG/css_old.svg" },
//     { name: "Swift", logo: "/swift.svg" },
//     { name: "Next.js", logo: "/SVG/nextjs_icon_dark.svg" },
//     { name: "React", logo: "/SVG/react_dark.svg" },
//     { name: "Tailwind CSS", logo: "/SVG/tailwindcss.svg" },
//     { name: "vite", logo: "/SVG/vitejs.svg" },
//     { name: "Tanstack Query", logo: "/SVG/tanstack.png" },
//   ],

//   // BACKEND
//   backend: [
//     { name: "Node.js", logo: "/SVG/nodejs.svg" },
//     { name: "Go", logo: "/go.svg" },
//     { name: "Python", logo: "/SVG/python.svg" },
//     { name: "NestJS", logo: "/SVG/nestjs.svg" },
//     { name: "Express", logo: "/SVG/expressjs_dark.svg" },
//     { name: "FastAPI", logo: "/SVG/fastapi.svg" },
//     { name: "tRPC", logo: "/SVG/Trpc--Streamline-Svg-Logos.svg" },
//     { name: "gRPC", logo: "/grpc.png" },
//     { name: "WebSocket", logo: "/SVG/websocket.svg" },
//     { name: "Socket IO", logo: "/SVG/socketio-light.svg" },
//     { name: "WebRTC", logo: "/webrtc.svg" },
//   ],

//   // DATABASES & ORMS
//   databases: [
//     { name: "PostgreSQL", logo: "/SVG/postgresql.svg" },
//     { name: "MongoDB", logo: "/SVG/mongodb.svg" },
//     { name: "mySQL", logo: "/SVG/mysql.svg" },
//     { name: "Prisma ORM", logo: "/SVG/prisma.svg" },
//     { name: "Drizzel", logo: "/SVG/drizzle-orm_light.svg" },
//     { name: "NeonDB", logo: "/SVG/neon.svg" },
//     { name: "Neo4j", logo: "/SVG/neo4j-icon.svg" },
//   ],

//   // DEVOPS, CLOUD & INFRASTRUCTURE
//   devops: [
//     { name: "Docker", logo: "/SVG/docker.svg" },
//     { name: "Kubernetes", logo: "/Kubernetes.svg" },
//     { name: "AWS", logo: "/SVG/aws_light.svg" },
//     { name: "CI/CD", logo: "/SVG/ci-cd-svgrepo-com.svg" },
//     { name: "Nginx", logo: "/SVG/nginx-icon.svg" },
//     { name: "Load Balancer", logo: "/loadbalancer.svg" },
//     { name: "Rate Limiter", logo: "/ratelimiter.png" },
//     { name: "Vercel", logo: "/SVG/vercel.svg" },
//     { name: "Render", logo: "/SVG/render-seeklogo.svg" },
//     { name: "Linux", logo: "/SVG/linux.svg" },
//     { name: "Bash", logo: "/SVG/bash.svg" },
//     { name: "Kafka", logo: "/kafka.svg" },
//     { name: "Inngest", logo: "/SVG/inngest-light.svg" },
//     { name: "Prometheus", logo: "/prometheus.png" },
//     { name: "Grafana", logo: "/grafana.png" },
//   ],

//   // TOOLS & SERVICES
//   tools: [
//     { name: "TurboRepo", logo: "/SVG/turborepo.svg" },
//     { name: "Firebase", logo: "/SVG/firebase.svg" },
//     { name: "Supabase", logo: "/SVG/supabase.svg" },
//     { name: "Clerk", logo: "/SVG/clerk-wordmark-light.svg" },
//     { name: "V0", logo: "/SVG/v0_light.svg" },
//     { name: "Cursor", logo: "/SVG/cursor_light.svg" },
//     { name: "Bolt", logo: "/SVG/bolt-new.svg" },
//     { name: "Lovable", logo: "/SVG/lovable.svg" },
//   ],
// };
//
export const skillsByCategory = {
  // LANGUAGES (Programming & Scripting)
  languages: [
    { name: "Rust", logo: "/rust.svg" },
    { name: "Solidity", logo: "/solidity.svg" },
    { name: "JavaScript", logo: "/SVG/javascript.svg" },
    { name: "TypeScript", logo: "/SVG/typescript.svg" }, // Assuming the logo-only entry refers to TypeScript
    { name: "C", logo: "/c.png" },
    { name: "C++", logo: "/c++.png" },
    { name: "Go", logo: "/go.svg" },
    { name: "Python", logo: "/SVG/python.svg" },
    { name: "Swift", logo: "/swift.svg" },
    { name: "Bash", logo: "/SVG/bash.svg" },
    { name: "HTML5", logo: "/SVG/html5.svg" }, // Often grouped with frontend, but is a core language/markup
    { name: "CSS", logo: "/SVG/css_old.svg" }, // Often grouped with frontend, but is a core language/styling
  ],

  // AI / ML (Original AI/ML Category)
  ai: [
    { name: "LangChain", logo: "/SVG/Langchain--Streamline-Simple-Icons.svg" },
    { name: "LangGraph", logo: "/SVG/langgraph.png" },
    { name: "RAG", logo: "/SVG/Rag--Streamline-Carbon.svg" },
    { name: "VectorDB", logo: "/vectorDB.svg" },
    { name: "Hugging Face", logo: "/SVG/hugging_face.svg" },
    { name: "OpenAI", logo: "/SVG/openai.svg" },
    { name: "Claude", logo: "/SVG/claude-ai-icon.svg" },
    { name: "Deepseek", logo: "/SVG/deepseek.svg" },
    { name: "Qwen", logo: "/SVG/qwen_light.svg" },
    { name: "OpenRouter", logo: "/SVG/openrouter_light.svg" },
    { name: "Pinecone", logo: "/SVG/Pinecone-Icon--Streamline-Svg-Logos.svg" },
    { name: "QuadrantDB", logo: "/SVG/Qdrant-Icon--Streamline-Svg-Logos.svg" },
    { name: "LangFuse", logo: "/SVG/langfuse-icon-seeklogo.svg" },
  ],

  // WEB3 & BLOCKCHAIN (Original Web3 Category)
  web3: [
    { name: "Solidity", logo: "/solidity.svg" }, // Duplicated in Languages, but kept here for context
    { name: "Ethereum", logo: "/ethereum.svg" },
    { name: "Web3", logo: "/web3.png" },
    { name: "Anchor (Solana)", logo: "/rust.svg" },
  ],

  // FRONTEND (Frameworks & Libraries)
  frontend: [
    { name: "Next.js", logo: "/SVG/nextjs_icon_dark.svg" },
    { name: "React", logo: "/SVG/react_dark.svg" },
    { name: "Tailwind CSS", logo: "/SVG/tailwindcss.svg" },
    { name: "vite", logo: "/SVG/vitejs.svg" },
    { name: "Tanstack Query", logo: "/SVG/tanstack.png" },
    // Removed: JavaScript, TypeScript, HTML5, CSS, Swift (moved to Languages)
  ],

  // BACKEND (Runtimes, Frameworks & Protocols)
  backend: [
    { name: "Node.js", logo: "/SVG/nodejs.svg" },
    { name: "NestJS", logo: "/SVG/nestjs.svg" },
    { name: "Express", logo: "/SVG/expressjs_dark.svg" },
    { name: "FastAPI", logo: "/SVG/fastapi.svg" },
    { name: "tRPC", logo: "/SVG/Trpc--Streamline-Svg-Logos.svg" },
    { name: "gRPC", logo: "/grpc.png" },
    { name: "WebSocket", logo: "/SVG/websocket.svg" },
    { name: "Socket IO", logo: "/SVG/socketio-light.svg" },
    { name: "WebRTC", logo: "/webrtc.svg" },
    // Merged: DATABASES & ORMS
    { name: "PostgreSQL", logo: "/SVG/postgresql.svg" },
    { name: "MongoDB", logo: "/SVG/mongodb.svg" },
    { name: "mySQL", logo: "/SVG/mysql.svg" },
    { name: "Prisma ORM", logo: "/SVG/prisma.svg" },
    { name: "Drizzel", logo: "/SVG/drizzle-orm_light.svg" },
    { name: "NeonDB", logo: "/SVG/neon.svg" },
    { name: "Neo4j", logo: "/SVG/neo4j-icon.svg" },
    // Removed: Go, Python (moved to Languages)
  ],

  // DEVOPS, CLOUD & INFRASTRUCTURE (Original DevOps + TOOLS)
  devops: [
    // DevOps
    { name: "Docker", logo: "/SVG/docker.svg" },
    { name: "Kubernetes", logo: "/Kubernetes.svg" },
    { name: "AWS", logo: "/SVG/aws_light.svg" },
    { name: "CI/CD", logo: "/SVG/ci-cd-svgrepo-com.svg" },
    { name: "Nginx", logo: "/SVG/nginx-icon.svg" },
    { name: "Load Balancer", logo: "/loadbalancer.svg" },
    { name: "Rate Limiter", logo: "/ratelimiter.png" },
    { name: "Vercel", logo: "/SVG/vercel.svg" },
    { name: "Render", logo: "/SVG/render-seeklogo.svg" },
    { name: "Linux", logo: "/SVG/linux.svg" },
    { name: "Kafka", logo: "/kafka.svg" },
    { name: "Inngest", logo: "/SVG/inngest-light.svg" },
    { name: "Prometheus", logo: "/prometheus.png" },
    { name: "Grafana", logo: "/grafana.png" },
    // Merged: TOOLS & SERVICES (Infrastructure/Auth/Utilities)
    { name: "TurboRepo", logo: "/SVG/turborepo.svg" },
    { name: "Firebase", logo: "/SVG/firebase.svg" },
    { name: "Supabase", logo: "/SVG/supabase.svg" },
    { name: "Clerk", logo: "/SVG/clerk-wordmark-light.svg" },
    { name: "V0", logo: "/SVG/v0_light.svg" },
    { name: "Cursor", logo: "/SVG/cursor_light.svg" },
    { name: "Bolt", logo: "/SVG/bolt-new.svg" },
    { name: "Lovable", logo: "/SVG/lovable.svg" },
    // Removed: Bash (moved to Languages)
  ],
};
export const faqs = [
  {
    question: "What is your current availability?",
    answer:
      "I'm currently available for freelance projects and open to full-time opportunities. ",
  },
  {
    question: "What are you most passionate about in development?",
    answer:
      "I'm passionate about building practical, impactful software that solves real-world problems. I particularly enjoy working with AI integration, full-stack development, and creating smooth user experiences.",
  },
  {
    question: "What was your primary role in the projects listed?",
    answer:
      "In most projects, I served as the lead developer, handling both frontend and backend development. I was responsible for architecture decisions, UI/UX implementation, database design, and deployment.",
  },
  {
    question: "Do you work with teams or prefer solo projects?",
    answer:
      "I enjoy both! I've successfully delivered solo projects but also thrive in collaborative environments. I believe the best solutions often come from diverse perspectives and team collaboration.",
  },
  {
    question: "What's your approach to learning new technologies?",
    answer:
      "I learn best by doing—debugging, building, and shipping. I start with documentation, build small projects, and then apply the technology to solve real problems. This hands-on approach helps me understand both the capabilities and limitations of new tools.",
  },
];

const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  sectionId: string,
) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const navItems = [
  {
    title: "Home",
    href: "hero",
    icon: <Home className="h-full w-full" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      scrollToSection(e, "hero"),
  },
  {
    title: "Experience",
    href: "experience",
    icon: <ClipboardList className="h-full w-full" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      scrollToSection(e, "experience"),
  },
  {
    title: "About",
    href: "about",
    icon: <User className="h-full w-full" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      scrollToSection(e, "about"),
  },
  {
    title: "Testimonials",
    href: "testimonials",
    icon: <Quote className="h-full w-full" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      scrollToSection(e, "testimonials"),
  },
  {
    title: "Skills",
    href: "skills",
    icon: <Zap className="h-full w-full" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      scrollToSection(e, "skills"),
  },
  {
    title: "Projects",
    href: "projects",
    icon: <Briefcase className="h-full w-full" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      scrollToSection(e, "projects"),
  },
  {
    title: "FAQ",
    href: "faq",
    icon: <HelpCircle className="h-full w-full" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      scrollToSection(e, "faq"),
  },
  {
    title: "Contact",
    href: "contact",
    icon: <Mail className="h-full w-full" />,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) =>
      scrollToSection(e, "contact"),
  },
];
