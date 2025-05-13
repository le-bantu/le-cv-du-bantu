export interface Project {
    name: string;
    description: string;
    type: 'professionnel' | 'laboratoire';
    technologies: string[];
    image: string;
    link: string;
  }
  