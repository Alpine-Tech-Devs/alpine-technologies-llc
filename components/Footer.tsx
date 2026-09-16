import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <Image
                src="/alpine-logo.png"
                alt="Alpine Technologies Logo"
                width={40}
                height={40}
                sizes="(max-width: 640px) 32px, 40px"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain flex-shrink-0"
              />
              <h3 className="font-bold text-lg bg-gradient-to-r from-blue-500 to-slate-900 dark:from-blue-300 dark:to-slate-100 bg-clip-text text-transparent">Alpine Technologies LLC</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Modern websites and apps for small businesses. Owned by software engineers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
              Let's discuss your next project
            </p>
            <Link
              href="/contact"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium text-sm"
            >
              Contact us →
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
          <p className="text-center text-slate-600 dark:text-slate-400 text-sm">
            © {currentYear} Alpine Technologies LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
