import { component$ } from '@builder.io/qwik';
import { ToolCard } from '~/components/ui/ToolCard/ToolCard';

const tools = [
  { img: '/icons/vscode.svg', name: 'VS Code' },
  { img: '/icons/powershell.svg', name: 'PowerShell' },
  { img: '/icons/intellij.svg', name: 'IntelliJ' },
  { img: '/icons/evernote.svg', name: 'Evernote' },
  { img: '/icons/docker.svg', name: 'Docker' },
  { img: '/icons/github.svg', name: 'GitHub' },
  { img: '/icons/gitlab.svg', name: 'GitLab' },
  { img: '/icons/bitbucket.svg', name: 'BitBucket' },
  { img: '/icons/Jira.svg', name: 'Jira' },
  { img: '/icons/SonarQube.svg', name: 'SonarQube' },
  { img: '/icons/Swagger.svg', name: 'Swagger' },
  { img: '/icons/postman.svg', name: 'Postman' },
  { img: '/icons/teams.svg', name: 'Microsoft teams' },
  { img: '/icons/meet.svg', name: 'Google Meet' },
  { img: '/icons/NPM.svg', name: 'NPM' },
  { img: '/icons/Trello.svg', name: 'Trello' },
  { img: '/icons/jenkins.svg', name: 'Jenkins' },
  { img: '/icons/vite.svg', name: 'Vite' },
  { img: '/icons/portainer.svg', name: 'Portainer' },
  { img: '/icons/kubernetes.svg', name: 'Kubernetes' },
  { img: '/icons/linux.svg', name: 'Linux' },
  { img: '/icons/windows.svg', name: 'Windows' },
];

export const ToolsList = component$(() => {
  return (
    <section
      class="py-10 px-5"
      aria-labelledby="tools-title"
    >
      <div class="mx-12 mb-20 flex items-center gap-2">
        <h2
          id="tools-title"
          class="font-semibold text-2xl sm:text-2xl uppercase m-0 whitespace-nowrap"
        >
          My tools
        </h2>
        <div class="border-t border-gray-300 w-full mx-12"></div>
      </div>

      <div
        class="flex flex-wrap justify-center gap-6 px-2"
        role="list"
      >
        {tools.map((tool, index) => (
          <ToolCard
            key={tool.name}
            img={tool.img}
            name={tool.name}
            index={index}
          />
        ))}
      </div>
    </section>
  );
});
