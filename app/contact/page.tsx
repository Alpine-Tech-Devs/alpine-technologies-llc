"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        setSubmitError(payload?.error ?? "Something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-50 to-slate-50 dark:from-slate-900 dark:to-slate-800 px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-slate-900 dark:from-blue-300 dark:to-slate-100 bg-clip-text text-transparent">Let's Talk</h1>
          <p className="text-xl text-slate-700 dark:text-slate-300">
            Ready to bring your project to life? Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-2xl">📧</span> Email
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                <a href="mailto:contactus@alpinetechdevs.com" className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
                  contactus@alpinetechdevs.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-2xl">📍</span> Location
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Maine, USA
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8 border border-slate-200 dark:border-slate-800">
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>

            {submitted && (
              <div className="mb-8 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg">
                <p className="text-green-800 dark:text-green-200 font-semibold">
                  ✓ Thank you! We've received your message and will get back to you soon.
                </p>
              </div>
            )}

            {submitError && (
              <div className="mb-8 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg">
                <p className="text-red-800 dark:text-red-200 font-semibold">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="you@company.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 resize-none"
                  placeholder="Tell us about your project and what you're looking to build..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 dark:bg-blue-400 dark:hover:bg-blue-500 dark:disabled:bg-blue-200 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                * indicates required field
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: "What's your typical project timeline?",
                a: "It depends on the scope. Small websites can take 2-4 weeks, while larger applications may take several months. We'll provide a timeline estimate during the discovery phase.",
              },
              {
                q: "Do you have a minimum project budget?",
                a: "We work with projects of various sizes. We'll discuss your budget during our initial consultation to see if we're a good fit.",
              },
              {
                q: "Can you help with domains and hosting?",
                a: "Yes! We can recommend hosting providers and help you set everything up.",
              },
              {
                q: "Do you provide ongoing support after launch?",
                a: "Absolutely. We offer maintenance and support packages to keep your project running smoothly and handle updates as needed.",
              },
              {
                q: "What if I need to make changes after launch?",
                a: "We're always available for updates and enhancements. We'll work with you to prioritize changes and keep your site current.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700"
              >
                <h3 className="text-xl font-semibold mb-3">{item.q}</h3>
                <p className="text-slate-700 dark:text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
