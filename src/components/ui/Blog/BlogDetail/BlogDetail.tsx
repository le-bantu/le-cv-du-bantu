import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { useLocation, Link } from "@builder.io/qwik-city";
import { BlogService } from "~/services/BlogService";
import "./BlogDetail.css";
import MarkdownFormatter from "../../MarkdownFormatter/index";
import { SimilarArticles } from "../SimilArarticles/SimilarArticles";
// import { CommentList } from "../CommentList/CommentList";
import { Blog } from "~/utils/iBlog";

export const BlogDetail = component$(() => {
  const location = useLocation();
  const blog = useSignal<any>(null);

  const similar = useSignal<Blog[]>([]);

  useVisibleTask$(async () => {
    const { slug } = location.params;
    try {
      const id = parseInt(slug.split("-").pop() || "", 10);
      if (!isNaN(id)) {
        const data = await BlogService.getBlogById(id);
        if (data) {
          blog.value = data;
        }
        const related = await BlogService.getSimilarArticles(id);
        similar.value = related;
      }
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  });

  return (
    <div class="blog-detail">
      {blog.value ? (
        <>
          <Link href="/blog" class="back-button">
            ⬅
          </Link>
          <div class="article-image-container">
            <img
              src={blog.value.image}
              alt={blog.value.title}
              class="article-image"
            />
          </div>
          <div class="content-group dark:text-white">
            <div class="article-content">
              <h1 class="article-title">{blog.value.title}</h1>
              <p class="article-author">
                Par {blog.value.author} -{" "}
                {new Date(blog.value.date).toLocaleDateString()}
              </p>
              <MarkdownFormatter markdown={blog.value.content} />
            </div>
            <div class="sticky-sidebar">
              <SimilarArticles articles={similar.value} />
            </div>
          </div>
          {/* <div class="comments-section">
            <CommentList />
          </div> */}
        </>
      ) : (
        <p>Loading article...</p>
      )}
    </div>
  );
});
