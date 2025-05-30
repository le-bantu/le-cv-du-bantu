import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { ToolCard } from '~/components/ui/ToolCard/ToolCard';
import { tools } from '~/data/tools';


export const ToolsList = component$(() => {
  const sectionRef = useSignal<HTMLElement>();
  const toolsVisible = useSignal(false);

  useVisibleTask$(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        toolsVisible.value = true;
        console.log('ToolsList visible ! 🔥'); // 👈 DEBUG
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});


  return (
    <section
      ref={sectionRef}
      class="py-10 px-5"
      aria-labelledby="tools-title"
    >
      <div class="mx-12 mb-20 flex items-center gap-2">
        <h2
          id="tools-title"
          class="font-semibold text-2xl sm:text-2xl uppercase m-0 whitespace-nowrap"
        >
          My tools
        </h2>
        <div class="border-t border-gray-300 w-full mx-12"></div>
      </div>

      <div
        class="flex flex-wrap justify-center gap-6 px-2"
        role="list"
      >
        {tools.map((tool, index) => (
          <ToolCard
            key={tool.name}
            img={tool.img}
            name={tool.name}
            index={index}
            visible={toolsVisible.value}
          />
        ))}
      </div>
    </section>
  );
});
