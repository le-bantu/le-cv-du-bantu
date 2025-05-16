import { component$ } from "@builder.io/qwik";
import { ContactMe } from "~/components/layouts/ContactMe/ContactMe";
import { ContactBanner } from "~/components/ui/Contacts/ContactsBanner/ContactBanner";

export default component$(() => {
  return (
    <div>
      <ContactBanner />
      <div class="mt-10">
        <ContactMe img="/assets/mask-4.png" />
      </div>
    </div>
  );
});
