import { component$, useSignal, $ } from "@builder.io/qwik";
import { projects } from "~/data/projects";
import { Project } from "~/data/type";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { ProjectModal } from "../ProjectModal/ProjectModal";
import { ProjectFilter } from "../ProjectFilter/ProjectFilter";

import "./ProjectList.css";

export const ProjectList = component$(() => {
  const selectedProject = useSignal<Project | null>(null);
  const filteredProjects = useSignal<Project[]>(projects);

  const handleFilterChange = $((filters: any) => {
    const typeFilter = filters.type.toLowerCase();

    filteredProjects.value = projects.filter((project: Project) => {
      const projectType = project.type?.toLowerCase() ?? "unknown";

      return (
        (typeFilter === "all" || projectType === typeFilter) &&
        project.name.toLowerCase().includes(filters.keyword.toLowerCase()) &&
        (filters.technologies.length === 0 ||
          filters.technologies.some((tech: string) =>
            project.technologies.includes(tech)
          ))
      );
    });

    console.log("🔍 Filter type:", filters.type);
    projects.forEach((p) => console.log(`→ ${p.name}: ${p.type}`));
  
  });

  return (
    <div class="flex flex-col gap-10">
      <div class="fade-in-bottom relative z-40">
        <ProjectFilter
          onFilterChange$={handleFilterChange}
          bannerImage="/assets/background-3.png"
          bannerMessage="Mes projets"
        />
      </div>

      <div class="project-list">
        {filteredProjects.value.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            image={project.image}
            technologies={project.technologies}
            onClick$={() => (selectedProject.value = project)}
          />
        ))}
        {selectedProject.value && (
          <ProjectModal
            project={selectedProject.value}
            onClose$={() => (selectedProject.value = null)}
          />
        )}
      </div>
    </div>
  );
});
