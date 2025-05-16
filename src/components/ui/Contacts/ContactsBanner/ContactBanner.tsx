import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import './ContactBanner.css';

export const ContactBanner = component$(() => {
  const isDarkMode = useSignal(false);

  // Vérifier le mode sombre dès le chargement
  useVisibleTask$(() => {
    const updateMode = () => {
      isDarkMode.value = document.documentElement.classList.contains('dark');
    };

    // Vérifier le mode sombre initial
    updateMode();

    // Ajouter un écouteur pour détecter les changements de mode
    const observer = new MutationObserver(updateMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Nettoyer l'observateur à la destruction
    return () => observer.disconnect();
  });

  return (
    <>
      <div class="contacts-banner__container">
        <div class="contacts-banner__container__img-content">
          <img src="/assets/mignon-1.png" alt="mignon" class="contacts-mignon" />
          <img
            src={isDarkMode.value ? '/assets/portfolio-n.png' : '/assets/portfolio-l.png'}
            alt="portfolio"
            class="contacts-portfolio"
          />
        </div>
        <div class="contacts-banner__container__socials-content">
          <div class="social-group">
            <i class="fab fa-linkedin"></i>
            <span>Linkedin</span>
          </div>
          <div class="social-group">
            <i class="fab fa-github"></i>
            <span>Github</span>
          </div>
          <div class="social-group">
            <i class="fab fa-twitter"></i>
            <span>Twitter</span>
          </div>
        </div>
      </div>
    </>
  );
});
