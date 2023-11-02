"use client";
import AMenu from "@/components/AMenu";
import AIFirstLoad from "@/components/AIFirstLoad";
import { useState } from "react";

type Message = {
  id: number;
  message: string;
};

let promptHistory: Message[] = [];
//promptHistory[0] = { id: 0, message: "foo" };
let count = 0;

export default function Home() {
  const [isFirstLoad, toggleIsFirstLoad] = useState(true);
  const [input, setInput] = useState("");
  //const [promptHistory, setPromptHistory] = useState([""]);

  function handleSubmit(e: any) {
    e.preventDefault();
    promptHistory.push({ id: count, message: input });
    count++;
    setInput("");
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
          <div className="basis-1/5 bg-slate-700 text-slate-400">
            <AMenu />
          </div>
          <div className="basis-4/5 bg-slate-900 text-slate-400">
            {isFirstLoad ? <AIFirstLoad /> : ""}
            {promptHistory
              ? promptHistory.map((k) => (
                  <div key={k.id}>
                    {k.id} {k.message}
                  </div>
                ))
              : ""}
            <form className="text-slate-400 mt-1" onSubmit={handleSubmit}>
              <input
                className="border-slate-500 border-2 rounded bg-slate-800 "
                size={100}
                value={input}
                onChange={handleInputChange}
                placeholder="Welcome to AI, ask away!"
              />
              <br />
              <button
                className="text-slate-900 bg-sky-400 border-2 rounded border-slate-500 mt-1 p-1 hover:text-slate-600"
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
