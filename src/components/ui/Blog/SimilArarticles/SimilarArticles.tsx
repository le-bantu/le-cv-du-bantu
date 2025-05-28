import { component$ } from "@builder.io/qwik";
import { Blog } from "~/utils/iBlog";
import "./SimilarArticles.css";

interface SimilarArticlesProps {
  articles: Blog[];
}

export const SimilarArticles = component$(({ articles }: SimilarArticlesProps) => {
  return (
    <div class="similar-articles">
      <h3 class="similar-title">Articles Similaires</h3>
      <div class="similar-cards">
        {articles.map((article) => (
          <a key={article.id} href={`/blog/${article.slug}-${article.id}`} class="similar-card">
            <div class="image-wrapper">
              <img src={article.image} alt={article.title} />
            </div>
            <div class="content-wrapper">
              <p class="article-title">{article.title}</p>
              <p class="article-meta">
                {article.author} - {new Date(article.date).toLocaleDateString()}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
});
