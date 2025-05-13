import { $, component$, useSignal } from '@builder.io/qwik';
import { ProjectCard } from '../ProjectCard/ProjectCard';
import { ProjectFilter } from '../ProjectFilter/ProjectFilter';
import { Project } from '../types';
import './ProjectList.css';

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList = component$(({ projects }: ProjectListProps) => {
  const filteredProjects = useSignal(projects);

  const handleFilterChange = $((filtered: Project[]) => {
    filteredProjects.value = filtered;
  });

  return (
    <div class="project-list-container">
      <ProjectFilter projects={projects} onFilterChange$={handleFilterChange} />
      <div class="project-list-grid">
        {filteredProjects.value.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
});
