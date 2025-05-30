import { component$, Slot, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Header } from "../components/layouts/Header/Header";
import { Footer } from "../components/layouts/Footer/Footer";
// import { AppLoader } from "../components/ui/AppLoader";

export const head = {
  title: "Yves Romuald BAHOKEN – Développeur Fullstack JS | Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Portfolio de BAHOKEN Yves Romuald, développeur fullstack JavaScript (Laravel, React, Qwik). Missions en remote pour l’Europe et l’Afrique.",
    },
    {
      name: "keywords",
      content:
        "portfolio, développeur, fullstack, javascript, laravel, qwik, react, freelance, github, linkedin, cameroun, europe, afrique",
    },
    {
      property: "og:title",
      content: "BAHOKEN Yves Romuald – Développeur Fullstack JS",
    },
    {
      property: "og:description",
      content:
        "Découvrez mon travail, mes compétences et mes services. Missions en télétravail disponibles.",
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
      content:
        "https://www.linkedin.com/in/yves-romuald-bahoken-710509226/",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Yves Romuald – Développeur Fullstack JS",
    },
    {
      name: "twitter:description",
      content:
        "Explorez mes projets et services en développement web fullstack JavaScript moderne.",
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
      href: "/assets/your-hero-image.webp", // Remplace par heroData.image si c’est statique
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
      </main>
      {!noLayout && <Footer />}
    </div>
  );
});
