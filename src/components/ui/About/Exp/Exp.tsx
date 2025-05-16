// src/components/Exp.tsx

import { component$ } from '@builder.io/qwik';
import { ExperienceCard } from '../ExperienceCard/ExperienceCard';

export const Exp = component$(() => {
  return (
    <div class="exp flex flex-col gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
      <h2 class="text-lg font-semibold">Expériences</h2>
      <ExperienceCard 
        jobTitle="Développeur Fullstack" 
        location="Yaoundé, Cameroun" 
        date="2023 - Présent" 
        description="Développement d'applications web performantes et évolutives avec des technologies modernes."
      />
      <ExperienceCard 
        jobTitle="Développeur Fullstack" 
        location="Yaoundé, Cameroun" 
        date="2023 - Présent" 
        description="Développement d'applications web performantes et évolutives avec des technologies modernes."
      />
    </div>
  );
});
