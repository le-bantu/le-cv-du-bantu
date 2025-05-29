import { component$ } from "@builder.io/qwik";
import "./About.css";

export const About = component$(() => {
  return (
    <section class="about-container" aria-labelledby="about-title">
      {/* Image animée */}
      <div
        class="img-box animate-[chair-rocking_3s_ease-in-out_infinite] origin-[bottom_center]"
      >
        <img
          src="/assets/about-3.webp"
          alt="Illustration représentant le développeur"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Texte de présentation */}
      <div class="about--text-content font-semibold">
        <h2 id="about-title" class="text-4xl text-gray font-bold">
          Meet &nbsp;
          <span class="about--text-name">Yves Bahoken</span>
        </h2>

        <p class="text-slate-800 dark:text-white">
          I'm a Full-Stack Software Engineer with 5+ years of experience
          crafting modern web applications that are fast, reliable, and secure.
          I started with PHP and quickly expanded into Java, JavaScript, and a
          wide range of frameworks like Laravel, Symfony, Spring Boot, Angular,
          and React.
        </p>

        <p class="bg-white dark:bg-opacity-20 border shadow dark:bg-gray-800 text-center px-2 py-4 rounded-lg dark:text-white">
          From designing reusable frontend components to building robust backend
          APIs, I enjoy solving real-world problems through clean code and
          thoughtful architecture. My work spans industries like banking and
          fintech, where performance, security, and user experience are
          critical.
        </p>

        <p class="text-slate-800 dark:text-white">
          I'm always learning and exploring new tools, whether it's DevOps,
          cloud platforms, or design systems. For me, engineering is about
          building things that matter — and doing it with passion, precision,
          and purpose.
        </p>
      </div>
    </section>
  );
});
