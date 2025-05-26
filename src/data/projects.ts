import { Project } from "./type";

export const projects: Project[] = [
  {
    id: "proj-001",
    slug: "portfolio-qwik",
    name: "Portfolio Qwik",
    description: "Un portfolio rapide et interactif développé avec Qwik et TailwindCSS.",
    type: "professionnel",
    technologies: ["Qwik", "Tailwind"],
    image: "/assets/project-1.png",
    link: "https://portfolio-qwik.com",
    github: "https://github.com/romuald/portfolio-qwik"
  },
  {
    id: "proj-002",
    slug: "task-manager-api",
    name: "Task Manager API",
    description: "API RESTful pour gérer des tâches, construite avec FastAPI et Docker.",
    type: "laboratoire",
    technologies: ["Python", "FastAPI", "Docker"],
    image: "/assets/project-2.png",
    link: "https://task-manager.com",
    github: "https://github.com/romuald/task-manager-api"
  },
  {
    id: "proj-003",
    slug: "zougou-zougou",
    name: "Zougou Zougou",
    description: "Plateforme de commandes alimentaires dédiée aux plats africains.",
    type: "professionnel",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/assets/project-3.png",
    link: "https://zougou.com",
    github: "https://github.com/romuald/zougou-zougou"
  },
  {
    id: "proj-004",
    slug: "bankai",
    name: "Bankai",
    description: "Application de gestion bancaire personnelle, orientée mobile.",
    type: "professionnel",
    technologies: ["Flutter", "Firebase"],
    image: "/assets/project-4.png",
    link: "https://bankai.app",
    github: "https://github.com/romuald/bankai"
  },
  {
    id: "proj-005",
    slug: "devchat",
    name: "DevChat",
    description: "Messagerie temps réel pour développeurs avec notifications push.",
    type: "laboratoire",
    technologies: ["Vue", "Socket.IO", "Express"],
    image: "/assets/project-5.png",
    link: "https://devchat.dev",
    github: "https://github.com/romuald/devchat"
  },
  {
    id: "proj-006",
    slug: "qwik-cms",
    name: "Qwik CMS",
    description: "Système de gestion de contenu ultrarapide basé sur Qwik.",
    type: "laboratoire",
    technologies: ["Qwik", "Supabase"],
    image: "/assets/project-6.png",
    link: "https://qwikcms.dev",
    github: "https://github.com/romuald/qwik-cms"
  },
  {
    id: "proj-007",
    slug: "ecommerce-lite",
    name: "Ecommerce Lite",
    description: "Mini site e-commerce avec panier, produits et intégration Stripe.",
    type: "professionnel",
    technologies: ["Next.js", "Stripe", "Tailwind"],
    image: "/assets/project-7.png",
    link: "https://ecommerce-lite.com",
    github: "https://github.com/romuald/ecommerce-lite"
  },
  {
    id: "proj-008",
    slug: "notion-clone",
    name: "Notion Clone",
    description: "Clone de Notion pour prise de notes avec markdown en temps réel.",
    type: "laboratoire",
    technologies: ["React", "Firebase", "Draft.js"],
    image: "/assets/project-8.png",
    link: "https://notion-clone.dev",
    github: "https://github.com/romuald/notion-clone"
  },
  {
    id: "proj-009",
    slug: "portfolio-v1",
    name: "Portfolio V1",
    description: "Ancienne version de mon portfolio développée avec HTML/CSS/JS.",
    type: "professionnel",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/assets/project-9.png",
    link: "https://portfolio-v1.com",
    github: "https://github.com/romuald/portfolio-v1"
  },
  {
    id: "proj-010",
    slug: "ai-codegen",
    name: "AI Codegen",
    description: "Générateur de code automatique à partir de prompts IA.",
    type: "laboratoire",
    technologies: ["Node.js", "OpenAI API", "TypeScript"],
    image: "/assets/project-10.png",
    link: "https://ai-codegen.dev",
    github: "https://github.com/romuald/ai-codegen"
  }
];
