"use client";

import ZephyrIntro from "@/components/ZephyrIntro";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type Message = {
  id: number;
  message: string;
  response: string;
};

const FLAN_PROMPTS: string[] = [
  "Know any recopies for dinner tonight?",
  "How I drive from Orlando to Atlanta?",
];

let count = 0;

const MODEL_PERSONA = "Zephyr";

export default function Zephyr() {
  const [isFirstLoad, toggleIsFirstLoad] = useState(true);
  const [input, setInput] = useState("");
  const [promptHistory, setPromptHistory] = useState<Message[]>([]);
  const [AlertMsg, setAlertMsg] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [promptHistory]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    if (input.length < 2) {
      return;
    }
    setInput("");
    setAlertMsg(`Communicating with ${MODEL_PERSONA}, our AI`);

    // add to .env.local, make new api route
    const url = process.env.NEXT_PUBLIC_AJSBSD_API_URL!;
    const secret = process.env.NEXT_PUBLIC_AJSBSD_API_KEY!;
    const furl = url + "/?secret=" + secret;

    // Dialogpt did not seem to like this...
    let tmp: string[] = [];
    promptHistory.forEach((p) => {
      tmp.push(p.message);
    });
    let tmpr: string[] = [];
    promptHistory.forEach((r) => {
      tmpr.push(r.response);
    });
    //let tmpi: number = 0;

    const fsend = {
      data: input,
      past_user_inputs: tmp,
      past_user_responses: tmpr,
    };

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
  }
  function handleButton(e: any) {
    toggleIsFirstLoad(false);
  }

  function handlePromptChange(e: any) {
    setInput(e.target.outerText);
    console.log(e.target.outerText);
  }

  return (
    <div className="fullscreen">
      <div className="h-4/6 border-2 mt-2 mr-2 ml-2 bg-slate-900 border-slate-800 over overflow-y-auto">
        {isFirstLoad ? (
          <ZephyrIntro />
        ) : (
          <p className="text-blue-500">
            💬 Hello, I am {MODEL_PERSONA}.{" "}
            <hr className="col-span-7  border-slate-800" />
          </p>
        )}
        {promptHistory?.map((k) => (
          <div key={k.id} className="grid grid-cols-7 gap-3">
            <div className="col-span-1">
              <p className="text-gray-600 text-right">👤</p>
            </div>
            <div className="col-span-6">
              <p className=" text-gray-600">{k.message}</p>
            </div>
            <div className="col-span-1">
              <p className=" text-blue-500 text-right">AI 💬</p>
            </div>
            <div className="col-span-6 bg-slate-700 rounded mr-6">
              <p
                className=" text-blue-500 ml-2 mt-2 mb-2"
                style={{ whiteSpace: "pre-line" }}
              >
                {k.response}
              </p>
            </div>
            <hr className="col-span-7 border-slate-800" />
          </div>
        ))}
        <div ref={bottomRef}> </div>
      </div>
      <form className="text-slate-400 mt-1" onSubmit={handleSubmit}>
        <input
          className="border-slate-500 border-2 rounded bg-slate-800 "
          size={150}
          value={input}
          onChange={handleInputChange}
          placeholder="🌟Ready to get started? Type your first message! "
        />

        <button
          className="ml-5 mt-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={handleButton}
          type="submit"
        >
          Speak to AI
        </button>
        <p className="text-lg text-center text-rose-500">{AlertMsg}</p>
      </form>
      <div className="columns-2 text-xs">
        {FLAN_PROMPTS.map((f) => (
          <div
            className="mb-2 hover:text-rose-500"
            key={f}
            onClick={handlePromptChange}
          >
            {f}
          </div>
        ))}
      </div>
      <p className="text-xs text-center mt-5">
        (c) 2004-2009 <Link href="/">ajsbsd.net</Link>
      </p>
    </div>
  );
}
