// src/components/ExperienceCard.tsx

import { component$ } from '@builder.io/qwik';
import './ExperienceCard.css';

export const ExperienceCard = component$(({ jobTitle, location, date, description }: { jobTitle: string, location: string, date: string, description: string }) => {
  return (
    <div class="experience-card flex flex-col gap-4 pt-4 mx-6 pb-6 dark:bg-[#1a1a1a] border-b">
      <div class="summary flex justify-between items-center">
        <div class="flex items-center gap-2">
          <img src="/assets/afb.png" alt="Company" class="w-12 h-12 object-cover rounded-full" />
          <div class="flex flex-col gap-1">
            <span class="font-semibold">{jobTitle}</span>
            <span class="text-gray-600">{location}</span>
          </div>
        </div>
        <span class="text-gray-500 font-semibold">{date}</span>
      </div>
      <p class="text-gray-700 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
});
