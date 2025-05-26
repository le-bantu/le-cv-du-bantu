// src/components/Info.tsx

import { component$ } from '@builder.io/qwik';
import { InfoCard } from '../InfoCard/InfoCard';

export const Info = component$(() => {
  return (
    <div 
    style={{animationDelay: '400ms'}}
    class="slide-in-blur-right info flex flex-col items-center gap-4 rounded-xl h-fit border border-gray-100 bg-white dark:bg-[#1a1a1a] p-4 sticky top-2 lg:w-1/4">
      <div class="infos-cards flex flex-col gap-2">
        <InfoCard icon="fas fa-phone" title="Phone Number" subtitle="+237 670 506 569" />
        <InfoCard icon="fab fa-github" title="GitHub" subtitle="https://github.com/Bahoken" />
        <InfoCard icon="fas fa-envelope-open-text" title="Mail" subtitle="romualdimben@gmail.com" />
      </div>
      <div class="proverb text-center bg-white dark:bg-[#1a1a1a] rounded-md p-3">
        <p class="text-gray-700 dark:text-gray-300 italic">
          "La persévérance est la clé du succès."
        </p>
      </div>
    </div>
  );
});
