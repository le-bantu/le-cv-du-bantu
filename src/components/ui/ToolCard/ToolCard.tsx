import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { useStylesScoped$ } from '@builder.io/qwik';

interface ToolCardProps {
  img: string;
  name: string;
  index: number;
}

export const ToolCard = component$(({ img, name, index }: ToolCardProps) => {
  const visible = useSignal(false);
  const wrapperRef = useSignal<HTMLElement>();

  useVisibleTask$(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible.value = true;
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (wrapperRef.value) {
      observer.observe(wrapperRef.value);
    }
  });

  useStylesScoped$(`
    .slide-in-elliptic-top-fwd {
      animation: slideInEllipticTopFwd 0.4s ease-out both;
    }

    @keyframes slideInEllipticTopFwd {
      0% {
        transform: translateY(-100px) rotateX(-30deg) scale(0);
        transform-origin: 50% 100%;
        opacity: 0;
      }
      100% {
        transform: translateY(0) rotateX(0deg) scale(1);
        transform-origin: 50% 100%;
        opacity: 1;
      }
    }

    .card {
      transition: transform 0.4s ease, border-color 0.4s ease;
      will-change: transform;
    }

    .card:hover {
      transform: scale(1.05) rotate3d(1, 1, 0, 10deg) translateY(-6px);
    }
  `);

  return (
    <div
      ref={wrapperRef}
      role="listitem"
      class={`${visible.value ? 'slide-in-elliptic-top-fwd' : 'opacity-0'}`}
      style={
        visible.value
          ? {
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'both',
            }
          : {}
      }
    >
      <div class="card bg-white dark:bg-opacity-20 dark:bg-gray-800 border hover:border-secondary border-gray-300 rounded-xl shadow-sm w-[140px] h-[140px] flex flex-col items-center justify-center gap-2 px-4 text-center cursor-pointer">
        <img
          src={img}
          alt={name}
          loading="eager"
          decoding="async"
          class="w-10 h-10 object-contain"
        />
        <span class="text-sm font-semibold">{name}</span>
      </div>
    </div>
  );
});
