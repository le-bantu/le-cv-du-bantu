import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { SkillCard } from '~/components/ui/SkillCard/SkillCard';
import { skills } from '~/data/skills';

export const SkillsList = component$(() => {
  const sectionRef = useSignal<HTMLElement>();
  const skillsVisible = useSignal(false);

  useVisibleTask$(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skillsVisible.value = true;
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.value) observer.observe(sectionRef.value);
    return () => observer.disconnect();
  });

  return (
    <section ref={sectionRef} class="py-10 max-md:w-full" aria-labelledby="skills-title">
      <div class="mx-12 mb-20 flex items-center gap-2">
        <h2 id="skills-title" class="font-semibold text-2xl sm:text-2xl uppercase m-0 whitespace-nowrap">
          My skills
        </h2>
        <div class="border-t border-gray-300 w-full mx-12"></div>
      </div>
      <div class="max-md:flex-col max-md:w-[90%] max-md:mx-auto max-md:mt-0 flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            img={skill.img}
            name={skill.name}
            index={index}
            visible={skillsVisible.value}
          />
        ))}
      </div>
    </section>
  );
});
