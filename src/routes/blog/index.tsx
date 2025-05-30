import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { ContactMe } from "~/components/layouts/ContactMe/ContactMe";
import { BlogFilter } from "~/components/ui/Blog/BlogFilter/BlogFilter";
import { BlogList } from "~/components/ui/Blog/BlogList/BlogList";
import { BlogService } from "~/services/BlogService";
import { Blog } from "~/utils/iBlog";

export default component$(() => {
  const blogs = useSignal<Blog[]>([]);
  const currentPage = useSignal(1);
  const totalPages = useSignal(1);

  const keyword = useSignal("");
  const category = useSignal("");
  const tags = useSignal<string[]>([]);

  const fetchFilteredBlogs = $(
    async (
      kw: string = "",
      cat: string = "",
      tg: string[] = [],
      page: number = 1
    ) => {
      const result = await BlogService.filterBlogs(kw, cat, tg, page);
      blogs.value = result.data;
      currentPage.value = result.current_page;
      totalPages.value = result.total_pages;
    }
  );

  const handleFilterChange = $(
    async (kw: string, cat: string, tg: string[]) => {
      keyword.value = kw;
      category.value = cat;
      tags.value = tg;
      await fetchFilteredBlogs(kw, cat, tg, 1);
    }
  );

  const handlePageChange = $(async (page: number) => {
    await fetchFilteredBlogs(keyword.value, category.value, tags.value, page);
  });

  useVisibleTask$(async () => {
    await fetchFilteredBlogs();
  });

  return (
    <div class="pt-8 bg-slate-100 dark:bg-black">
      <div class="px-8">
        <div class="fade-in-bottom relative z-20">
          <BlogFilter
            message="Last news"
            imageUrl="/assets/background-4.webp"
            onFilterChange$={handleFilterChange}
          />
        </div>

        <div class="py-8 fade-in-top -z-20">
          <BlogList
            blogs={blogs.value}
            currentPage={currentPage.value}
            totalPages={totalPages.value}
            onPageChange$={handlePageChange}
          />
        </div>
      </div>

      <div class="mt-2">
        <ContactMe img="/assets/mask-2.webp" />
      </div>
    </div>
  );
});
