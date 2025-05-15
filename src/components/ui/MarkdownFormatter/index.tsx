import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { marked } from "marked";
import './MarkdownFormatter.css';

export interface MarkdownRendererProps {
  markdown: string;
}

export default component$((props: MarkdownRendererProps) => {
  const htmlOutput = useSignal("");
  
  // Simple configuration for marked
  marked.setOptions({
    breaks: true,
    gfm: true
  });

  // Convertir le markdown en HTML lorsque les props changent
  useTask$(({ track }) => {
    const markdown = track(() => props.markdown);
    if (markdown) {
      try {
        htmlOutput.value = marked.parse(markdown) as string;
      } catch (error) {
        console.error("Erreur lors du parsing du markdown:", error);
        htmlOutput.value = "<p>Erreur de formatage</p>";
      }
    } else {
      htmlOutput.value = "";
    }
  });

  return (
    <div class="markdown-renderer py-4">
    
        <div class="prose max-w-none w-full dark:text-white markdown-container">
          <div dangerouslySetInnerHTML={htmlOutput.value} />
        </div>
     
    </div>
  );
});