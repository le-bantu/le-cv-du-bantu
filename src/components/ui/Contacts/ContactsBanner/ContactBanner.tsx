import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import './ContactBanner.css';

export const ContactBanner = component$(() => {
  const isDarkMode = useSignal(false);

  // Vérifie le mode sombre au chargement
  useVisibleTask$(() => {
    const updateMode = () => {
      isDarkMode.value = document.documentElement.classList.contains('dark');
    };

    updateMode();

    const observer = new MutationObserver(updateMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  });

  return (
    <div class="contacts-banner__container">
      <div class="contacts-banner__container__img-content">
        <img src="/assets/mignon-1.webp" alt="mignon" class="contacts-mignon" />
        <img
          src={isDarkMode.value ? '/assets/portfolio-n.webp' : '/assets/portfolio-l.webp'}
          alt="portfolio"
          class="contacts-portfolio"
        />
      </div>

      <div class="contacts-banner__container__socials-content">
        <a
          class="social-group"
          href="https://www.linkedin.com/in/yves-romuald-bahoken-710509226/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>

        <a
          class="social-group"
          href="https://github.com/Bahoken"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i class="fab fa-github"></i>
          <span>GitHub</span>
        </a>

         <a
          class="social-group"
          href="https://github.com/le-bantu"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i class="fab fa-github"></i>
          <span>GitHub</span>
        </a>

      </div>
    </div>
  );
});
