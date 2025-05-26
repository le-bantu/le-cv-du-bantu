// src/components/BioExp.tsx

import { component$ } from '@builder.io/qwik';
import { BioSkills } from '../BioSkills/BioSkills';
import { Exp } from '../Exp/Exp';

export const BioExp = component$(() => {
  return (
    <div class="bio-exp flex flex-col lg:w-3/4 gap-4 slide-in-blur-left">
      <BioSkills bio="Passionné par le développement fullstack." skills={['JavaScript', 'PHP', 'Java', 'Tailwind', 'Qwik']} />
      <Exp />
    </div>
  );
});
