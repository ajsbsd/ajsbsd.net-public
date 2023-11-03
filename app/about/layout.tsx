import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ajsbsd.net - About",
  description: "about page of Aaron S. the Upwork Consultant and AI Enthusiast",
};

export default function AboutLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
