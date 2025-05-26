import { component$ } from "@builder.io/qwik";
import { SkillCard } from "~/components/ui/SkillCard/SkillCard";

interface Skill {
  img: string;
  name: string;
}

const skills: Skill[] = [
  { img: "/icons/salesforce.svg", name: "Salesforce" },
  { img: "/icons/react.svg", name: "React JS/TS" },
  { img: "/icons/vue.svg", name: "Vue JS" },
  { img: "/icons/angular.svg", name: "Angular" },
  { img: "/icons/qwik.svg", name: "Qwik" },
  { img: "/icons/typescript.svg", name: "TypeScript" },
  { img: "/icons/javascript.svg", name: "JavaScript" },
  { img: "/icons/css.svg", name: "CSS" },
  { img: "/icons/tailwind.svg", name: "Tailwind CSS" },
  { img: "/icons/firebase.svg", name: "Firebase" },
  { img: "/icons/java.svg", name: "Java" },
  { img: "/icons/Jest.svg", name: "Jest" },
  { img: "/icons/jQuery.svg", name: "jQuery" },
  { img: "/icons/JSON.svg", name: "JSON" },
  { img: "/icons/laravel.svg", name: "Laravel" },
  { img: "/icons/inertia.png", name: "Inertia js" },
  { img: "/icons/livewire.svg", name: "Livewire" },
  { img: "/icons/MySQL.svg", name: "MySQL" },
  { img: "/icons/next.svg", name: "Next.js" },
  { img: "/icons/Node.svg", name: "Node.js" },
  { img: "/icons/php.svg", name: "PHP" },
  { img: "/icons/phpunit.svg", name: "PHPUnit" },
  { img: "/icons/postgres.svg", name: "PostgreSQL" },
  { img: "/icons/spring.svg", name: "Spring Boot" },
];


export const SkillsList = component$(() => {
  return (
    <section class="py-10 ">
      <div class="mx-12 mb-20 flex items-center gap-2">
        <h2 class="font-semibold text-2xl sm:text-2xl uppercase m-0 whitespace-nowrap">
          My skills
        </h2>
        <div class="border-t border-gray-300 w-full mx-12"></div>
      </div>
      <div class="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            img={skill.img}
            name={skill.name}
            index={index}
          />
        ))}
      </div>
    </section>
  );
});
