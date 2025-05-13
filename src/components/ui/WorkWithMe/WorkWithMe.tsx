import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { companies } from "../../../data/companies";
import "./WorkWithMe.css";

export const WorkWithMe = component$(() => {
  const isDark = useSignal(false);
  const isPaused = useSignal(false);

  useVisibleTask$(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
    isDark.value = darkMode.matches;

    darkMode.addEventListener("change", (e) => {
      isDark.value = e.matches;
    });
  });

  return (
    <section class="work-with-me">
      <h2>I have worked with them, they trusted me</h2>
      <p>These companies trusted my expertise and collaborated with me on various projects.</p>

      <div 
        class={`marquee-container ${isPaused.value ? "paused" : ""}`} 
        onMouseEnter$={() => (isPaused.value = true)}
        onMouseLeave$={() => (isPaused.value = false)}
      >
        <div class={`marquee ${isPaused.value ? "paused" : ""}`}>
          {companies.map((company, index) => (
            <div class="company-logo grayscale-[100%] transition-all duration-300" key={company.name + index}>
              <img
                src={isDark.value ? company.logoDark : company.logoLight}
                alt={company.name}
                class="logo"
                onMouseEnter$={() => (isPaused.value = true)}
                onMouseLeave$={() => (isPaused.value = false)}
              />
              <p class="company-name">{company.name}</p>
            </div>
          ))}
          {companies.map((company, index) => (
            <div class="company-logo grayscale-[100%] transition-all duration-300" key={company.name + "-clone" + index}>
              <img
                src={isDark.value ? company.logoDark : company.logoLight}
                alt={company.name}
                class="logo"
                onMouseEnter$={() => (isPaused.value = true)}
                onMouseLeave$={() => (isPaused.value = false)}
              />
              <p class="company-name">{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
