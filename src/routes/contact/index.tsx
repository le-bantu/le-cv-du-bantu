import { component$ } from "@builder.io/qwik";
import { ContactCard } from "~/components/layouts/ContactCard/ContactCard";
import { ContactMe } from "~/components/layouts/ContactMe/ContactMe";
import { ContactBanner } from "~/components/ui/Contacts/ContactsBanner/ContactBanner";
import { LetsWorkTogether } from "~/components/ui/Contacts/LetsWork/LetsWorkTogether";

export default component$(() => {
  return (
    <div>
      <div class="fade-in-bottom">
        <ContactBanner />
      </div>
      <section class="p-6">
        <ContactCard
          imageSrc="/assets/profil-me-3.jpg"
          statusText="Fully booked right now"
          linkedinUrl="https://www.linkedin.com/in/yves-romuald-bahoken-710509226/"
          emailParts={["hello", "at", "le-cv-du-bantu", "dot", "com"]}
          footerMessage="Do say hi!"
          footerLink="https://youtu.be/Gb38t9ZnBhM"
          languages={[
            {
              name: "French",
              level: "Native",
              flag: "/assets/flags/france.svg",
            },
            {
              name: "English",
              level: "Fluent",
              flag: "/assets/flags/england.svg",
            },
            {
              name: "Spanish",
              level: "Elementary",
              flag: "/assets/flags/spain.svg",
            },
          ]}
        />
      </section>
      <div class="scale-up-hor-center">
        <LetsWorkTogether />
      </div>
      <ContactMe img="/assets/mask-5.png" />
    </div>
  );
});
