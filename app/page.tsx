"use client";
import AMenu from "@/components/AMenu";
import AIFirstLoad from "@/components/AIFirstLoad";
import { useState } from "react";

type Message = {
  id: number;
  message: string;
  response: string;
};

//let promptHistory: Message[] = [];
//promptHistory[0] = { id: 0, message: "foo" };
let count = 0;

export default function Home() {
  const [isFirstLoad, toggleIsFirstLoad] = useState(true);
  const [input, setInput] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  //const [promptHistory, setPromptHistory] = useState<Message[]>([
  //  { id: 0, message: "Start", response: "None yet" },
  //]);
  const [promptHistory, setPromptHistory] = useState<Message[]>([]);
  const [AlertMsg, setAlertMsg] = useState("");

  //const [promptHistory, setPromptHistory] = useState([""]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setInput("");
    setBtnDisabled(true);
    setAlertMsg("Communicating with Evelyn, our AI");

    const url = process.env.NEXT_PUBLIC_AJSBSD_API_URL!;
    const secret = process.env.NEXT_PUBLIC_AJSBSD_API_KEY!;
    const furl = url + "/?secret=" + secret;
    const fsend = { data: input };

    const response = await fetch(furl, {
      method: "POST",
      body: JSON.stringify(fsend),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await response.json();
    setPromptHistory((o) => [
      ...o,

      {
        id: count,
        message: input,
        response: body.hf_result,
      },
    ]);
    count++;
    setAlertMsg("Your turn to talk!");
  }
  //function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
  function handleInputChange(e: any) {
    setInput(e.target.value);
    if (e.target.value.length > 10) {
      setBtnDisabled(false);
      setAlertMsg("Press Send!");
    } else {
      setAlertMsg("Please type at least 10 characters...");
    }
  }
  function handleButton(e: any) {
    toggleIsFirstLoad(false);
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
            {promptHistory?.map((k) => (
              <div key={k.id}>
                <p className="text-red-500">
                  Me: {k.id} {k.message}
                </p>
                <p className="text-blue-500">AI: {k.response}</p>
              </div>
            ))}
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
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                onClick={handleButton}
                color="tomato"
                type="submit"
                disabled={btnDisabled}
              >
                Speak to AI
              </button>
              <p className="text-lg">{AlertMsg}</p>
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
