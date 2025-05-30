// src/components/ExperienceCard.tsx

import { component$ } from "@builder.io/qwik";
import "./ExperienceCard.css";

export interface ExperienceCardProps {
  jobTitle: string;
  location: string;
  date: string;
  description: string[]; // <--- ici
  companyName: string;
  logo: string;
}

export const ExperienceCard = component$((props: ExperienceCardProps) => {
  const { jobTitle, location, date, description, companyName, logo } = props;

  const isSvg = (filePath: string): boolean => {
    return filePath.toLowerCase().endsWith(".svg");
  };

  return (
    <div class="experience-card flex flex-col gap-4 pt-4 mx-6 max-lg:mx-1 pb-6 dark:bg-[#1a1a1a] border-b">
      <div class="summary flex justify-between items-center max-lg:flex-col  max-lg:items-start max-lg:gap-2 ">
        <div class="flex items-center max-lg:items-start gap-2">
          <img
            src={logo}
            alt={companyName}
            class={`object-contain rounded-full ${
              isSvg(logo) ? "w-fit h-8" : "w-16 h-16"
            }`}
          />
          <div class="flex flex-col gap-1">
            <span class="font-semibold">{jobTitle}</span>
            <span class="text-gray-600">
              {companyName} – {location}
            </span>
          </div>
        </div>
        <span class="text-gray-500 font-semibold">{date}</span>
      </div>
      <ul class="text-gray-700 dark:text-gray-300 ml-2 space-y-1">
        {description.map((item, index) => (
          <li key={index} class="before:hidden">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
});
