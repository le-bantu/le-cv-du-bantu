import { CommentType } from "~/utils/iComment";

export const comments: CommentType[] = [
  {
    id: 1,
    author: "Alice",
    content: "Great article! I learned a lot.",
    date: "2025-05-01",
    replies: [
      {
        id: 2,
        author: "Bob",
        content: "I agree! The part about Qwik JS was insightful.",
        date: "2025-05-02",
      },
    ],
  },
  {
    id: 3,
    author: "Charlie",
    content: "Looking forward to more content like this.",
    date: "2025-05-03",
    replies: [],
  },
];

  