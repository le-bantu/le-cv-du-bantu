import { component$, $, useSignal, useOnDocument, PropFunction } from "@builder.io/qwik";
import { technologies } from "~/data/technologies";
import "./ProjectFilter.css";

interface FilterProps {
  onFilterChange$: PropFunction<(filters: { keyword: string; type: string; technologies: string[] }) => void>;
  bannerMessage: string;
  bannerImage: string;
}

export const ProjectFilter = component$(({ onFilterChange$, bannerMessage, bannerImage }: FilterProps) => {
  const keyword = useSignal<string>("");
  const type = useSignal<string>("all");
  const selectedTechnologies = useSignal<string[]>([]);
  const dropdownOpen = useSignal<boolean>(false);

  // Gestion du clic en dehors pour fermer la liste des technologies
  useOnDocument(
    "click",
    $((event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".tech-filter")) {
        dropdownOpen.value = false;
      }
    })
  );

  const toggleTechnology = $((tech: string) => {
    if (selectedTechnologies.value.includes(tech)) {
      selectedTechnologies.value = selectedTechnologies.value.filter((t) => t !== tech);
    } else {
      selectedTechnologies.value = [...selectedTechnologies.value, tech];
    }
    onFilterChange$({
      keyword: keyword.value,
      type: type.value,
      technologies: selectedTechnologies.value,
    });
  });

  const handleTypeChange = $((newType: string) => {
    type.value = newType;
    onFilterChange$({
      keyword: keyword.value,
      type: type.value,
      technologies: selectedTechnologies.value,
    });
  });

  const handleKeywordChange = $((e: Event) => {
    keyword.value = (e.target as HTMLInputElement).value;
    onFilterChange$({
      keyword: keyword.value,
      type: type.value,
      technologies: selectedTechnologies.value,
    });
  });

  return (
    <div class="banner-container" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div class="banner-content">
        <h2 class="banner-message">{bannerMessage}</h2>
      </div>
      <div class="filter-container">
        <div class="filter-group">
          <div class="input-icon">
            <input
              type="text"
              placeholder="Search projects..."
              class="search-input"
              value={keyword.value}
              onInput$={handleKeywordChange}
            />
            <i class="fas fa-search search-icon"></i>
          </div>
        </div>

        <div class="type-filter">
          <button
            class={`type-button ${type.value === "all" ? "active" : ""}`}
            onClick$={() => handleTypeChange("all")}
          >
            <i class="fas fa-layer-group"></i> All
          </button>
          <button
            class={`type-button ${type.value === "professionnel" ? "active" : ""}`}
            onClick$={() => handleTypeChange("professionnel")}
          >
            <i class="fas fa-briefcase"></i> Pro
          </button>
          <button
            class={`type-button ${type.value === "laboratoire" ? "active" : ""}`}
            onClick$={() => handleTypeChange("laboratoire")}
          >
            <i class="fas fa-flask"></i> Lab
          </button>
        </div>

        <div class="tech-filter">
          <button
            class="dropdown-button"
            onClick$={() => (dropdownOpen.value = !dropdownOpen.value)}
          >
            Technologies <i class="fas fa-caret-down"></i>
            {selectedTechnologies.value.length > 0 && (
              <span class="badge">{selectedTechnologies.value.length}</span>
            )}
          </button>
          {dropdownOpen.value && (
            <div class="dropdown-content">
              {technologies.map((tech: string) => (
                <label key={tech} class="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedTechnologies.value.includes(tech)}
                    onChange$={() => toggleTechnology(tech)}
                  />
                  {tech}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
