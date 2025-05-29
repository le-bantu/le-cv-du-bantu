// src/components/AboutHeader.tsx

import { component$ } from "@builder.io/qwik";
import "./AboutHeader.css";

export const AboutHeader = component$(() => {
  return (
    <div class="about-header__container bounce-in-top">
      {/* Groupe présentation image */}
      <div class="about-header__banner relative">
        <img
          src="/assets/background-6.webp"
          alt="Banner"
          class="w-full h-56 object-cover rounded-xl"
        />
        <img
          src="/assets/profil-me-2.webp"
          alt="Profile"
          class="about-header__profile absolute object-cover bottom-[-60px] left-8 w-36 h-36 rounded-full border-8 shadow-md border-white"
        />
      </div>

      {/* Groupe présentation texte */}
      <div class="about-header__text flex flex-col items-start gap-2 mt-20">
        <div class="flex flex-col">
          <h1 class="text-3xl font-bold bounce-in-top delay-150">
            Yves Romuald Bahoken
          </h1>
          <p class="font-medium text-xl text-gray-600 bounce-in-top delay-[450ms]">
            Fullstack Developer
          </p>
        </div>

        <div class="about-header__info flex justify-between items-center w-full gap-4 flex-col lg:flex-row">
          <div
            style={{ animationDelay: "300ms" }}
            class="flex items-center gap-2 fade-in-top delay-300"
          >
            <i class="fas fa-map-marker-alt text-gray-500"></i>
            <span class="text-gray-700">Madrid - Spain</span>
          </div>
          <div class="flex gap-2">
            <a
              href="#"
              class="bounce-in-top delay-300 bg-secondary text-white items-center flex gap-2 px-4 py-2 rounded-md hover:shadow-2xl hover:bg-deepbrown transition-all duration-300"
            >
              <i class="fab fa-linkedin"></i>
              LinkedIn
            </a>
            <a
              href="#"
              style={{ animationDelay: "300ms" }}
              class="roll-in-blurred-right delay-400  bg-[#1a1a1a] flex items-center gap-2 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-all duration-300"
            >
              <i class="fas fa-download"></i>
              Curriculum
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
