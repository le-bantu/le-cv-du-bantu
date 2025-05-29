import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { useStylesScoped$ } from '@builder.io/qwik';

interface SkillCardProps {
  img: string;
  name: string;
  index: number;
}

export const SkillCard = component$(({ img, name, index }: SkillCardProps) => {
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

    if (wrapperRef.value) observer.observe(wrapperRef.value);

    return () => observer.disconnect(); // 🔧 nettoyage propre
  });

  useStylesScoped$(`
    .fade-in-up {
      opacity: 0;
      transform: translateY(20px);
      animation: fadeInUp 0.4s ease-out forwards;
    }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .card {
      transition: transform 0.4s ease, border-color 0.4s ease;
      will-change: transform;
    }

    .card:hover {
      transform: scale(1.05) rotate3d(1, 1, 0, 5deg);
    }
  `);

  return (
    <article
      ref={wrapperRef}
      class={visible.value ? 'fade-in-up' : 'opacity-0'}
      style={visible.value ? { animationDelay: `${index * 100}ms` } : {}}
      aria-labelledby={`skill-${index}`}
    >
      <div class="card bg-white dark:bg-opacity-20 dark:bg-gray-800 border hover:border-secondary border-gray-300 rounded-xl shadow-sm w-[220px] h-[80px] flex items-center justify-start gap-4 px-4 cursor-pointer">
        <img
          src={img}
          alt={name}
          loading="eager"
          decoding="async"
          class="w-10 h-10 object-contain"
        />
        <span id={`skill-${index}`} class="text-sm font-semibold">
          {name}
        </span>
      </div>
    </article>
  );
});
