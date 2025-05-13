import { component$ } from '@builder.io/qwik';
import './Footer.css';

export const Footer = component$(() => {
  return (
    <footer class="footer">
      <div class="social-icons">
        <a href="https://linkedin.com/in/tonprofil" target="_blank" aria-label="LinkedIn">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/tonprofil" target="_blank" aria-label="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://twitter.com/tonprofil" target="_blank" aria-label="Twitter">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
      <div class="footer-text">
        <p>&copy; 2025 Le Bantu. Tous droits réservés.</p>
      </div>
      
    </footer>
  );
});
