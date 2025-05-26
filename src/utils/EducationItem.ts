// src/types/EducationItem.ts
export type EducationType = 'formation' | 'certification';

export interface Formation {
  title: string;
  school: string;
  location: string;
  date: string;
  description: string[];
  logo?: string; // ajouté
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link?: string;
  logo?: string; // ajouté
}

