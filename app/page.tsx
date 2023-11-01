import AMenu from "@/components/AMenu";
import AIFirstLoad from "@/components/AIFirstLoad";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row">
        <div className="bg-slate-400 grow text-3xl text-green-300 font-serif">
          ajsbsd.net-public AI Chatbot v0.2
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-1/5 bg-slate-700">
          <AMenu />
        </div>
        <div className="basis-4/5 bg-slate-900">
          <div className="grid-cols-1">
            <AIFirstLoad />
          </div>
        </div>
      </div>
    </main>
  );
}
