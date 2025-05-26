import { component$ } from "@builder.io/qwik";
import { ContactMe } from "~/components/layouts/ContactMe/ContactMe";
import { ProjectList } from "~/components/ui/Projects/ProjectList/ProjectList";

export default component$(() => {
  return (
    <div class="pt-8">
      <div class="px-8 relative z-40">
        <ProjectList />
      </div>
      <div class="mt-2 relative -z-20">
        <ContactMe 
        img="/assets/mask.png"
        />
      </div>
    </div>
  );
});
