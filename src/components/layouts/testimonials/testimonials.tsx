import { component$ } from '@builder.io/qwik';
import { AnimatedTestimonials } from '~/components/ui/Animated/AnimatedTestimonials';

export const Testimonials = component$(() => {
        const testimonials = [
            {
              quote: "Ce produit a changé ma vie ! La simplicité et l'efficacité sont au rendez-vous.",
              name: "Jean Dupont",
              designation: "CEO de StartUp X",
              src: "/assets/profil-1.png"
            },
            {
              quote: "Je recommande vivement cette solution à tous les entrepreneurs.",
              name: "Marie Curie",
              designation: "Fondatrice de TechLab",
              src: "/assets/profil-3.png"
            },
            {
              quote: "L'interface est fluide et l'ergonomie est impressionnante.",
              name: "Koffi Annan",
              designation: "Développeur Fullstack",
              src: "/assets/profil-2.png"
            }
          ];
        
          return (
            <div class="p-8 w-full bg-slate-200 dark:bg-black">
              <h1 class="text-3xl text-center font-bold mb-4 text-deepbrown dark:text-white">Avis des utilisateurs</h1>
              <p class="text-center max-w-[80%] mx-auto mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae deserunt necessitatibus unde soluta ab qui, natus mollitia est nesciunt asperiores molestias ipsum provident maiores molestiae beatae ea doloremque maxime harum!</p>
              <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
            </div>
          );
});