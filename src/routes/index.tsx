import { component$ } from "@builder.io/qwik";
import { About } from "~/components/layouts/about/About";
import { ContactMe } from "~/components/layouts/ContactMe/ContactMe";
import { Hero } from "~/components/layouts/Hero/Hero";
import { SkillsList } from "~/components/layouts/SkillsList/SkillsList";
import { Testimonials } from "~/components/layouts/testimonials/testimonials";
import { ToolsList } from "~/components/layouts/ToolList/ToolsList";
import { Services } from "~/components/ui/Services/Services";
import { WorkWithMe } from "~/components/ui/WorkWithMe/WorkWithMe";

export default component$(() => {
  return (
    <section class="flex flex-col justify-center items-center bg-gray-100 dark:bg-black">
      <Hero />
      <WorkWithMe />
      <About />
      <Services />
      <SkillsList />
      <ToolsList />
      <Testimonials />
      <div class="mt-2 w-full">
        <ContactMe img="/assets/mask-3.webp" />
      </div>
    </section>
  );
});
