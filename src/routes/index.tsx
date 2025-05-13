import { component$ } from "@builder.io/qwik";
import { About } from "~/components/layouts/about/About";
import { ContactMe } from "~/components/layouts/ContactMe/ContactMe";
import { Hero } from "~/components/layouts/Hero/Hero";
import { Testimonials } from "~/components/layouts/testimonials/testimonials";
import { Services } from "~/components/ui/Services/Services";
import { WorkWithMe } from "~/components/ui/WorkWithMe/WorkWithMe";

export default component$(() => {
  return (
    <section class="flex flex-col justify-center items-center bg-secondary">
      <Hero />
      <WorkWithMe />
      <About />
      <Services />
      <Testimonials />
      <ContactMe />
    </section>
  );
});
