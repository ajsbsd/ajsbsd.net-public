import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ajsbsd.net runs on Debian Bookworm",
  description:
    "Debian page of Aaron S. the Upwork Consultant and AI Enthusiast",
};

export default function DebianLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
