export type Project = {
  id: number;
  title: string;
  description: string;
  category: "Website" | "Web App";
  tags: string[];
  icon: string;
  url?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Garden Genie Garden Planner",
    description:
      "An interactive garden planning application that helps users design and manage their garden layouts with seasonal planning and resource tracking. *Coming to app store soon.",
    category: "Web App",
    tags: ["React", "Tailwind CSS", "Firebase"],
    icon: "🌱",
    image: "/gardengenie.png",
  },
  {
    id: 2,
    title: "The Objectivity",
    description:
      "A modern web platform delivering objective news and analysis. Built with responsive design and optimized for readability across all devices.",
    category: "Website",
    tags: ["Next.js", "Tailwind CSS", "Responsive Design"],
    icon: "📰",
    url: "https://theobjectivity.com/",
    image: "/theobjectivity.png",
  },
];
