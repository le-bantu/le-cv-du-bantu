// src/components/InfoCard.tsx

import { component$ } from '@builder.io/qwik';

export const InfoCard = component$(({ icon, title, subtitle }: { icon: string, title: string, subtitle: string }) => {
  return (
    <div class="info-card flex items-center gap-2 p-3 bg-white dark:bg-[#1a1a1a] rounded-md">
      <i class={`${icon} text-xl rounded-full py-4 px-5 border border-gray-100`}></i>
      <div class="flex flex-col gap-1">
        <span class="font-semibold">{title}</span>
        <span class="text-gray-600 dark:text-white">{subtitle}</span>
      </div>
    </div>
  );
});
