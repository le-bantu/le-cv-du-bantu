// src/components/Info.tsx

import { component$ } from '@builder.io/qwik';
import { InfoCard } from '../InfoCard/InfoCard';

export const Info = component$(() => {
  return (
    <div class="info flex flex-col gap-4">
      <div class="infos-cards flex flex-col gap-2">
        <InfoCard icon="fab fa-linkedin" title="LinkedIn" subtitle="Mon Profil" />
        <InfoCard icon="fab fa-github" title="GitHub" subtitle="Mon Profil" />
        <InfoCard icon="fab fa-twitter" title="Twitter" subtitle="Mon Profil" />
      </div>
      <div class="proverb text-center bg-gray-300 dark:bg-gray-700 rounded-md p-3">
        <p class="text-gray-700 dark:text-gray-300 italic">
          "La persévérance est la clé du succès."
        </p>
      </div>
    </div>
  );
});
