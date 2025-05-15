import { Project } from './type';

export const projects: Project[] = [
  {
    name: "Portfolio Qwik",
    description: "A fast and interactive portfolio made with Qwik JS and Tailwind.",
    type: "professionnel",
    technologies: ["Qwik", "Tailwind"],
    image: "/assets/project-1.png",
    link: "https://portfolio-qwik.com",
    github: "https://github.com/romuald/portfolio-qwik"
  },
  {
    name: "Task Manager API",
    description: "API for managing tasks and projects using FastAPI.",
    type: "laboratoire",
    technologies: ["Python", "FastAPI", "Docker"],
    image: "/assets/project-4.png",
    link: "https://task-manager.com",
    github: ""
  }
];