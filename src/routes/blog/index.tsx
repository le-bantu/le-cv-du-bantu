import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { ContactMe } from "~/components/layouts/ContactMe/ContactMe";
import { BlogFilter } from "~/components/ui/Blog/BlogFilter/BlogFilter";
import { BlogList } from "~/components/ui/Blog/BlogList/BlogList";
import { BlogService } from "~/services/BlogService";
import { Blog } from "~/utils/iBlog";

export default component$(() => {
  const filteredBlogs = useSignal<Blog[]>([]);

  // Charger tous les articles au démarrage
  useVisibleTask$(async () => {
    const allBlogs = await BlogService.getAllBlogs();
    filteredBlogs.value = allBlogs;
  });

  const handleFilterChange = $(
    async (keyword: string, category: string, tags: string[]) => {
      const result = await BlogService.filterBlogs(keyword, category, tags);
      filteredBlogs.value = result;
    }
  );

  return (
    <div class="pt-8 bg-slate-100">
      <div class="px-8">
        <BlogFilter
          message="Découvrez nos derniers articles"
          imageUrl="/assets/background-4.png"
          onFilterChange$={handleFilterChange}
        />

        <div class="py-8">
          <BlogList blogs={filteredBlogs.value} />
        </div>

      </div>

      <div class="mt-2">
        <ContactMe 
        img="/assets/mask-2.png"
        />
      </div>
    </div>
  );
});
