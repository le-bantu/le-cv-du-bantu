import { component$ } from "@builder.io/qwik";
import "./About.css";

export const About = component$(() => {
  return (
    <div class="about-container">
      <div
        class="img-box animate-[chair-rocking_3s_ease-in-out_infinite]
  origin-[bottom_center]"
      >
        <img src="/assets/about-3.png" alt="about" />
      </div>

      <div class="about--text-content">
        <h1 class="text-3xl font-bold">
          Meet &nbsp;
          <span class="about--text-name">Yves Bahoken</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          molestiae soluta aperiam nemo dignissimos alias cupiditate provident
          architecto natus eaque ullam sit consequuntur amet error, fugiat
          repellendus nam! Voluptates, reprehenderit?
        </p>
        <p class="bg-deepbrown dark:bg-gray-900 opacity-90 text-center px-2 py-4 rounded-lg text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam porro
          corporis ea, possimus ex perspiciatis iure, vitae debitis obcaecati
          fugiat laboriosam dolore assumenda magni eum a voluptatem expedita
          dolores provident.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          tempora similique consequatur eos cupiditate animi quos esse culpa
          reprehenderit consequuntur commodi? Ipsam, excepturi eos eveniet sunt
          earum quis atque obcaecati.
        </p>
      </div>
    </div>
  );
});
