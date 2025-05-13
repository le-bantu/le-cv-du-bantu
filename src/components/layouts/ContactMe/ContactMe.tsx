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
    <section class="contact-section" onDblClick$={triggerFireworks}>
      {showFireworks.value && (
        <div class="fireworks-container">
          <div class="firework"></div>
          <div class="firework"></div>
          <div class="firework"></div>
        </div>
      )}
      <div class="background-image"></div>
      <div class="contact-container">
        <div class="image-container">
          <img
            src="/assets/profile-bounce.png"
            alt="Profile"
            class="bounce-image"
          />
        </div>

        <div class="form-container">
          <h2 class="form-title">Contact Me</h2>
          <form class="contact-form">
            <div class="name-group">
              <div class="input-group">
                <input
                  type="text"
                  placeholder="First Name"
                  class="contact-input"
                />
                <i class="fas fa-id-card icon"></i>
              </div>
              <div class="input-group">
                <input
                  type="text"
                  placeholder="Last Name"
                  class="contact-input"
                />
                <i class="fas fa-id-card-clip icon"></i>
              </div>
            </div>

            <div class="input-group">
              <input
                type="email"
                placeholder="Your Email"
                class="contact-input"
              />
              <i class="fas fa-envelope icon"></i>
            </div>

            <div class="input-group">
              <textarea
                placeholder="Your Message"
                class="contact-textarea"
              ></textarea>
              <i class="fas fa-comment icon"></i>
            </div>

            <div class="button-group">
              <button type="submit" class="contact-button">
                Send Message
                <i class="fas fa-paper-plane"></i>
              </button>
              <button type="button" class="contact-button whatsapp">
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
