// src/components/Exp.tsx

import { component$ } from '@builder.io/qwik';
import { ExperienceCard } from '../ExperienceCard/ExperienceCard';
import type { ExperienceCardProps } from '../ExperienceCard/ExperienceCard';
import './Exp.css';

interface ExpProps {
  experiences: ExperienceCardProps[];
}

export const Exp = component$((props: ExpProps) => {
  return (
    <div class="exp flex flex-col gap-4 p-4 bg-white border border-gray-100 dark:bg-[#1a1a1a] rounded-xl">
      <h2 class="text-lg font-semibold">Experiences</h2>
      {props.experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </div>
  );
});
