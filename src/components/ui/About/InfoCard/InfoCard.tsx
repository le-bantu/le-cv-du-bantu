// src/components/InfoCard.tsx

import { component$ } from '@builder.io/qwik';

export const InfoCard = component$(({ icon, title, subtitle }: { icon: string, title: string, subtitle: string }) => {
  return (
    <div class="info-card flex items-center gap-2 p-3 bg-gray-200 dark:bg-gray-700 rounded-md">
      <i class={`${icon} text-xl`}></i>
      <div class="flex flex-col gap-1">
        <span class="font-semibold">{title}</span>
        <span class="text-gray-600">{subtitle}</span>
      </div>
    </div>
  );
});
