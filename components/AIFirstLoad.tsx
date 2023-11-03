import Link from "next/link";
import "@/app/globals.css";

export default function AIFirstLoad() {
  return (
    <div className="text-md">
      <p className="bg-black text-xl">
        👋👋👋Welcome to ajsbsd.net&apos;s AI Chatbot!👋👋👋
      </p>
      <video className="float-left pr-2" width="480" height="360" controls>
        <source src="/ajsbsd.net-cyborg_reporter.mp4" type="video/mp4" />
      </video>
      Currently inferring from{" "}
      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href="https://huggingface.co/microsoft/DialoGPT-large"
      >
        microsoft/DialoGPT-large over at HuggingFace
      </Link>
      <br />
      <br />
      🔥🔥🔥 Nothing is stored or trained, refresh and the chat is gone.
      <br />
      <br />
      From Model.card:
      <br />
      <br />
      A State-of-the-Art Large-scale Pretrained Response generation model
      (DialoGPT) DialoGPT is a SOTA large-scale pretrained dialogue response
      generation model for multiturn conversations.
      <br />
      The human evaluation results indicate that the response generated from
      DialoGPT is comparable to human response quality under a single-turn
      conversation Turing test. <br />
      The model is trained on 147M multi-turn dialogue from Reddit discussion
      thread.
      <br />
      <br />
      Multi-turn generation examples from an interactive environment.
      <br />
      <br />
      Please find the information about preprocessing, training and full details
      of the DialoGPT in the{" "}
      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href="https://github.com/microsoft/DialoGPT"
      >
        original DialoGPT repository
      </Link>
      <br />
      ArXiv paper:{" "}
      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href="https://arxiv.org/abs/1911.00536"
      >
        https://arxiv.org/abs/1911.00536
      </Link>
      <br />
      <br />
      🌟 Ready to get started? Type your first message, and let&apos;s chat!
      <br />
    </div>
  );
}
