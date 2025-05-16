// src/components/BioSkills.tsx

import { component$ } from '@builder.io/qwik';

export const BioSkills = component$(({ bio, skills }: { bio: string, skills: string[] }) => {
  return (
    <div class="bio-skills flex flex-col gap-4 p-4 bg-white shadow-3xl border border-gray-100 dark:bg-[#1a1a1a] rounded-xl">
      <h2 class="text-lg font-semibold">Bio</h2>
      <p class="text-gray-700 dark:text-gray-300">{bio}</p>
      <h3 class="text-md font-semibold">Skills</h3>
      <div class="skills flex gap-2 flex-wrap">
        {skills.map(skill => (
          <span class="skill-badge bg-secondary text-white px-2 py-1 rounded-xl">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
});
