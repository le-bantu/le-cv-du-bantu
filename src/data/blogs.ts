import { Blog } from "~/utils/iBlog";

export const blogs: Blog[] = [
    {
      id: 1,
      title: "Mastering Qwik JS",
      slug: "mastering-qwik-js",
      excerpt: "Learn how to build ultra-fast web apps with Qwik JS.",
      content: "Qwik JS is a revolutionary framework for building web applications...",
      category: "Qwik JS",
      image: "/assets/article-1.webp",
      author: "John Doe",
      date: "2025-05-01",
      tags: ["Qwik", "JavaScript", "Web Development"],
    },
    {
      id: 2,
      title: "Tailwind Tips and Tricks",
      slug: "tailwind-tips-and-tricks",
      excerpt: "Boost your productivity with advanced Tailwind techniques.",
      content: "Tailwind CSS offers a highly customizable way to build user interfaces...",
      category: "Tailwind",
      image: "/assets/article-2.webp",
      author: "Jane Smith",
      date: "2025-04-28",
      tags: ["Tailwind", "CSS", "Web Design"],
    },
    {
      id: 3,
      title: "Optimizing FastAPI Performance",
      slug: "optimizing-fastapi-performance",
      excerpt: "Learn how to make your FastAPI applications faster and more efficient.",
      content: "FastAPI is a modern web framework for building APIs with Python...",
      category: "FastAPI",
      image: "/assets/article-3.webp",
      author: "Alice Johnson",
      date: "2025-04-20",
      tags: ["Python", "FastAPI", "API"],
    },
    {
        id: 4,
        title: "Mastering Qwik JS marked",
        slug: "mastering-qwik-js-marked",
        excerpt: "Learn how to build ultra-fast web apps with Qwik JS.",
        content: `# Mastering Qwik JS 
## Introduction
Qwik JS is a revolutionary framework for building **ultra-fast web applications**.  
Its architecture is designed to maximize performance by **minimizing JavaScript execution** on the client.
    
---
    
### Key Features
    
1. **Lazy Loading**: Automatically loads only the necessary parts.  
2. **Zero JS by default**: Ships the minimal JS required.  
3. **SSR Ready**: Fully supports Server-Side Rendering.  
    
\`\`\`typescript
import { component$ } from "@builder.io/qwik";
    
export default component$(() => {
    return <h1>Hello, Qwik!</h1>;
});
\`\`\`
    
## Conclusion
    
Qwik JS is a game-changer for developers looking to build **high-performance web apps**.  
Start mastering it today!
`,
        category: "Qwik JS",
        image: "/assets/article-1.webp",
        author: "John Doe",
        date: "2025-05-01",
        tags: ["Qwik", "JavaScript", "Web Development"],
    }
    
  ];
  