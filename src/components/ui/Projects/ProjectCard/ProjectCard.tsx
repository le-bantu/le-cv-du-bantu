import { component$, PropFunction } from "@builder.io/qwik";
import "./ProjectCard.css";

interface ProjectCardProps {
  name: string;
  image: string;
  technologies: string[];
  onClick$: PropFunction<() => void>;
}

export const ProjectCard = component$(({ name, image, technologies, onClick$ }: ProjectCardProps) => {
  return (
    <div class="project-card fade-in-top" onClick$={onClick$}>
      <div class="card-image-container ">
        <img src={image} alt={name} class="project-image" />
      </div>
      <div class="description-container">
        <h3 class="project-title">{name}</h3>
        <div class="tech-icons">
          {technologies.map((tech) => (
            <span key={tech} class="tech-icon">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
});
