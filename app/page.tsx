import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-900 dark:to-slate-800 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo with Circular Badge */}
          <div className="mb-12 flex justify-center">
            <div className="relative inline-flex">
              {/* Outer Shadow Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-500 dark:from-blue-500 dark:to-blue-700 rounded-full blur-2xl opacity-30 -z-10 scale-110"></div>
              
              {/* Badge Circle */}
              <div className="flex items-center justify-center w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 dark:from-blue-500 dark:to-blue-600 shadow-2xl relative z-10">
                {/* Inner white container for logo */}
                <div className="flex items-center justify-center w-36 h-36 sm:w-48 sm:h-48 lg:w-60 lg:h-60 rounded-full bg-white dark:bg-slate-800 p-4">
                  <Image
                    src="/alpine-logo.png"
                    alt="Alpine Technologies Logo"
                    width={220}
                    height={220}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-slate-900 dark:from-blue-300 dark:to-slate-100 bg-clip-text text-transparent">
            Your Business, Elevated
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Modern websites and apps built by experienced engineers who understand small business. We combine cutting-edge technology with thoughtful design to help you peak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
            >
              Start Your Project
            </Link>
            <Link
              href="/about"
              className="bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-50 font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Alpine Tech</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expert Engineers */}
            <div className="p-8 rounded-lg border border-slate-200 dark:border-slate-800 hover:shadow-lg dark:hover:shadow-slate-800/50 transition-shadow">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-3">Expert Software Engineers</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Both founders have 4+ years of professional software engineering experience. We know what works.
              </p>
            </div>

            {/* Modern Tech */}
            <div className="p-8 rounded-lg border border-slate-200 dark:border-slate-800 hover:shadow-lg dark:hover:shadow-slate-800/50 transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Modern Technology</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Built with the latest frameworks and practices for performance, security, and scalability.
              </p>
            </div>

            {/* Human Review */}
            <div className="p-8 rounded-lg border border-slate-200 dark:border-slate-800 hover:shadow-lg dark:hover:shadow-slate-800/50 transition-shadow">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-3">Human Verified</h3>
              <p className="text-slate-600 dark:text-slate-400">
                We use AI to be efficient, but every line of code is reviewed, tested, and planned by human experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Recent Projects</h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            We've helped small businesses transform their online presence with custom websites and applications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-300 to-blue-500 flex items-center justify-center">
                <span className="text-5xl">🎨</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Custom Websites</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Tailored designs that reflect your brand and engage your customers.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                <span className="text-5xl">📱</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Web Applications</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Powerful, interactive apps that solve real business problems.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/projects"
              className="text-blue-500 dark:text-blue-300 font-semibold hover:underline text-lg"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-500 dark:bg-blue-800">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Peak?</h2>
          <p className="text-xl mb-8 text-blue-50">
            Let's work together to build something great for your business.
          </p>
          <Link
            href="/contact"
            className="bg-white hover:bg-slate-100 text-blue-500 font-semibold py-3 px-8 rounded-lg transition-colors inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
