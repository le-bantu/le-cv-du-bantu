import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { navLinks } from "../../../data/navLinks";
import "./Header.css";

export const Header = component$(() => {

  const loc = useLocation();

  const isMenuOpen = useSignal(false);
  const isDarkMode = useSignal(false);


  // Charger le thème depuis le localStorage au chargement
  useVisibleTask$(() => {
    const storedTheme = localStorage.getItem("theme");
    isDarkMode.value = storedTheme === "dark";
    document.documentElement.classList.toggle("dark", isDarkMode.value);
  });

  // Fonction de bascule du thème (doit être un QRL)
  const toggleTheme = $(() => {
    isDarkMode.value = !isDarkMode.value;
    const theme = isDarkMode.value ? "dark" : "light";
    document.documentElement.classList.toggle("dark", isDarkMode.value);
    console.log("current path", loc.url.pathname);
    localStorage.setItem("theme", theme);
  });

  // Gestion de l'ouverture/fermeture du menu
  const toggleMenu = $(() => {
    isMenuOpen.value = !isMenuOpen.value;
  });

  return (
    <header class="header-container fade-in-top fixed w-full z-50">
      <div class="logo">
        <img src="/assets/logo.png" alt="Logo" class="logo-image" />
        {/* <span class="logo-text">Le Bantu</span> */}
      </div>

      <nav class={`nav-links ${isMenuOpen.value ? "open" : "close"}`}>
        {navLinks.map((link) => (
          <Link
            key={link.text}
            href={link.route}
            class={`nav-item ${loc.url.pathname === link.route ? "active" : ""}`}
            onClick$={() => (isMenuOpen.value = false)}
          >
            {link.text}
          </Link>
        ))}
      </nav>

      <div class="actions">
        <div class="theme-toggle" onClick$={toggleTheme}>
          <div class={`toggle-slider ${isDarkMode.value ? "dark" : "light"}`}>
            {isDarkMode.value ? "🌙" : "☀️"}
          </div>
        </div>
        <button class="menu-toggle" onClick$={toggleMenu}>
          ☰
        </button>
      </div>
    </header>
  );
});
