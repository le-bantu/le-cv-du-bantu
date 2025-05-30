import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import './ContactCard.css';

interface Language {
  name: string;
  level: string;
  flag: string;
}

interface ContactCardProps {
  imageSrc: string;
  status: boolean;
  linkedinUrl: string;
  emailParts: string[];
  footerMessage: string;
  footerLink: string;
  languages: Language[];
}

export const ContactCard = component$((props: ContactCardProps) => {
  return (
    <div class="contact-card__container flex w-[100%] flex-col-reverse md:flex-row md:items-center md:mx-auto md:max-w-[80%] gap-5 px-14 mt-12 h-fit">
      {/* Image */}
      <div class="contact-card__img__div w-[27rem] h-[21rem] dark:border-slate-800 dark:border-2 overflow-hidden border shadow-xl rounded-xl bounce-in-left">
        <img src={props.imageSrc} class="rounded-lg w-full object-cover" alt="Contact illustration" />
      </div>

      {/* Content */}
      <div class="w-full flex flex-col gap-3">
        {/* Main Box */}
        <div 
          style={{ animationDelay: '350ms'}}
          class="w-full flex flex-col md:flex-row border border-gray-200 rounded-lg overflow-hidden dark:bg-opacity-20 dark:bg-gray-800 bg-white shadow-xl font-semibold bounce-in-right">
          {/* Left Content */}
          <div class="flex flex-col w-full">
            {/* Status */}


            { 
            
            !props.status ?
              <div class="p-3 md:p-4 flex items-center dark:bg-transparent dark:bg-transparent border-b bg-black md:bg-transparent rounded-t-lg md:rounded-none md:rounded-tl-lg md:border-b border-gray-300">
                <div class="w-6 h-6 bg-red-300 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <div class="w-2.5 h-2.5 bg-red-600 rounded-full z-10"></div>
                </div>
                <div>Fully booked right now</div>
              </div>
              :
              <div class="p-3 md:p-4 flex items-center bg-gray-100 dark:bg-transparent border-b md:bg-transparent rounded-t-lg md:rounded-none md:rounded-tl-lg md:border-b border-gray-300">
                <div class="w-6 h-6 bg-green-300 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <div class="w-2.5 h-2.5 bg-green-600 rounded-full z-10"></div>
                </div>
                <div>Open to work</div>
              </div>
            }

            {/* Main Info */}
            <div class="py-4 px-4 flex flex-col gap-3">
              <div>
                DM me on{' '}
                <a href={props.linkedinUrl} target="_blank" class="text-blue-600 underline">
                  LinkedIn
                </a>
              </div>

              <div>
                Or write me a letter:
                <div class="text-md font-medium mt-2 font-mono">
                  {props.emailParts.map((part, index) => (
                    <code key={index} class="mr-1">
                      {part}
                    </code>
                  ))}
                </div>
              </div>

              <div class="text-sm mt-3 md:mt-1">
                See{' '}
                <Link href="/projects" class="text-blue-600 underline">
                  ideas I’d like to work on
                </Link>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div class="flex flex-col md:flex-col md:px-10 justify-center gap-4 py-4 px-4 md:border-t-0 md:border-l md:h-full border-gray-300 w-fit">
            {props.languages.map((lang) => (
              <div class="flex items-center" key={lang.name}>
                <img src={lang.flag} alt={lang.name} class="w-7 mr-3" />
                {/* <span class='pr-2 font-semibold'>{lang.name}</span> */}

                <span class='font-semibold'>{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div 
          style={{ animationDelay: '420ms'}}
          class="flex items-center py-4 px-4 border-t border border-gray-300 md:rounded-lg dark:bg-opacity-20 dark:bg-gray-800 bg-white shadow-xl bounce-in-right">
          <div class="text-3xl mr-3 md:mr-4">👋🏻</div>
          <div>
            {props.footerMessage}
            <br class="hidden md:block" />
            <a href={props.footerLink} class="text-blue-600 underline">
              We might be good friends in a possible future ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});
