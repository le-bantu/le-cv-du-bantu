import { component$ } from "@builder.io/qwik";
import { ContactMe } from "~/components/layouts/ContactMe/ContactMe";
import { ProjectList } from "~/components/ui/Projects/ProjectList/ProjectList";

export default component$(() => {
  return (
    <div class="pt-8">
      <div class="px-8">
        <ProjectList />
      </div>
      <div class="mt-2">
        <ContactMe 
        img="/assets/mask.png"
        />
      </div>
    </div>
  );
});
