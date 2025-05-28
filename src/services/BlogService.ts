import { base_url } from "~/environment/env.prod";
import { Blog } from "~/utils/iBlog";

export interface PaginatedBlogs {
  data: Blog[];
  current_page: number;
  total_pages: number;
}

export const BlogService = {
  async getAllBlogs(): Promise<PaginatedBlogs> {
    // Appel simulé à une API REST paginée
    const res = await fetch(`${base_url}/blogs?page=1`);
    const json = await res.json();

    return {
      data: json.data,
      current_page: json.current_page,
      total_pages: json.last_page,
    };
  },


  async getBlogById(id: number): Promise<Blog> {
    const res = await fetch(`${base_url}/blogs/${id}`);
    if (!res.ok) {
      throw new Error("Erreur lors de la récupération de l'article");
    }
    return await res.json();
  },


  async filterBlogs(
    keyword: string,
    category: string,
    tags: string[],
    page: number = 1
  ): Promise<PaginatedBlogs> {
    const params = new URLSearchParams();
    if (keyword) params.append("keyword", keyword); // <-- ici
    if (category) params.append("category", category);
    if (tags.length) params.append("tags", tags.join(","));
    params.append("page", String(page));

    const res = await fetch(`${base_url}/blogs?${params.toString()}`);
    const json = await res.json();

    return {
      data: json.data,
      current_page: json.current_page,
      total_pages: json.last_page,
    };
  },


  async getCategories(): Promise<string[]> {
    const res = await fetch(`${base_url}/blogs/blog-categories`);
    return await res.json();
  },

  async getTags(): Promise<string[]> {
    const res = await fetch(`${base_url}/blogs/blog-tags`);
    return await res.json();
  }, 

  async getSimilarArticles(blogId: number): Promise<Blog[]> {
    const res = await fetch(`${base_url}/blogs/${blogId}/similar`);
    if (!res.ok) throw new Error("Impossible de récupérer les articles similaires.");
    return await res.json();
  },

};
