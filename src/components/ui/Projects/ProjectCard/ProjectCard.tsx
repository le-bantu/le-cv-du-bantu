import { component$, $, useSignal } from '@builder.io/qwik';
import { Project } from '../types';
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = component$(({ project }: ProjectCardProps) => {
  const isModalOpen = useSignal(false);

  const handleClick = $(() => {
    isModalOpen.value = true;
  });

  return (
    <div 
      class="project-card group" 
      onClick$={handleClick}
      style={{ backgroundImage: `url(${project.image})` }}
    >
      <div class="project-info">
        <h3 class="project-name">{project.name}</h3>
        <div class="tech-icons">
          {project.technologies.map((tech) => (
            <i key={tech} class={`fab fa-${tech} text-xl`}></i>
          ))}
        </div>
      </div>
    </div>
  );
});
