import {
  $,
  component$,
  Slot,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Header } from "../components/layouts/Header/Header";
import { Footer } from "../components/layouts/Footer/Footer";
// import { AppLoader } from "../components/ui/AppLoader";

export const head = {
  title: "Yves Romuald BAHOKEN – Fullstack JS Developer | Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Portfolio of Yves Romuald BAHOKEN, fullstack JavaScript developer (Laravel, React, Qwik). Remote work available for Europe and Africa.",
    },
    {
      name: "keywords",
      content:
        "portfolio, developer, fullstack, javascript, laravel, qwik, react, freelance, github, linkedin, cameroon, europe, africa",
    },
    {
      property: "og:title",
      content: "Yves Romuald BAHOKEN – Fullstack JS Developer",
    },
    {
      property: "og:description",
      content:
        "Discover my work, skills, and services. Remote opportunities available.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://le-cv-du-bantu.tech",
    },
    {
      property: "og:image",
      content: "https://le-cv-du-bantu.tech/images/og-image.jpg",
    },
    {
      property: "og:see_also",
      content: "https://github.com/Bahoken",
    },
    {
      property: "og:see_also",
      content: "https://github.com/le-bantu",
    },
    {
      property: "og:see_also",
      content: "https://www.linkedin.com/in/yves-romuald-bahoken-710509226/",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Yves Romuald – Fullstack JS Developer",
    },
    {
      name: "twitter:description",
      content:
        "Explore my projects and services in modern fullstack JavaScript development.",
    },
    {
      name: "twitter:image",
      content: "https://le-cv-du-bantu.tech/images/og-image.jpg",
    },
  ],
  links: [
    {
      rel: "preload",
      as: "image",
      href: "/assets/logo.webp",
      fetchpriority: "high",
    },
    {
      rel: "preload",
      as: "image",
      href: "/assets/background.webp",
      fetchpriority: "high",
    },
    {
      rel: "preload",
      as: "image",
      href: "/assets/your-hero-image.webp", // Replace with heroData.image if it's static
      fetchpriority: "high",
    },
  ],
};

export default component$(() => {
  const location = useLocation();
  const path = location.url.pathname;
  const noLayout =
    path.includes("login") ||
    path.includes("register") ||
    path.includes("admin");

  const isPlaying = useSignal(false);
  const audioRef = useSignal<HTMLAudioElement>();

  useVisibleTask$(() => {
    // Crée l'élément audio uniquement côté client
    const audio = new Audio("/audio/music.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    audioRef.value = audio;
  });

  const toggleMusic = $(() => {
    if (!audioRef.value) return;

    if (isPlaying.value) {
      audioRef.value.pause();
    } else {
      audioRef.value.play();
    }

    isPlaying.value = !isPlaying.value;
  });
  // Optionnel : afficher le loader global au premier chargement
  useVisibleTask$(() => {
    const loader = document.getElementById("app-loader");
    if (loader) loader.remove();
  });

  return (
    <div class="min-h-screen flex flex-col">
      {/* <AppLoader /> */}
      {!noLayout && <Header />}
      <main class="flex-grow mt-[3.5rem]">
        <Slot />
        <button
          onClick$={toggleMusic}
          title="Jouer / Arrêter la musique. Crédit : Richard Bona - Kwa singa "
          class="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center bg-secondary text-white p-3 rounded-full shadow-lg transition-opacity duration-300 opacity-15 hover:opacity-100"
        >
          <i class="fa fa-music"></i>
        </button>
      </main>
      {!noLayout && <Footer />}
    </div>
  );
});
