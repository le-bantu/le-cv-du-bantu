import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Blog } from "~/utils/iBlog";
import { BlogCard } from "../BlogCard/BlogCard";
import "./BlogList.css";

interface BlogListProps {
  blogs: Blog[];
}

export const BlogList = component$(({ blogs }: BlogListProps) => {
  const animate = useSignal<boolean>(false);

  useVisibleTask$(() => {
    // Activer l'animation lors du rendu
    animate.value = true;
  });

  return (
    <div class={`blog-list ${animate.value ? 'blog-list--animated' : ''}`}>
      {blogs.length > 0 ? (
        blogs.map((blog) => <BlogCard key={blog.id} {...blog} />)
      ) : (
        <p class="blog-list__empty">Aucun article trouvé</p>
      )}
    </div>
  );
});
