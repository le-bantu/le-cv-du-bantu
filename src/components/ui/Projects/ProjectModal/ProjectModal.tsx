import { component$, $, useSignal, PropFunction } from '@builder.io/qwik';
import { Project } from '../types';
import './ProjectModal.css';

interface ProjectModalProps {
  project: Project;
  onClose$: PropFunction<() => void>;
}

export const ProjectModal = component$(({ project, onClose$ }: ProjectModalProps) => {
  const isClosing = useSignal(false);

  const handleClose = $(() => {
    isClosing.value = true;
    setTimeout(() => onClose$(), 300); // Delay to sync with closing animation
  });

  return (
    <div class={`modal-backdrop ${isClosing.value ? 'fade-out' : 'fade-in'}`}>
      <div class="modal-content">
        <button class="close-button" onClick$={handleClose}>
          ✕
        </button>
        <h2 class="modal-title">{project.name}</h2>
        <div class="modal-image" style={{ backgroundImage: `url(${project.image})` }}></div>
        <p class="modal-description">{project.description}</p>
        <a href={project.link} target="_blank" class="modal-link">
          Voir le projet
        </a>
      </div>
    </div>
  );
});
