import AMenu from "@/components/AMenu";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row font-">
        <div className="bg-slate-400 grow text-3xl text-green-300 font-serif">
          ajsbsd.net-public AI Chatbot v0.2
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-1/5 bg-slate-700">
          <AMenu />
        </div>
        <div className="basis-4/5 bg-slate-900">
          <h3>Content</h3>
          <p>Let the fun begin!</p>
        </div>
      </div>
    </main>
  );
}
