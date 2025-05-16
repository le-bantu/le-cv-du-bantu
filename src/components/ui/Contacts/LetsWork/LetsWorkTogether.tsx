// src/components/LetsWorkTogether.tsx

import { component$ } from '@builder.io/qwik';
import './LetsWorkTogether.css';

export const LetsWorkTogether = component$(() => {
  return (
    <div class="lets-work__container flex flex-col items-center p-8 pb-32 mt-8 shadow-md">
      {/* Titre avec effet plié et effet sticker */}
      <div class="title-wrapper relative inline-block text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        <div class="sticker-box relative inline-block p-4 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg">
          Let's Work
          <span class="folded-corner absolute top-0 right-0 w-5 h-5 bg-gray-300 dark:bg-gray-600"></span>
        </div>
        &nbsp;Together
      </div>

      {/* Texte descriptif */}
      <p class="text-center text-2xl text-gray-600 dark:text-gray-300 my-4 max-w-[50%]">
        Vous pouvez me contacter sur les réseaux pour discuter de vos projets et réaliser vos objectifs ensemble. 
        Je suis toujours ouvert aux nouvelles collaborations !
      </p>
    </div>
  );
});
