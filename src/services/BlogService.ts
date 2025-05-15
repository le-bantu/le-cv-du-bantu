import { blogs } from "../data/blogs";
import { comments } from "../data/comments";
import { CommentType } from "~/utils/iComment";
import { Blog } from "~/utils/iBlog";

export class BlogService {
  // Récupérer tous les articles
  static async getAllBlogs(): Promise<Blog[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(blogs);
      }, 300);
    });
  }

  // Récupérer un article par son ID
  static async getBlogById(id: number): Promise<Blog | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const blog = blogs.find((b) => b.id === id);
        resolve(blog);
      }, 300);
    });
  }

  // Récupérer les articles récents
  static async getRecentBlogs(limit: number = 3): Promise<Blog[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(blogs.slice(0, limit));
      }, 300);
    });
  }

  // Récupérer les articles similaires par catégorie
  static async getSimilarBlogs(category: string, excludeId: number): Promise<Blog[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(blogs.filter((blog) => blog.category === category && blog.id !== excludeId));
      }, 300);
    });
  }

  // Récupérer les commentaires d'un article
  static async getComments(blogId: number): Promise<CommentType[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(comments);
        console.log(':: article ::', blogId);
      }, 300);
    });
  }

  // Ajouter un commentaire
  static async addComment(blogId: number, comment: CommentType): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        comments.push(comment);
        resolve();
      }, 200);
    });
  }

  // Récupérer les catégories uniques
  static async getCategories(): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const categories = [...new Set(blogs.map((blog) => blog.category))];
        resolve(categories);
      }, 200);
    });
  }

  // Récupérer les tags uniques
  static async getTags(): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const tags = [...new Set(blogs.flatMap((blog) => blog.tags))];
        resolve(tags);
      }, 200);
    });
  }

  // Filtrer les articles par mot-clé, catégorie et tags
  static async filterBlogs(keyword: string, category: string, tags: string[]): Promise<Blog[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = blogs.filter((blog) => {
          const matchKeyword = blog.title.toLowerCase().includes(keyword.toLowerCase());
          const matchCategory = category === "" || blog.category === category;
          const matchTags = tags.length === 0 || tags.every((tag) => blog.tags.includes(tag));
          return matchKeyword && matchCategory && matchTags;
        });
        resolve(filtered);
      }, 300);
    });
  }
}
