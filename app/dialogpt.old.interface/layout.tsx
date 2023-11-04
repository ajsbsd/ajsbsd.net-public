import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ajsbsd.net - DialoGPT",
  description: "ajsbsd.net - DialoGPT - AI Chatbot",
};

export default function DialoGPT({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
