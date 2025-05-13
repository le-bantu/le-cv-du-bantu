import { component$, useSignal } from "@builder.io/qwik";
import { ProjectList } from "~/components/ui/Projects/ProjectList/ProjectList";
import { Project } from "~/components/ui/Projects/types";

export default component$(() => {
  const projects = useSignal<Project[]>([
    {
      name: "Portfolio",
      description: "Un portfolio personnel pour présenter mes projets.",
      type: "professionnel",
      technologies: ["react", "tailwind", "qwik"],
      image: "https://via.placeholder.com/600",
      link: "https://monportfolio.com",
    },
    {
      name: "Blog Tech",
      description: "Un blog sur les nouvelles technologies.",
      type: "laboratoire",
      technologies: ["qwik", "node", "express"],
      image: "https://via.placeholder.com/600",
      link: "https://techblog.com",
    },
    {
      name: "E-commerce",
      description: "Une boutique en ligne moderne.",
      type: "professionnel",
      technologies: ["laravel", "vue", "mysql"],
      image: "https://via.placeholder.com/600",
      link: "https://ecommerce.com",
    },
  ]);

  return (
    <div class="project-page flex flex-col items-center justify-center">
      <h1 class="page-title">Mes Projets</h1>
      <ProjectList projects={projects.value} />
    </div>
  );
});
