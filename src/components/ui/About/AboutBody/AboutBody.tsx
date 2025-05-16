// src/components/AboutBody.tsx

import { component$ } from '@builder.io/qwik';
import { BioExpInfo } from '../BioExpInfo/BioExpInfo';

export const AboutBody = component$(() => {
  return (
    <div class="about-body__container py-8">
      <BioExpInfo />
    </div>
  );
});
