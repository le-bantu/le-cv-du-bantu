import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { services } from "../../../data/services";
import { ServiceCard } from "./ServiceCard";
import "./Services.css";

export const Services = component$(() => {
  const isVisible = useSignal(false);

  useVisibleTask$(() => {
    isVisible.value = true;
  });

  return (
    <section class={`services-section ${isVisible.value ? "fade-in" : ""}`}>
      <h2 class="section-title">My Services</h2>
      <p class="section-description">
        I offer a wide range of services to help you achieve your digital goals. Explore my expertise.
      </p>
      <div class="services-wrapper">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
});
