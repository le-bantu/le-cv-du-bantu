import { component$ } from "@builder.io/qwik";
import { BlogDetail } from "~/components/ui/Blog/BlogDetail/BlogDetail";

export default component$(() => {
  return (
    <div class="p-8">
      <BlogDetail />
    </div>
  );
});
