// src/components/AboutHeader.tsx

import { component$ } from '@builder.io/qwik';

export const AboutHeader = component$(() => {
  return (
    <div class="about-header__container">
      {/* Groupe présentation image */}
      <div class="about-header__banner relative">
        <img
          src="/assets/background-2.png"
          alt="Banner"
          class="w-full h-48 object-cover rounded-xl"
        />
        <img
          src="/assets/profil-me-2.jpg"
          alt="Profile"
          class="about-header__profile absolute object-cover bottom-[-30px] left-4 w-36 h-36 rounded-full border-4 border-white"
        />
      </div>

      {/* Groupe présentation texte */}
      <div class="about-header__text flex flex-col items-start gap-2 mt-10">
        <div class="flex flex-col">
          <h1 class="text-xl font-bold">Yves Romuald Bahoken</h1>
          <p class="font-medium text-gray-600">Fullstack Developer</p>
        </div>

        <div class="about-header__info flex justify-between items-center w-full gap-4 flex-col lg:flex-row">
          <div class="flex items-center gap-2">
            <i class="fas fa-map-marker-alt text-gray-500"></i>
            <span class="text-gray-700">Yaoundé, Cameroun</span>
          </div>
          <div class="flex gap-2">
            <a
              href="#"
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              LinkedIn
            </a>
            <a
              href="#"
              class="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
