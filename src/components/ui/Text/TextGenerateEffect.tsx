// components/ui/TextGenerateEffect.tsx
import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

interface TextGenerateEffectProps {
  words: string;
  class?: string;
  cursor?: boolean;
  typingSpeed?: number;
  cursorBlinkSpeed?: number;
  cursorColor?: string;
}

export const TextGenerateEffect = component$<TextGenerateEffectProps>(
  ({ 
    words, 
    class: className = '', 
    cursor = true, 
    typingSpeed = 50,
    cursorBlinkSpeed = 500,
    cursorColor = 'text-black dark:text-white'
  }) => {
    const displayedText = useSignal('');
    const currentIndex = useSignal(0);
    const showCursor = useSignal(true);

    // Cursor animation
    useVisibleTask$(({ cleanup }) => {
      const cursorInterval = setInterval(() => {
        showCursor.value = !showCursor.value;
      }, cursorBlinkSpeed);

      cleanup(() => clearInterval(cursorInterval));
    });

    // Typing animation
    useVisibleTask$(({ cleanup }) => {
      const typingInterval = setInterval(() => {
        if (currentIndex.value < words.length) {
          displayedText.value = words.substring(0, currentIndex.value + 1);
          currentIndex.value++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingSpeed);

      cleanup(() => clearInterval(typingInterval));
    });

    return (
      <div class={['font-normal', className]}>
        <div class="text-neutral-300">
          {displayedText.value.split('').map((char, index) => (
            <span 
              key={index}
              class="text-black dark:text-white"
            >
              {char}
            </span>
          ))}
          {cursor && (
            <span 
              class={`${cursorColor} transition-opacity ${showCursor.value ? 'opacity-100' : 'opacity-0'}`}
              style={`animation-duration: ${cursorBlinkSpeed}ms`}
            >
              |
            </span>
          )}
        </div>
      </div>
    );
  }
);