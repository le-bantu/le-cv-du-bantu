import { component$, useSignal, useVisibleTask$, PropFunction } from "@builder.io/qwik";
import { Blog } from "~/utils/iBlog";
import { BlogCard } from "../BlogCard/BlogCard";
import "./BlogList.css";

interface BlogListProps {
  blogs: Blog[];
  currentPage: number;
  totalPages: number;
  onPageChange$: PropFunction<(page: number) => void>;
}

export const BlogList = component$(({ blogs, currentPage, totalPages, onPageChange$ }: BlogListProps) => {
  const animate = useSignal<boolean>(false);

  useVisibleTask$(() => {
    animate.value = true;
  });

  return (
    <>
      <div class={`blog-list ${animate.value ? "blog-list--animated" : ""}`}>
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogCard key={blog.id} {...blog} />)
        ) : (
          <p class="blog-list__empty">Aucun article trouvé</p>
        )}
      </div>

      {totalPages > 1 && (
        <div class="pagination mt-24 flex justify-center gap-2 transition-all duration-500">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              class={`pagination__button px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-secondary text-white font-bold"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick$={() => onPageChange$(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
});
