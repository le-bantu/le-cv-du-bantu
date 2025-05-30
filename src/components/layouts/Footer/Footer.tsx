import { component$ } from '@builder.io/qwik';
import './Footer.css';

export const Footer = component$(() => {
  return (
    <footer class="footer">
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/yves-romuald-bahoken-710509226/" target="_blank" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/Bahoken" target="_blank" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://github.com/le-bantu" target="_blank" aria-label="Github">
          <i class="fab fa-github"></i>
        </a>
      </div>
      <div class="footer-text">
        <p>&copy; 2025 Yves Romuald Bahoken Imben (Le Bantu). Tous droits réservés.</p>
      </div>
      
    </footer>
  );
});
