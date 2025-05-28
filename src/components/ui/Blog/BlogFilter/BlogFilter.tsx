import {
  component$,
  useSignal,
  useVisibleTask$,
  $,
  PropFunction,
  useOnDocument,
} from "@builder.io/qwik";
import { BlogService } from "~/services/BlogService";
import "./BlogFilter.css";

interface BlogFilterProps {
  message: string;
  imageUrl: string;
  onFilterChange$: PropFunction<
    (keyword: string, category: string, tags: string[]) => void
  >;
}

export const BlogFilter = component$(
  ({ message, imageUrl, onFilterChange$ }: BlogFilterProps) => {
    const keyword = useSignal<string>("");
    const selectedCategory = useSignal<string>("");
    const selectedTags = useSignal<string[]>([]);
    const categories = useSignal<string[]>([]);
    const tags = useSignal<string[]>([]);
    const dropdownOpen = useSignal<boolean>(false);

    // Charger les catégories et les tags depuis le BlogService
    useVisibleTask$(async () => {
      categories.value = await BlogService.getCategories();
      tags.value = await BlogService.getTags();
    });

    
    // Gérer les changements de filtre
    const handleFilterChange = $(() => {
      onFilterChange$(
        keyword.value,
        selectedCategory.value,
        selectedTags.value
      );

      console.log(" :: key :: ", keyword.value);
      console.log(" :: key :: ", keyword.value);
    });

    const handleKeywordInput = $((event: Event) => {
      const input = event.target as HTMLInputElement;
      keyword.value = input.value;
      console.log("keyword modifié :", keyword.value);
      handleFilterChange();
    });

    // Gérer la sélection/désélection des tags
    const toggleTag = $((tag: string) => {
      if (selectedTags.value.includes(tag)) {
        selectedTags.value = selectedTags.value.filter((t) => t !== tag);
      } else {
        selectedTags.value = [...selectedTags.value, tag];
      }
      handleFilterChange();
    });

    // Gérer l'ouverture/fermeture du dropdown
    const toggleDropdown = $(() => {
      dropdownOpen.value = !dropdownOpen.value;
    });

    // Gérer la fermeture du dropdown lors de la perte de focus
    useOnDocument(
      "click",
      $((event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest(".blog-filter__tags")) {
          dropdownOpen.value = false;
        }
      })
    );

    // const handleBlur = $((event: FocusEvent) => {
    //   const currentTarget = event.currentTarget as Node;
    //   const relatedTarget = event.relatedTarget as Node;
    //   if (!currentTarget.contains(relatedTarget)) {
    //     dropdownOpen.value = false;
    //   }
    // });

    return (
      <div class="blog-filter" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div class="blog-filter__banner">
          <h1 class="blog-filter__message">{message}</h1>
        </div>
        <div class="blog-filter__container">
          <div class="blog-filter__search-bar">
            <input
              type="text"
              class="blog-filter__input"
              placeholder="Rechercher un article..."
              bind:value={keyword}
              onInput$={handleKeywordInput}
            />
            <span class="blog-filter__icon">
              <i class="fas fa-search"></i>
            </span>
          </div>

          {/* Catégories */}
          <div class="blog-filter__category">
            <select
              class="blog-filter__select"
              bind:value={selectedCategory}
              onChange$={handleFilterChange}
            >
              <option value="">Toutes les catégories</option>
              {categories.value.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Tags - Dropdown Multiselect */}
          <div class="blog-filter__tags">
            <div class="dropdown" onClick$={toggleDropdown}>
              research by Tag &nbsp;<i class="fas fa-caret-down"></i>
            </div>
            {dropdownOpen.value && (
              <div class="dropdown-content">
                {tags.value.map((tag) => (
                  <label key={tag} class="dropdown-item">
                    <input
                      type="checkbox"
                      checked={selectedTags.value.includes(tag)}
                      onChange$={() => toggleTag(tag)}
                    />
                    &nbsp;&nbsp;{tag}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);
