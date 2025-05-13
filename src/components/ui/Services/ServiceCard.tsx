import { component$ } from "@builder.io/qwik";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export const ServiceCard = component$(({ icon, title, description }: ServiceCardProps) => {
  return (
    <div class="service-card">
      <div class="icon-wrapper">
        <img src={icon} alt={title} class="icon-image" />
      </div>
      <h3 class="service-title">{title}</h3>
      <p class="service-description">{description}</p>
    </div>
  );
});
