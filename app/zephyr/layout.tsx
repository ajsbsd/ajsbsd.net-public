import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ajsbsd.net - Zephyr 7B - AI Chatbot",
  description: "ajsbsd.net - Zephyr 7B - AI Chatbot",
};

export default function Flan({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
