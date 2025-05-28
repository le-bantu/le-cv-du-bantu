// src/utils/iBlog.ts
export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  date: string; // correspond à published_at
  comments_count: number;
}

export interface BlogFilters {
  keyword?: string;
  category?: string;
  tags?: string[];
  page?: number;
  per_page?: number;
}
