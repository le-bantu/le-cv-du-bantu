import { component$ } from "@builder.io/qwik";
import { ContactMe } from "~/components/layouts/ContactMe/ContactMe";
import { ContactBanner } from "~/components/ui/Contacts/ContactsBanner/ContactBanner";
import { LetsWorkTogether } from "~/components/ui/Contacts/LetsWork/LetsWorkTogether";

export default component$(() => {
  return (
    <div>
      <ContactBanner />
      <LetsWorkTogether />
      <ContactMe img="/assets/mask-5.png" />
    </div>
  );
});
