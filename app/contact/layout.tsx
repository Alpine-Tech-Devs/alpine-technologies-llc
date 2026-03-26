import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Alpine Technologies LLC",
  description:
    "Get in touch with Alpine Technologies LLC. We'd love to hear about your project.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
