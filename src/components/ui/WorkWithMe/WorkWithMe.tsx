import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { companies } from "../../../data/companies";
import "./WorkWithMe.css";

export const WorkWithMe = component$(() => {
  const isDark = useSignal(false);
  const isPaused = useSignal(false);
  const isVisible = useSignal(false);
  const containerRef = useSignal<HTMLElement>();

  useVisibleTask$(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
    isDark.value = darkMode.matches;

    const listener = (e: MediaQueryListEvent) => {
      isDark.value = e.matches;
    };

    darkMode.addEventListener("change", listener);
    return () => darkMode.removeEventListener("change", listener);
  });

  useVisibleTask$(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.value) observer.observe(containerRef.value);
  });

  return (
    <section class="work-with-me" aria-labelledby="workwith-title">
      <div class="text-center px-4">
        <div class="flex items-center gap-6 mb-6">
          <div class="flex-1 border-t border-gray-300"></div>
          <h2 id="workwith-title" class="text-3xl sm:text-4xl font-semibold uppercase whitespace-nowrap">
            I have worked with them
          </h2>
          <div class="flex-1 border-t border-gray-300"></div>
        </div>
        <p class="mb-8 text-lg">
          These companies trusted my expertise and collaborated with me on
          various projects.
        </p>
      </div>

      <div
        class={`marquee-container ${isPaused.value ? "paused" : ""}`}
        onMouseEnter$={() => (isPaused.value = true)}
        onMouseLeave$={() => (isPaused.value = false)}
      >
        <div
          ref={containerRef}
          class={`marquee ${isPaused.value ? "paused" : ""}`}
        >
          {[...companies, ...companies].map((company, index) => (
            <div
              key={company.name + index}
              class={`company-logo grayscale hover:grayscale-0 transition-all duration-300`}
              style={{
                animationDelay: `${index * 100}ms`,
                animationDuration: "0.6s",
                animationFillMode: "both",
              }}
              aria-label={`Logo de ${company.name}`}
            >
              <img
                src={isDark.value ? company.logoDark : company.logoLight}
                alt={`Logo de ${company.name}`}
                loading="lazy"
                decoding="async"
                class="logo"
              />
              <p class="company-name text-center">{company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
