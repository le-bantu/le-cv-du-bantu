import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { services } from '~/data/services';
import { ServiceCard } from './ServiceCard';
import './Services.css';

export const Services = component$(() => {
  const isVisible = useSignal(false);
  const wrapperRef = useSignal<HTMLElement>();

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

    if (wrapperRef.value) {
      observer.observe(wrapperRef.value);
    }

    return () => observer.disconnect(); // nettoyage propre
  });

  return (
    <section class="services-section" aria-labelledby="services-title">
      <div
        class={
          isVisible.value
            ? 'fade-in mx-12 mb-20 flex items-center gap-2'
            : 'fade-in mx-12 mb-20 flex items-center opacity-0'
        }
      >
        <h2
          id="services-title"
          class="font-semibold text-2xl sm:text-2xl uppercase m-0 whitespace-nowrap"
        >
          They trusted me
        </h2>
        <div class="border-t border-gray-300 w-full mx-12"></div>
      </div>

      <div ref={wrapperRef} class="services-wrapper">
        {services.map((service, index) => (
          <div
            key={index}
            class={isVisible.value ? 'bounce-in-top' : 'opacity-0'}
            style={{
              animationDelay: `${index * 100}ms`,
              animationDuration: '1.2s',
              animationFillMode: 'both',
            }}
          >
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
});
