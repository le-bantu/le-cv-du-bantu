import { component$, Slot } from "@builder.io/qwik";
import { Header } from "../components/layouts/Header/Header";
import { Footer } from "../components/layouts/Footer/Footer";

export default component$(() => {
  return (
    <div class="min-h-screen flex flex-col">
      <Header />
      <main class="flex-grow">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
