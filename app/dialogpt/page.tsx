"use client";
import AHeader from "@/components/AHeader";
import AFooter from "@/components/AFooter";

import AIFirstLoad from "@/components/AIFirstLoad";
import { useState } from "react";
import Image from "next/image";

type Message = {
  id: number;
  message: string;
  response: string;
};

let count = 0;

export default function DialoGPT() {
  const [isFirstLoad, toggleIsFirstLoad] = useState(true);
  const [input, setInput] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);

  const [promptHistory, setPromptHistory] = useState<Message[]>([]);
  const [AlertMsg, setAlertMsg] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    setInput("");
    setBtnDisabled(true);
    setAlertMsg("Communicating with Evelyn, our AI");

    const url = process.env.NEXT_PUBLIC_AJSBSD_API_URL!;
    const secret = process.env.NEXT_PUBLIC_AJSBSD_API_KEY!;
    const furl = url + "/?secret=" + secret;

    let tmp: string[] = [];
    let tmpr: string[] = [];
    let tmpi: number = 0;

    console.log(tmp);

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
    if (e.target.value.length >= 2) {
      setBtnDisabled(false);
    }
  }
  function handleButton(e: any) {
    toggleIsFirstLoad(false);
  }

  return (
    <main>
      <AHeader />
      <Image
        className=""
        src="/ajsbsd.net-cyborg_reporter.png"
        width="200"
        height="200"
        alt="Evelyn the cyborg reporter"
      />

      {isFirstLoad ? (
        <AIFirstLoad />
      ) : (
        <p className="text-blue-500">
          Hello, I am Carina. <br />
        </p>
      )}

      {promptHistory?.map((k) => (
        <div key={k.id}>
          <p className="text-gray-600">{k.message}</p>
          <br />
          <p className="text-blue-500">{k.response}</p>
        </div>
      ))}
      <br />
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
      <AFooter />
    </main>
  );
}
