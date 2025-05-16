// src/components/BioExpInfo.tsx

import { component$ } from '@builder.io/qwik';
import { BioExp } from '../BioExp/BioExp';
import { Info } from '../Info/Info';

export const BioExpInfo = component$(() => {
  return (
    <div class="bio-exp-info flex flex-col lg:flex-row gap-8">
      <BioExp />
      <Info />
    </div>
  );
});
