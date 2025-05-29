import { component$ } from "@builder.io/qwik";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export const ServiceCard = component$(({ icon, title, description }: ServiceCardProps) => {
  return (
    <article class="service-card" aria-labelledby={`service-title-${title.replace(/\s+/g, "-").toLowerCase()}`}>
      <div class="icon-wrapper">
        <img
          src={icon}
          alt=""
          class="icon-image"
          loading="lazy"
          decoding="async"
          aria-hidden="true"
        />
      </div>
      <h3 id={`service-title-${title.replace(/\s+/g, "-").toLowerCase()}`} class="service-title">
        {title}
      </h3>
      <p class="service-description">{description}</p>
    </article>
  );
});
