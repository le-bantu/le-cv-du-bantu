export interface Project {
  id: string;
  slug: string;
  name: string;
  description: string;
  type: "professionnel" | "laboratoire";
  technologies: string[];
  image: string;
  link: string;
  github: string;
}
