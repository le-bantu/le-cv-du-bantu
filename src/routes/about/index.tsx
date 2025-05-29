import { component$ } from "@builder.io/qwik";
import { ContactMe } from "~/components/layouts/ContactMe/ContactMe";
import { AboutBody } from "~/components/ui/About/AboutBody/AboutBody";
import { AboutHeader } from "~/components/ui/About/AboutHeader/AboutHeader";

export default component$(() => {
  return (
    <div class="flex-col">
      <div class="p-8">
        <AboutHeader />
        <AboutBody />
      </div>
      <ContactMe img="/assets/mask.webp" />
    </div>
  );
});
