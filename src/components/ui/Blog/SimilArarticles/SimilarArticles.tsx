import { component$ } from "@builder.io/qwik";
import { similarArticles } from "~/data/similarArticles";
import "./SimilarArticles.css";

export const SimilarArticles = component$(() => {
  return (
    <div class="similar-articles">
      <h3 class="similar-title">Articles Similaires</h3>
      <div class="similar-cards">
        {similarArticles.map((article) => (
          <a key={article.id} href={article.link} class="similar-card">
            <div class="image-wrapper">
              <img src={article.image} alt={article.title} />
            </div>
            <div class="content-wrapper">
              <p class="article-title">{article.title}</p>
              <p class="article-meta">{article.author} - {new Date(article.date).toLocaleDateString()}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
});
