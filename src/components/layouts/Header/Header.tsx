import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { navLinks } from "../../../data/navLinks";
import "./Header.css";

export const Header = component$(() => {
  const loc = useLocation();
  const isMenuOpen = useSignal(false);
  const isDarkMode = useSignal(false);

  useVisibleTask$(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      isDarkMode.value = storedTheme === "dark";

      const root = document.documentElement;
      if (isDarkMode.value) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  });

  const toggleTheme = $(() => {
    isDarkMode.value = !isDarkMode.value;
    const theme = isDarkMode.value ? "dark" : "light";

    if (typeof window !== "undefined") {
      const root = document.documentElement;
      root.classList.toggle("dark", isDarkMode.value);
      localStorage.setItem("theme", theme);
    }
  });

  const toggleMenu = $(() => {
    isMenuOpen.value = !isMenuOpen.value;
  });

  return (
    <header class="header-container fade-in-top fixed w-full z-50">
      <div class="logo">
        <div class="logo">
          <img
            src="/assets/logo.webp"
            alt="Logo"
            class="w-28"
            width="112" // correspond à w-28 = 7 * 16px
            height="112"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
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
        <button
          class="theme-toggle"
          onClick$={toggleTheme}
          aria-label="Toggle dark mode"
        >
          <div class={`toggle-slider ${isDarkMode.value ? "dark" : "light"}`}>
            {isDarkMode.value ? "🌙" : "☀️"}
          </div>
        </button>
        <button
          class="menu-toggle"
          onClick$={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
});
