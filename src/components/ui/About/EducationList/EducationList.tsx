import { component$ } from '@builder.io/qwik';
import type { Certification, Formation, EducationType } from '~/utils/EducationItem';

interface EducationListProps {
  title: string;
  type: EducationType;
  items: Formation[] | Certification[];
}

export const EducationList = component$(({ title, type, items }: EducationListProps) => {
  return (
    <div class="exp flex flex-col gap-4 p-7 bg-white border border-gray-100 dark:bg-[#1a1a1a] rounded-xl">
      <h2 class="text-lg font-semibold mb-4">{title}</h2>

      {items.map((item, index) => (
        <div key={index} class="flex flex-col gap-1 p-4 pb-4 max-lg:p-1 last:border-b-0">
          <div class="flex justify-between items-start gap-4 max-lg:flex-col">
            {/* Logo */}
            {item.logo && (
              <img
                src={item.logo}
                alt={item.title}
                class="w-12 h-12 object-contain rounded-md shrink-0 max-lg:hidden"
              />
            )}

            <div class="flex-1">
              <h3 class="font-semibold text-md">{item.title}</h3>
              <p class=" text-gray-600 dark:text-gray-400">
                {type === 'formation'
                  ? `${(item as Formation).school} – ${(item as Formation).location}`
                  : `${(item as Certification).issuer}`}
              </p>
            </div>

            <span class=" text-gray-500 dark:text-gray-400 whitespace-nowrap font-semibold">{item.date}</span>
          </div>

          {type === 'formation' && (
            <ul class=" text-gray-700 dark:text-gray-300 mt-2 space-y-1 ml-1">
              {(item as Formation).description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          )}

          {type === 'certification' && (item as Certification).link && (
            <a
              href={(item as Certification).link}
              target="_blank"
              class=" text-blue-600 dark:text-blue-400 underline mt-2"
            >
              Voir la certification
            </a>
          )}
        </div>
      ))}
    </div>
  );
});
