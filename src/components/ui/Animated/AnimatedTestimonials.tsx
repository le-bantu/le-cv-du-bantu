import { component$, $, useSignal, useVisibleTask$, useStylesScoped$ } from '@builder.io/qwik';

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
}

export const AnimatedTestimonials = component$((props: AnimatedTestimonialsProps) => {
  const active = useSignal(0);
  const quoteContainerRef = useSignal<HTMLElement>();

  // Styles pour l'animation des mots et des images
  useStylesScoped$(`
    .quote-container .word {
      display: inline-block;
      opacity: 0;
      filter: blur(10px);
      transform: translateY(5px);
      transition: opacity 0.3s ease, filter 0.3s ease, transform 0.3s ease;
    }
    .quote-container.in-view .word {
      opacity: 1;
      filter: blur(0);
      transform: translateY(0);
    }
    .image-behind-left {
      transform: scale(0.95) rotate(-12deg);
      opacity: 0.7;
    }
    .image-behind-right {
      transform: scale(0.95) rotate(12deg);
      opacity: 0.7;
    }
    .image-active {
      transform: scale(1) rotate(0);
      opacity: 1;
      z-index: 40;
    }
    .image-transition {
      transition: transform 0.5s ease, opacity 0.5s ease;
    }
  `);

  // Gestion de l'autoplay
  useVisibleTask$(({ cleanup }) => {
    if (props.autoplay) {
      const interval = setInterval(() => {
        active.value = (active.value + 1) % props.testimonials.length;
      }, 5000);
      cleanup(() => clearInterval(interval));
    }
  });

  // Gestion du changement de témoignage
  const handleNext = $(() => {
    active.value = (active.value + 1) % props.testimonials.length;
  });

  const handlePrev = $(() => {
    active.value =
      (active.value - 1 + props.testimonials.length) % props.testimonials.length;
  });

  // Réinitialiser l'animation des mots lors du changement d'index
  useVisibleTask$(({ track }) => {
    track(() => active.value);
    const el = quoteContainerRef.value;
    if (el) {
      el.classList.remove('in-view');
      void el.offsetWidth;
      el.classList.add('in-view');
    }
  });

  return (
    <div class="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div class="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* Colonne gauche : images */}
        <div>
          <div class="relative h-80 w-full">
            {props.testimonials.map((testimonial, index) => {
              const isActive = active.value === index;
              const isLeft = index < active.value;
              const isRight = index > active.value;

              return (
                <img
                  key={testimonial.src}
                  src={testimonial.src}
                  alt={testimonial.name}
                  class={[
                    'absolute border-2 border-solid border-secondary inset-0 h-full w-full rounded-3xl object-cover object-center image-transition',
                    isActive ? 'image-active' : '',
                    isLeft ? 'image-behind-left' : '',
                    isRight ? 'image-behind-right' : ''
                  ].join(' ')}
                />
              );
            })}
          </div>
        </div>

        {/* Colonne droite : texte */}
        <div class="flex flex-col justify-between py-4">
          <div>
            <h3 class="text-2xl font-bold text-black dark:text-white">
              {props.testimonials[active.value].name}
            </h3>
            <p class="text-sm text-gray-500 dark:text-neutral-500">
              {props.testimonials[active.value].designation}
            </p>
            <p
              ref={quoteContainerRef}
              class="quote-container mt-8 text-lg text-gray-500 dark:text-neutral-300"
            >
              {/* Animation mot par mot */}
              {props.testimonials[active.value].quote.split(' ').map((word, i) => (
                <span
                  key={i}
                  class="word"
                  style={{ transitionDelay: `${0.04 * i}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
            </p>
          </div>

          {/* Boutons précédent / suivant */}
          <div class="flex gap-4 pt-12 md:pt-0">
            <button
              onClick$={handlePrev}
              class="group flex h-8 w-8 items-center justify-center rounded-full text-white font-bold bg-brown hover:bg-deepbrown dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:rotate-[20deg]"
            >
              ←
            </button>
            <button
              onClick$={handleNext}
              class="group flex h-8 w-8 items-center justify-center rounded-full text-white font-bold bg-brown hover:bg-deepbrown dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:rotate-[-20deg]"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
