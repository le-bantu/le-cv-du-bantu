import { component$, $, useSignal, PropFunction } from '@builder.io/qwik';
import { Project } from '../types';
import './ProjectFilter.css'

interface ProjectFilterProps {
  projects: Project[];
  onFilterChange$: PropFunction<(filtered: Project[]) => void>;
}

export const ProjectFilter = component$(({ projects, onFilterChange$ }: ProjectFilterProps) => {
  const keyword = useSignal('');
  const selectedType = useSignal<'professionnel' | 'laboratoire' | ''>('');
  const selectedTechnologies = useSignal<string[]>([]);

  const handleSearch = $(() => {
    const filtered = projects.filter((project) => {
      const matchesKeyword = project.name.toLowerCase().includes(keyword.value.toLowerCase());
      const matchesType = selectedType.value === '' || project.type === selectedType.value;
      const matchesTech = selectedTechnologies.value.length === 0 || 
        selectedTechnologies.value.every((tech) => project.technologies.includes(tech));

      return matchesKeyword && matchesType && matchesTech;
    });

    onFilterChange$(filtered);
  });

  const toggleTechnology = $((tech: string) => {
    if (selectedTechnologies.value.includes(tech)) {
      selectedTechnologies.value = selectedTechnologies.value.filter(t => t !== tech);
    } else {
      selectedTechnologies.value = [...selectedTechnologies.value, tech];
    }
    handleSearch();
  });

  return (
    <div class="project-filter">
      <input
        type="text"
        placeholder="Rechercher..."
        class="search-bar"
        bind:value={keyword}
        onInput$={handleSearch}
      />
      <div class="type-filters">
        {['professionnel', 'laboratoire'].map((type) => (
          <button
            key={type}
            class={`type-btn ${selectedType.value === type ? 'active' : ''}`}
            onClick$={() => {
              selectedType.value = selectedType.value === type ? '' : type as 'professionnel' | 'laboratoire';
              handleSearch();
            }}
          >
            {type}
          </button>
        ))}
      </div>
      <div class="tech-filter">
        <button class="tech-dropdown">Technologies ▼</button>
        <div class="tech-list">
          {Array.from(new Set(projects.flatMap((p) => p.technologies))).map((tech) => (
            <label key={tech} class="tech-item">
              <input
                type="checkbox"
                checked={selectedTechnologies.value.includes(tech)}
                onChange$={() => toggleTechnology(tech)}
              />
              {tech}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
});
