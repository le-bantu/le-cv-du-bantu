import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { heroData } from "../../../data/heroData";
import { Link } from "@builder.io/qwik-city";
import "./Hero.css";

export const Hero = component$(() => {
  const isVisible = useSignal(false);

  useVisibleTask$(() => {
    isVisible.value = true;
  });

  return (
    <header
      class={`hero-container ${isVisible.value ? "fade-in-top" : ""}`}
      aria-label="Présentation personnelle"
    >
      {/* Forcer le chargement du fond pour améliorer LCP */}
      <img
        src="/assets/background.webp"
        alt=""
        loading="eager"
        fetchPriority="high"
        class="hidden"
      />

      {/* Fond visuel */}
      <div
        class="background-pattern min-h-[300px]"
        style={{
          "--bg-image": "url(/assets/background.webp)",
          "--bg-opacity": "0.15",
          "--dark-invert": "100%",
        }}
      ></div>

      <div class="hero-inner">
        <h1 class="sr-only">
          Yves Romuald Bahoken Imben – Développeur Fullstack JS/PHP
        </h1>

        <div class="bar">
          <div class="contact-info flex flex-col items-center gap-6">
            <i class="fas fa-phone"></i>
            <a href={`tel:${heroData.phone}`} class="phone-text vertical-text">
              {heroData.phone}
            </a>
          </div>

          <div class="scroll-indicator">
            <p class="vertical-text font-semibold">Scroll</p>
            <img
              src="/assets/arrow.webp"
              alt="Flèche de défilement"
              class="dark:filter dark:invert bounce-infinite mt-2"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div class="hero-content">
          <div class="text-section fade-in-bottom">
            <h2 class="text-3xl font-semibold">
              Hello, <span class="text-primary">my name is</span>
            </h2>
            <h3 class="px-4 py-1 w-fit -rotate-1 md:-ml-4 bg-secondary rounded-xl max-md:bg-white max-md:dark:bg-black">
              <span class="font-lover text-with-border text-white text-6xl">
                {heroData.firstName}
              </span>{" "}
              <span class="font-lover text-with-border text-white text-6xl">
                {heroData.lastName}
              </span>
            </h3>
            <h4 class="font-semibold text-3xl">{heroData.profession}</h4>
            <p class="font-semibold text-gray-700 text-lg max-w-xl">
              {heroData.description}
            </p>

            <div class="btn-group flex gap-2 items-center mt-4">
              <Link
                href="/contact"
                class="btn-primary w-fit flex items-center gap-2"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/wwsllqpi.json"
                  trigger="hover"
                  colors="primary:#ffffff"
                  style={{ width: "24px", height: "24px" }}
                />
                Talk with me
              </Link>
              <a
                href="/cv.pdf"
                download
                class="bg-white border px-4 py-2 dark:text-black rounded-md hover:shadow-2xl font-semibold w-fit flex items-center gap-2"
              >
                <lord-icon
                  src="https://cdn.lordicon.com/kydcudfv.json"
                  trigger="hover"
                  colors="primary:#121331"
                  style={{ width: "24px", height: "24px" }}
                />
                Curriculum
              </a>
            </div>
          </div>

          <div class="image-section">
            <img
              src={heroData.image}
              alt="Portrait de Yves Romuald Bahoken Imben"
              class="profile-image"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>

        <div class="social-bar">
          <p class="vertical-text font-semibold">Follow me</p>
          <ul class="social-links">
            {heroData.socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Réseau social ${social.name}`}
                >
                  <i class={social.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
});
