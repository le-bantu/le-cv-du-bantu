import { marked } from "marked";

marked.use({
  async: false,
  pedantic: false,
  gfm: true,
  breaks: true
});

// Fonction pour corriger les sauts de ligne dans le Markdown
export function formatMarkdown(content: string): string {
  // Étape 1 : Supprimer les lignes vides inutiles
  // const cleanContent = content.replace(/^\s*[\r\n]/gm, "");

  // // Étape 2 : Ajouter des sauts de ligne doubles entre les paragraphes
  // const formattedContent = cleanContent
  //   // Remplacer les simples sauts de ligne par un espace suivi d'un saut
  //   .replace(/([^\n])\n([^\n])/g, "$1  \n$2")
  //   // Ajouter un double saut de ligne entre les blocs
  //   .replace(/(\n\s*\n)+/g, "\n\n");

  //   console.log(': content => :', formattedContent)

  // Utiliser marked pour convertir en HTML
  return marked.parse(content) as string;
}