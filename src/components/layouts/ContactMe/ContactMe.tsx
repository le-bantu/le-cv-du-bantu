import { component$, useSignal, $ } from "@builder.io/qwik";
import "./ContactMe.css";

interface ContactMeProps {
  img: string;
}

export const ContactMe = component$(({ img }: ContactMeProps) => {
  const showFireworks = useSignal(false);

  const triggerFireworks = $(() => {
    showFireworks.value = true;
    setTimeout(() => {
      showFireworks.value = false;
    }, 3000);
  });

  return (
    <section class="contact" onDblClick$={triggerFireworks}>
      {showFireworks.value && (
        <div class="contact__fireworks" aria-hidden="true">
          <div class="contact__firework"></div>
          <div class="contact__firework"></div>
          <div class="contact__firework"></div>
        </div>
      )}

      <div class="contact__background" aria-hidden="true"></div>

      <div class="contact__container">
        <div class="contact__image-container">
          <img
            src={img}
            alt="Profile"
            class="contact__image contact__image--bounce"
          />
        </div>

        <div class="contact__form-container">
          <h2 class="contact__title">Contact Me</h2>

          <form class="contact__form" preventdefault:submit>
            <div class="contact__name-group">
              <div class="contact__input-group">
                <input
                  type="text"
                  placeholder="First Name"
                  class="contact__input"
                  name="firstName"
                  autocomplete="given-name"
                  aria-label="First Name"
                />
                <i class="contact__icon fas fa-id-card" aria-hidden="true"></i>
              </div>
              <div class="contact__input-group">
                <input
                  type="text"
                  placeholder="Last Name"
                  class="contact__input"
                  name="lastName"
                  autocomplete="family-name"
                  aria-label="Last Name"
                />
                <i class="contact__icon fas fa-id-card-clip" aria-hidden="true"></i>
              </div>
            </div>

            <div class="contact__input-group">
              <input
                type="email"
                placeholder="Your Email"
                class="contact__input"
                name="email"
                autocomplete="email"
                aria-label="Your Email"
              />
              <i class="contact__icon fas fa-envelope" aria-hidden="true"></i>
            </div>

            <div class="contact__input-group">
              <textarea
                placeholder="Your Message"
                class="contact__textarea"
                name="message"
                aria-label="Your Message"
              ></textarea>
              <i class="contact__icon fas fa-comment" aria-hidden="true"></i>
            </div>

            <div class="contact__button-group">
              <button
                type="submit"
                class="contact__button contact__button--primary"
                aria-label="Send Message"
              >
                Send Message
                <i class="fas fa-paper-plane" aria-hidden="true"></i>
              </button>
              <button
                type="button"
                class="contact__button contact__button--whatsapp"
                aria-label="Contact via WhatsApp"
              >
                WhatsApp
                <i class="fab fa-whatsapp" aria-hidden="true"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});
