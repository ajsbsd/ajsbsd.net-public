import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ajsbsd.net - DialoGPT",
  description: "ajsbsd.net - Flan-t5-large - AI Chatbot",
};

export default function Flan({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
