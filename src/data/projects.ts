export type ProjectStatus = "PRODUCTION" | "BETA" | "IN PROGRESS" | "ARCHIVED";

export type Project = {
  id: string;
  status: ProjectStatus;
  name: string;
  summary: string;
  stack: string[];
  live: string;
  repo: string;
};

/**
 * Replace these six placeholders with your real projects.
 * Keep the id as a two-digit string ("01"–"06") for consistent styling.
 */
export const projects: Project[] = [
  {
    id: "01",
   status: "IN PROGRESS",
    name: "Meridian Digital Wallet ",
    summary:
      "Meridian Digital Wallet is a modern full-stack fintech application that enables users to securely manage their accounts, transfer funds, and monitor transactions through an intuitive, responsive dashboard. Built with React, NestJS, PostgreSQL, and Prisma, it demonstrates secure authentication, scalable backend architecture, and a seamless user experience.",
    stack: ["React", "TypeScript", "Tailwind CSS" , "Framer Motion",  "NestJS ", "Node.js",  "PostgreSQL",  "Prisma ORM" , " JWT" , "Passport.js",  "REST API" ," Git" , "GitHub ", "Vite" , "Netlify" ,"Render"],
    live: "https://meridian-wallet.netlify.app",
    repo: "#",
  },

  {
  id: "02",
  status: "PRODUCTION",
  name: "Notes Workspace",
  summary:
    "Notes Workspace is a full-stack productivity application that allows users to securely create, organize, edit, and manage personal notes through a clean, responsive workspace. Built with Next.js, React, PostgreSQL, and Prisma ORM, it features secure user authentication, user-specific data management, and RESTful API functionality, demonstrating full-stack development, database integration, and modern application architecture.",
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Prisma ORM",
    "JWT",
    "REST API",
    "Node.js",
    "Supabase",
    "Vercel",
    "Git",
    "Shadcn"
    "GitHub"
  ],
  live: "https://notes-workspace-two.vercel.app/",
  repo: "#",
},

  {
    id: "03",
    status: "BETA",
    name: "LuxTravelerz",
    summary:
      "LuxTravelerz is a modern flight booking platform that allows users to search, compare, and explore flights through a fast, intuitive, and responsive interface. Built with Next.js, TypeScript, Tailwind CSS, ands the soon to be integrated Amadeus API, it delivers a seamless travel planning experience with real-time flight search capabilities.",
    stack: [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Amadeus API",
  "Flight Search API"
],
    live: "https://luxtravelerz.netlify.app/",
    repo: "#",
  },
  {
    id: "04",
    status: "PRODUCTION",
    name: "Sephiroth Landing Page",
    summary:
      "Sephiroth Landing Page is a modern, high-converting landing page designed with a strong focus on visual storytelling, smooth animations, and responsive layouts to create an engaging user experience. It showcases advanced frontend development techniques through polished UI components, interactive effects, and performance-focused design that captures users' attention from the first interaction.",
   stack: [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion"
],
    live: "https://sephiroth.netlify.app/",
    repo: "#",
  },
  {
    id: "05",
    status: "PRODUCTION",
    name: "Deepseas Shipping",
    summary:
      "DeepSeas Shipping is a modern logistics and shipping website designed to present freight, cargo, and maritime services through a clean, professional, and responsive interface. It emphasizes intuitive navigation, engaging animations, and a polished visual design to build trust while showcasing strong frontend development skills and user-focused design principles.",
   stack: [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js"
],
    live: "https://www.deepseasshipping.com/",
    repo: "#",
  },
  {
    id: "06",
    status: "PRODUCTION",
    name: "Currency converter App",
    summary: "Currency Converter is a modern web application that provides real-time currency conversion with live exchange rates, historical trends, and an intuitive user interface for seamless financial calculations. Designed with a strong focus on usability and responsive design, it demonstrates API integration, interactive data visualization, and clean frontend architecture",
   stack: [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Chart.js",
  "REST API",
  
],
    live: "https://currencyconverter.lcfe.ng",
    repo: "#",
  },
  
 
];
