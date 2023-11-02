"use client";
import AMenu from "@/components/AMenu";
import AIFirstLoad from "@/components/AIFirstLoad";
import { useState } from "react";

export default function Home() {
  const [isFirstLoad, toggleIsFirstLoad] = useState(true);
  const [input, setInput] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
  }
  //function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
  function handleInputChange(e: any) {
    setInput(e.target.value);
  }
  return (
    <main>
      <div className="flex flex-col h-screen">
        <div className="flex bg-slate-400 text-3xl text-orange font-serif">
          ajsbsd.net-public AI Chatbot v0.2
        </div>
        <div className="flex flex-1 bg-gray-100">
          <div className="basis-1/5 bg-slate-700">
            <AMenu />
          </div>
          <div className="basis-4/5 bg-slate-900">
            {isFirstLoad ? <AIFirstLoad /> : ""}

            <form className="text-black" onSubmit={handleSubmit}>
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Welcome to AI, ask away!"
              />
              <br />
              <button
                className="text-white"
                onClick={() => toggleIsFirstLoad(false)}
                color="tomato"
                type="submit"
              >
                Speak to AI
              </button>
            </form>
          </div>
        </div>
        <div className="flex bg-blue-100 text-black">
          (c) 2004-2023 ajsbsd.net
        </div>
      </div>
    </main>
  );
}
