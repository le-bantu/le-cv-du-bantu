import { component$ } from "@builder.io/qwik";
import { Blog } from "~/utils/iBlog";
import "./BlogCard.css";

export const BlogCard = component$((props: Blog) => {
  return (
    <a href={`/blog/${props.slug}-${props.id}`} class="blog-card">
      <img src={props.image} alt={props.title} class="blog-card__image" />
      <div class="blog-card__content">
        <h3 class="blog-card__title">{props.title}</h3>
        <p class="blog-card__excerpt">{props.excerpt}</p>
        <span class="blog-card__meta">{props.author} - {new Date(props.date).toLocaleDateString()}</span>
      </div>
    </a>
  );
});
