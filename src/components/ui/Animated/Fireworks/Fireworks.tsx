import { component$, useSignal, $ } from "@builder.io/qwik";
import "./Fireworks.css";

export const Fireworks = component$(() => {
  const showFireworks = useSignal(false);

  const triggerFireworks = $(() => {
    showFireworks.value = true;
    setTimeout(() => {
      showFireworks.value = false;
    }, 3000); // Durée du feu d'artifice : 3 secondes
  });

  return (
    <div onDblClick$={triggerFireworks}>
      {showFireworks.value && (
        <div class="fireworks-container">
          <div class="firework"></div>
          <div class="firework"></div>
          <div class="firework"></div>
        </div>
      )}
    </div>
  );
});
