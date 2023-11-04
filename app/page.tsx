import AIFirstLoad from "@/components/AIFirstLoad";
import AHeader from "@/components/AHeader";
import AFooter from "@/components/AFooter";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <AHeader />
      <div className="divider"></div>
      <AIFirstLoad />
      <div className="divider"></div>
      <AFooter />
    </main>
  );
}
