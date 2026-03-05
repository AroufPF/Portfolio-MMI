export type ProjectType =
  | "Alternance"
  | "Stage"
  | "Projet Académique"
  | "Personnel";

export interface ProjectData {
  id: string;
  title: string;
  type: ProjectType;
  role: string;
  duration: string;
  stack: string[];
  context: string;
  architecture: string;
  results: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export const projectsLog: ProjectData[] = [
  {
    id: "alt-dashboard-2025",
    title: "Refonte Dashboard B2B",
    type: "Alternance",
    role: "Développeur Front-End Vue.js",
    duration: "Sept 2024 - Présent",
    stack: ["Vue 3", "Pinia", "Tailwind CSS", "Git Flow"],
    context:
      "L'interface interne de l'entreprise souffrait de lenteurs et d'une dette technique importante sur l'ancien framework.",
    architecture:
      "Migration complète vers Vue 3 (Composition API). Mise en place d'un store global avec Pinia pour gérer les états utilisateurs de manière réactive.",
    results: [
      "Amélioration des performances de rendu de 35%",
      "Création d'un Design System interne de 20 composants",
      "Mise en production sans régression via CI/CD",
    ],
    links: {
      live: "https://entreprise-demo.com",
    },
  },
  {
    id: "sae-ecommerce-api",
    title: "Système E-commerce & API",
    type: "Projet Académique",
    role: "Full-Stack & Lead Tech",
    duration: "Janv 2024 - Mars 2024",
    stack: ["React", "Node.js", "Express", "PostgreSQL"],
    context:
      "Conception d'une plateforme de vente complète en équipe de 4 personnes avec des contraintes de sécurité strictes (JWT, RGPD).",
    architecture:
      "Séparation claire entre l'API RESTful (Node) et le client (React). Utilisation de requêtes paramétrées pour éviter les injections SQL.",
    results: [
      "Déploiement réussi sur VPS Linux",
      "Implémentation complète d'un tunnel d'achat sécurisé",
      "Note académique : 18/20 (Optionnel mais rassurant)",
    ],
    links: {
      github: "https://github.com/ton-profil/ecommerce-system",
    },
  },
];
