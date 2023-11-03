import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ajsbsd.net - Drum & Bass",
  description: "Drum & Bass from ajsbsd.net",
};

export default function DrumAndBassLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
