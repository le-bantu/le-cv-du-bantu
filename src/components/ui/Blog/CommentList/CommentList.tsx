import { $, component$, useSignal } from "@builder.io/qwik";
import { Comment } from "../Comment/Comment";
import { comments as initialComments } from "~/data/comments";
import { CommentType } from "~/utils/iComment";

export const CommentList = component$(() => {
  const comments = useSignal<CommentType[]>(initialComments);

  const addReply = $((parentId: number, content: string) => {
    const newReply: CommentType = {
      id: Date.now(),
      author: "You",
      content,
      date: new Date().toISOString(),
    };
    const updatedComments = comments.value.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...(comment.replies || []), newReply],
        };
      }
      return comment;
    });
    comments.value = updatedComments;
  });

  return (
    <div class="comment-list">
      <h2 class="text-2xl font-bold mb-4">Comments</h2>
      {comments.value.map((comment) => (
        <Comment key={comment.id} {...comment} onReply$={addReply} />
      ))}
    </div>
  );
});
