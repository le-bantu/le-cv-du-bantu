import { component$, PropFunction } from "@builder.io/qwik";
import "./ProjectModal.css";

interface ProjectModalProps {
  project: {
    name: string;
    description: string;
    image: string;
    technologies: string[];
    link: string;
    github?: string;
  };
  onClose$: PropFunction<() => void>;
}

export const ProjectModal = component$(({ project, onClose$ }: ProjectModalProps) => {
  return (
    <div class="modal-overlay" onClick$={onClose$}>
      <div class="modal-content" onClick$={(e) => e.stopPropagation()}>
        <button class="close-button" onClick$={onClose$}>×</button>
        <h2 class="modal-title">{project.name}</h2>
        <div class="modal-body">
          <img src={project.image} alt={project.name} class="modal-project-image" />
          <div class="modal-details">
            <p class="modal-description">{project.description}</p>
            <div class="tech-badges">
              {project.technologies.map((tech) => (
                <span key={tech} class="tech-badge">{tech}</span>
              ))}
            </div>
            <div class="modal-links">
              {project.link && (
                <a href={project.link} target="_blank" class="modal-link">
                  <i class="fas fa-external-link-alt"></i> Visit Project
                </a>
              )}
              {project.github && project.github !== "" && (
                <a href={project.github} target="_blank" class="modal-link">
                  <i class="fab fa-github"></i> View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
