import { $, component$, PropFunction, useSignal } from "@builder.io/qwik";
import { CommentType } from "~/utils/iComment";

interface CommentProps extends CommentType {
  onReply$: PropFunction<(parentId: number, content: string) => void>;
}

export const Comment = component$(({ id, author, content, date, replies = [], onReply$ }: CommentProps) => {
  const replyInput = useSignal<string>("");
  const showReplyBox = useSignal<boolean>(false);

  const handleReplyClick = $(() => {
    showReplyBox.value = !showReplyBox.value;
  });

  const handleReplySubmit =  $( async() => {
    if (replyInput.value.trim()) {
      await onReply$(id, replyInput.value);
      replyInput.value = "";
      showReplyBox.value = false;
    }
  });

  return (
    <div class="comment p-4 rounded-md mb-2 bg-gray-100 dark:bg-[#1a1a1a]">
      <p class="font-bold">{author} <span class="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</span></p>
      <p>{content}</p>
      <button class="text-primary text-sm mt-2" onClick$={handleReplyClick}>
        Reply
      </button>
      {showReplyBox.value && (
        <div class="mt-2">
          <textarea
            class="w-full p-2 border rounded-md"
            placeholder="Write a reply..."
            bind:value={replyInput}
          ></textarea>
          <button class="bg-primary text-white px-4 py-1 mt-2 rounded-md" onClick$={handleReplySubmit}>
            Submit
          </button>
        </div>
      )}
      {replies.length > 0 && (
        <div class="ml-4 border-l-2 pl-2 mt-2">
          {replies.map((reply) => (
            <Comment key={reply.id} {...reply} onReply$={onReply$} />
          ))}
        </div>
      )}
    </div>
  );
});
