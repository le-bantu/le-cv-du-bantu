import { component$, useSignal, $ } from "@builder.io/qwik";
import emailjs from "emailjs-com";
import "./ContactMe.css";

interface ContactMeProps {
  img: string;
}

export const ContactMe = component$(({ img }: ContactMeProps) => {
  const showFireworks = useSignal(false);
  const sending = useSignal(false);
  const success = useSignal(false);
  const error = useSignal(false);

  const formRef = useSignal<HTMLFormElement>();

  const triggerFireworks = $(() => {
    showFireworks.value = true;
    setTimeout(() => {
      showFireworks.value = false;
    }, 3000);
  });

  const sendEmail = $(async () => {
    if (!formRef.value) return;
    sending.value = true;
    error.value = false;
    success.value = false;

    try {
      await emailjs.sendForm(
        "service_47ghpqk", // Remplace par ton vrai service ID
        "template_9fe2ere", // Remplace par ton template ID
        formRef.value,
        "wwGWzOSwKEdwqjbKt" // Remplace par ta clé publique
      );
      success.value = true;
      formRef.value.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      error.value = true;
    } finally {
      sending.value = false;
    }
  });

  const redirectToWhatsapp = $(() => {
    const phoneNumber = "237670506569"; // Remplace par ton numéro sans +
    const message = encodeURIComponent(
      "Bonjour, je souhaite vous contacter via votre portfolio."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
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

          <form
            class="contact__form"
            ref={formRef}
            preventdefault:submit
            onSubmit$={sendEmail}
          >
            <div class="contact__name-group">
              <div class="contact__input-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  class="contact__input"
                  required
                />
                <i class="contact__icon fas fa-id-card"></i>
              </div>
              <div class="contact__input-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  class="contact__input"
                  required
                />
                <i class="contact__icon fas fa-id-card-clip"></i>
              </div>
            </div>

            <div class="contact__input-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                class="contact__input"
                required
              />
              <i class="contact__icon fas fa-envelope"></i>
            </div>

            <div class="contact__input-group">
              <textarea
                name="message"
                placeholder="Your Message"
                class="contact__textarea"
                required
              ></textarea>
              <i class="contact__icon fas fa-comment"></i>
            </div>

            <div class="contact__button-group">
              <button
                type="submit"
                class="contact__button contact__button--primary"
                disabled={sending.value}
              >
                {sending.value ? "Sending..." : "Send Message"}
                <i class="fas fa-paper-plane"></i>
              </button>

              <button
                type="button"
                class="contact__button contact__button--whatsapp"
                onClick$={redirectToWhatsapp}
              >
                WhatsApp
                <i class="fab fa-whatsapp"></i>
              </button>
            </div>

            {success.value && (
              <div class="contact__message contact__message--success shake-in">
                <lord-icon
                  src="https://cdn.lordicon.com/lupuorrc.json"
                  trigger="loop"
                  delay="200"
                  colors="primary:#16c72e"
                  style="width:32px;height:32px"
                ></lord-icon>
                <span>Message sent successfully!</span>
              </div>
            )}

            {error.value && (
              <div class="contact__message contact__message--error shake-in">
                <lord-icon
                  src="https://cdn.lordicon.com/juujmrhr.json"
                  trigger="loop"
                  delay="200"
                  colors="primary:#e21717"
                  style="width:32px;height:32px"
                ></lord-icon>
                <span>Failed to send message. Try again.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
});
