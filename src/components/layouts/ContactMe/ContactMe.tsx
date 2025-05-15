import { component$, useSignal, $ } from "@builder.io/qwik";
import "./ContactMe.css";

export const ContactMe = component$(() => {
  const showFireworks = useSignal(false);

  const triggerFireworks = $(() => {
    showFireworks.value = true;
    setTimeout(() => {
      showFireworks.value = false;
    }, 3000); // Feu d'artifice dure 3 secondes
  });

  return (
    <section class="contact" onDblClick$={triggerFireworks}>
      {showFireworks.value && (
        <div class="contact__fireworks">
          <div class="contact__firework"></div>
          <div class="contact__firework"></div>
          <div class="contact__firework"></div>
        </div>
      )}
      <div class="contact__background"></div>
      <div class="contact__container">
        <div class="contact__image-container">
          <img
            src="/assets/profile-bounce.png"
            alt="Profile"
            class="contact__image contact__image--bounce"
          />
        </div>

        <div class="contact__form-container">
          <h2 class="contact__title">Contact Me</h2>
          <form class="contact__form">
            <div class="contact__name-group">
              <div class="contact__input-group">
                <input
                  type="text"
                  placeholder="First Name"
                  class="contact__input"
                />
                <i class="contact__icon fas fa-id-card"></i>
              </div>
              <div class="contact__input-group">
                <input
                  type="text"
                  placeholder="Last Name"
                  class="contact__input"
                />
                <i class="contact__icon fas fa-id-card-clip"></i>
              </div>
            </div>

            <div class="contact__input-group">
              <input
                type="email"
                placeholder="Your Email"
                class="contact__input"
              />
              <i class="contact__icon fas fa-envelope"></i>
            </div>

            <div class="contact__input-group">
              <textarea
                placeholder="Your Message"
                class="contact__textarea"
              ></textarea>
              <i class="contact__icon fas fa-comment"></i>
            </div>

            <div class="contact__button-group">
              <button type="submit" class="contact__button contact__button--primary">
                Send Message
                <i class="fas fa-paper-plane"></i>
              </button>
              <button type="button" class="contact__button contact__button--whatsapp">
                WhatsApp
                <i class="fab fa-whatsapp"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});