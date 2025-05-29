import type { ExperienceCardProps } from "~/components/ui/About/ExperienceCard/ExperienceCard";

export const experiences: ExperienceCardProps[] = [
  {
    jobTitle: "Software Engineer",
    companyName: "Afriland First Bank",
    location: "Yaoundé, Cameroon",
    date: "Oct 2023 – April 2025",
    logo: "/assets/afb.webp",
    description: [
      "Optimized the internal directory application using Spring Boot 3 and Angular 18, significantly reducing response time.",
      "Designed user interfaces for the intranet (INTRA) with Figma, improving usability and internal productivity.",
      "Led the migration of the core system (Liferay + Alfresco), ensuring continuity and performance.",
      "Developed a centralized module for school fee collection using Angular, Keycloak, Docker, and Kubernetes.",
      "Improved the credit card management tool, streamlining refunds and reducing operational delays.",
      "Created a reusable Angular 18 component library to accelerate frontend development across teams.",
      "Enhanced the mission management module by reducing backend bottlenecks with Alfresco APS and Spring Boot."
    ],
  },
  {
    jobTitle: "Salesforce & Application Developer",
    companyName: "Noeli",
    location: "Yaoundé, Cameroon",
    date: "Sep 2021 – Oct 2023",
    logo: "/assets/noeli.svg",
    description: [
      "Built a weather forecasting platform using Apex, SOQL, LWC, and React, improving forecast accuracy and UX.",
      "Developed a Chrome extension for Salesforce metadata operations using React and Chrome Manifest v3.",
      "Created and deployed a money transfer app with zero fees using TypeScript, Firebase, and Google Cloud Functions.",
      "Automated scratch org creation and configured CI workflows to reduce environment setup time.",
      "Wrote unit and integration tests with Apex Test Classes and improved release reliability on Salesforce Marketing Cloud."
    ],
  },
  {
    jobTitle: "Web Developer Intern",
    companyName: "Fire Software",
    location: "Yaoundé, Cameroon",
    date: "Jun 2019 – Sep 2019 & Jul 2020 – Sep 2020",
    logo: "/assets/fire.webp",
    description: [
      "Developed reusable UI components in vanilla JavaScript for the Fire UI library, improving design consistency.",
      "Built and connected user registration, listing, and profile modules for a training management system using PHP, JEE, and MySQL.",
      "Contributed to backend logic and CRUD workflows for trainee management dashboards."
    ],
  },
  {
    jobTitle: "Web Developer Intern",
    companyName: "Magic Software",
    location: "Yaoundé, Cameroon",
    date: "Jun 2018 – Oct 2018",
    logo: "/assets/magic.webp",
    description: [
      "Developed key frontend interfaces (authentication, payment, profile) using React for a payroll management system.",
      "Worked with design mockups and implemented interactive, responsive pages to improve employee experience."
    ],
  },
  {
    jobTitle: "Web Developer Intern",
    companyName: "Ministry of External Relations (MINREX)",
    location: "Yaoundé, Cameroon",
    date: "Jun 2017 – Aug 2017",
    logo: "/assets/minrex.webp",
    description: [
      "Built the CRUD logic for the GESPAT asset management system using PHP and MySQL.",
      "Redesigned the server connection interface with HTML, CSS, and JavaScript to improve usability.",
      "Participated in the digitization process of administrative asset records."
    ],
  }
];
