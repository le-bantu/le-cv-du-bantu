// src/components/ui/AppLoader.tsx
import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export const AppLoader = component$(() => {
  const isVisible = useSignal(true);

  useVisibleTask$(() => {
    const timeout = setTimeout(() => {
      isVisible.value = false;
    }, 1500); // ou jusqu'à `window.onload` si tu veux être strict

    return () => clearTimeout(timeout);
  });

  return (
    <>
      {isVisible.value && (
        <div class="fixed inset-0 bg-white dark:bg-black z-[9999] flex items-center justify-center transition-opacity duration-700">
          <img src="/assets/logo.webp" alt="Chargement..." class="w-20 h-20 animate-bounce" />
        </div>
      )}
    </>
  );
});
