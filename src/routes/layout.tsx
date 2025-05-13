import { component$, Slot } from "@builder.io/qwik";
import { Header } from "../components/layouts/Header/Header";
import { Footer } from "~/components/layouts/Footer/Footer";
import { Fireworks } from "~/components/ui/Animated/Fireworks/Fireworks";

export default component$(() => {
  return (
    <div class="min-h-screen flex flex-col">
      <Header />
      <main class="flex-grow">
        <Fireworks />
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
