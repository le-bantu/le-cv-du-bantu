import { component$ } from "@builder.io/qwik";
import { AnimatedTestimonials } from "~/components/ui/Animated/AnimatedTestimonials";

export const Testimonials = component$(() => {
  const testimonials = [
    {
      quote:
        "Ce produit a changé ma vie ! La simplicité et l'efficacité sont au rendez-vous.",
      name: "Jean Dupont",
      designation: "CEO de StartUp X",
      src: "/assets/profil-1.png",
    },
    {
      quote: "Je recommande vivement cette solution à tous les entrepreneurs.",
      name: "Marie Curie",
      designation: "Fondatrice de TechLab",
      src: "/assets/profil-3.png",
    },
    {
      quote: "L'interface est fluide et l'ergonomie est impressionnante.",
      name: "Koffi Annan",
      designation: "Développeur Fullstack",
      src: "/assets/profil-2.png",
    },
  ];

  return (
    <div class="p-8 w-full bg-slate-100 dark:bg-black">
      <div class="flex flex-col text-center">
        <div class="flex items-center gap-6 mb-6 mx-4">
          <div class="flex-1 border-t border-gray-300"></div>
          <h2 class="text-3xl sm:text-4xl font-semibold uppercase whitespace-nowrap">
            References
          </h2>
          <div class="flex-1 border-t border-gray-300"></div>
        </div>
        <p class="mb-4">
          Over the years, I’ve had the privilege of working with outstanding
          professionals who were kind enough to share a few words about our
          collaboration:
        </p>
      </div>
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
});
