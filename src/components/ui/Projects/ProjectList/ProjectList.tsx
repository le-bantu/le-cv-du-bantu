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
    filteredProjects.value = projects.filter((project: Project) => {
      return (
        (filters.type === "all" || project.type === filters.type) &&
        project.name.toLowerCase().includes(filters.keyword.toLowerCase()) &&
        (filters.technologies.length === 0 ||
          filters.technologies.every((tech: string) =>
            project.technologies.includes(tech)
          ))
      );
    });
  });

  return (
    <div class="flex flex-col gap-10">
      <div class="fade-in-bottom">
        <ProjectFilter
          onFilterChange$={handleFilterChange}
          bannerImage="/assets/background-3.png"
          bannerMessage="Mes projets"
        />
      </div>

      <div class="project-list">
        {filteredProjects.value.map((project, index) => (
          <ProjectCard
            key={index}
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
