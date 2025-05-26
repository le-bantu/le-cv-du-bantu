import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { heroData } from "../../../data/heroData";
import "./Hero.css";

export const Hero = component$(() => {
  const isVisible = useSignal(false);

  useVisibleTask$(() => {
    isVisible.value = true;
  });

  return (
    <section class={`hero-container ${isVisible.value ? "fade-in-top" : ""}`}>
      {/* Nouvelle div pour le fond */}
      <div
        class="background-pattern"
        style={{
          "--bg-image": "url(/assets/background.png)",
          "--bg-opacity": "0.15",
          "--dark-invert": "100%",
        }}
      ></div>
      <div class="hero-inner ">
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
              src="/assets/arrow.png"
              alt=""
              srcset=""
              class="dark:filter dark:invert"
            />
            {/* <i class="fas fa-arrow-down"></i> */}
          </div>
        </div>

        <div
          class="hero-content">
          <div 
          class="text-section fade-in-bottom">
            <h5>
              Hello, <span class="text-primary">my name is</span>
            </h5>
            <h1>
              <span class="first font-lover text-with-border">
                {heroData.firstName}
              </span>{" "}
              <span class="last font-lover text-with-border">
                {heroData.lastName}
              </span>
            </h1>
            <h3 class="font-semibold">{heroData.profession}</h3>
            
            <p class="font-semibold text-gray-700 text-8xl ">
              {heroData.description}
            </p>

            {/* <TextGenerateEffect 
              words={heroData.description}
              class="font-semibold text-gray-700 text-2xl pb-4"
              typingSpeed={40}
              cursorColor="text-primary-500"
            /> */}

            <div class="btn-group flex gap-2">
              <a href="/contact" class="btn-primary w-fit">
                Hire Me Now
              </a>
              <a href="/contact" class="bg-white border px-4 py-2 dark:text-black rounded-md hover:shadow-2xl font-semmibold w-fit">
                Curriculum
              </a>
            </div>
          </div>

          <div class="image-section">
            <img src={heroData.image} alt="Profile" class="profile-image" />
          </div>
        </div>

        <div class="social-bar">
          <p class="vertical-text font-semibold">Follow me</p>
          <ul class="social-links">
            {heroData.socials.map((social) => (
              <li key={social.name}>
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <i class={social.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});
