import Link from "next/link";

export const metadata = {
  title: "About | Alpine Technologies LLC",
  description:
    "Learn about Alpine Technologies LLC, our story, values, and the team of experienced software engineers.",
};

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-900 dark:to-slate-800 px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-slate-900 dark:from-blue-300 dark:to-slate-100 bg-clip-text text-transparent">About Alpine Technologies</h1>
          <p className="text-xl text-slate-700 dark:text-slate-300">
            We're a team of experienced software engineers dedicated to helping small businesses succeed online.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300">
            <p>
              Alpine Technologies LLC was founded on a simple idea: small businesses deserve access to the same quality technology and talent as enterprises. We named our company after Alpine, our beloved husky-shepherd dog, who embodies the spirit of what we do—helping others reach their peak.
            </p>
            <p>
              Both of us have spent years working as professional software engineers at various companies. We've seen firsthand how technology can transform businesses, but we've also witnessed how many small business owners struggle to find trustworthy, affordable partners to build their digital presence.
            </p>
            <p>
              That's why we started Alpine Technologies LLC. We leverage modern technology, including AI, to increase our efficiency and speed. But here's what makes us different: we never cut corners. Every line of code is reviewed, tested, and planned by human experts. We believe in using technology to enhance our capabilities, not replace our expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Our Values</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-3xl">🎯</span> Excellence
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                We're committed to delivering exceptional work. That means clean code, thoughtful design, and solutions that actually solve your problems.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-3xl">🤝</span> Partnership
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Your success is our success. We work closely with you, understand your business, and build solutions tailored to your specific needs.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-3xl">🔬</span> Innovation
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                We stay current with the latest technologies and best practices, ensuring your business benefits from modern, performant, and secure solutions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-3xl">💡</span> Integrity
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                We're transparent about what we can do, how long it takes, and how much it costs. No surprises, just honest partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Our Team</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-12">
            Alpine Technologies LLC is owned and operated by two experienced software engineers with a combined 8+ years of professional experience.
          </p>
          <div className="space-y-8">
            <div className="p-8 rounded-lg border border-slate-200 dark:border-slate-800">
              <h3 className="text-2xl font-semibold mb-2">Co-Owner (You)</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">5+ years as a software engineer</p>
              <p className="text-slate-700 dark:text-slate-300">
                Experienced in full-stack development, architecture, and bringing ideas to life.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-slate-200 dark:border-slate-800">
              <h3 className="text-2xl font-semibold mb-2">Co-Owner (Spouse)</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">5+ years as a software engineer</p>
              <p className="text-slate-700 dark:text-slate-300">
                Skilled in building scalable systems, quality assurance, and technical leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Our Tech Stack</h2>
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-12">
            We use modern, proven technologies that scale with your business:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "Firebase",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 text-center font-semibold"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-500 dark:bg-blue-800">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-blue-50">
            Let's discuss your project and see if we're the right fit.
          </p>
          <Link
            href="/contact"
            className="bg-white hover:bg-slate-100 text-blue-500 font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
