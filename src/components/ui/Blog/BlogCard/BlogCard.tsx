import { component$ } from "@builder.io/qwik";
import { Blog } from "~/utils/iBlog";
import "./BlogCard.css";

export const BlogCard = component$((props: Blog) => {
  return (
    <a href={`/blog/${props.slug}-${props.id}`} class="blog-card">
      <img src={props.image} alt={props.title} class="blog-card__image" />
      <div class="blog-card__content">
        <h3 class="blog-card__title truncate-single">{props.title}</h3>
        <p class="blog-card__excerpt truncate-multiline">{props.excerpt}</p>
        <span class="blog-card__meta">
          <span class="flex gap-2 items-center">
            <i class="fas fa-user"></i>
            {props.author}
          </span>
          <span class="flex gap-2 items-center">
            <i class="fas fa-calendar"></i>
            {new Date(props.date).toLocaleDateString()}
          </span>
        </span>
      </div>
    </a>
  );
});
