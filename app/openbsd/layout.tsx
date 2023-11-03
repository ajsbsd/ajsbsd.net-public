import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ajsbsd.net - OpenBSD donor, user and evangelist since 1996",
  description: "homepage of Aaron S. the Upwork Consultant and AI Enthusiast",
};

export default function OpenBSDLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
