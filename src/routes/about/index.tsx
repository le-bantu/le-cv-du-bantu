import { component$ } from '@builder.io/qwik';
import { AboutBody } from '~/components/ui/About/AboutBody/AboutBody';
import { AboutHeader } from '~/components/ui/About/AboutHeader/AboutHeader';

export default component$(() => {
  return (
    <div class="flex-col p-8">
        <AboutHeader />
        <AboutBody />
    </div>
  );
});