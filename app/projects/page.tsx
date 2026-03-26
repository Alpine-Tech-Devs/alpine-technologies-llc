import Link from "next/link";

export const metadata = {
  title: "Projects | Alpine Technologies LLC",
  description:
    "View our portfolio of websites and applications built for small businesses.",
};

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "The Objectivity",
      description:
        "A modern web platform delivering objective news and analysis. Built with responsive design and optimized for readability across all devices.",
      category: "Website",
      tags: ["Next.js", "Tailwind CSS", "Responsive Design"],
      icon: "📰",
    },
    {
      id: 2,
      title: "Colorblock Garden Planner",
      description:
        "An interactive garden planning application that helps users design and manage their garden layouts with seasonal planning and resource tracking.",
      category: "Web App",
      tags: ["React", "Tailwind CSS", "Firebase"],
      icon: "🌱",
    },
    {
      id: 3,
      title: "Designed Aspirations",
      description:
        "A stunning design portfolio and brand showcase website that highlights creative work and connects designers with potential clients.",
      category: "Website",
      tags: ["Next.js", "Tailwind CSS", "Portfolio"],
      icon: "🎨",
    },
    {
      id: 4,
      title: "Kindness Developmental Center Inc",
      description:
        "A comprehensive web platform for a developmental center featuring program information, enrollment management, and family resources.",
      category: "Website",
      tags: ["Next.js", "React", "Content Management"],
      icon: "❤️",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-900 dark:to-slate-800 px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-slate-900 dark:from-blue-300 dark:to-slate-100 bg-clip-text text-transparent">Our Projects</h1>
          <p className="text-xl text-slate-700 dark:text-slate-300">
            A selection of websites and applications we've built for small businesses looking to grow online.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg dark:hover:shadow-slate-800/50 transition-shadow"
              >
                {/* Icon/Image Area */}
                <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center text-6xl">
                  {project.icon}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                      <p className="text-sm text-blue-500 dark:text-blue-300 font-medium">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Process</h2>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your business, goals, and target audience.",
              },
              {
                step: "02",
                title: "Planning",
                description: "We create a detailed plan, architecture, and timeline for your project.",
              },
              {
                step: "03",
                title: "Development",
                description: "We build your solution using modern best practices and clean code.",
              },
              {
                step: "04",
                title: "Testing",
                description: "Comprehensive testing ensures your solution is bug-free and performs well.",
              },
              {
                step: "05",
                title: "Launch",
                description: "We deploy your project and ensure a smooth transition to production.",
              },
              {
                step: "06",
                title: "Support",
                description: "Ongoing support and maintenance to keep your project running smoothly.",
              },
            ].map((phase, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-16 h-16 rounded-full bg-blue-500 dark:bg-blue-400 text-white dark:text-slate-900 flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {phase.step}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-slate-700 dark:text-slate-300">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-500 dark:bg-blue-800">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-blue-50">
            Let's create something amazing together.
          </p>
          <Link
            href="/contact"
            className="bg-white hover:bg-slate-100 text-blue-500 font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
