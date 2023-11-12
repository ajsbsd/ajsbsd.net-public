import Link from "next/link";
import "@/app/globals.css";

export default function FlanT5() {
  return (
    <div className="text-md text-gray-400">
      Currently inferring from{" "}
      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href="https://huggingface.co/google/flan-t5-large"
      >
        FLAN-T5 large over at HuggingFace
      </Link>
      <br />
      <br />
      🔥Nothing is stored or trained, refresh and the chat is gone.🔥
      <br />
      <br />
      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href="https://huggingface.co/google/flan-t5-large"
      >
        Model Card
      </Link>
      <br />
      <br />
      The Flan-T5 models are a bit different. Here are some example prompts to
      try out:
      <br />
      <br />
      Translate to German: Large language models are great.
      <br />
      Please answer to the following question. Who is going to be the next
      Heisman Trophy winner?
      <br />
      Q: Can Taylor Swift have a conversation with George Mason? Give the
      rationale before answering.
      <br />
      Please answer the following question. What is the boiling point of Amonia?
      <br />
      Answer the following yes/no question. Can you write a whole Haiku on
      Threads?
      <br />
      Answer the following yes/no question by reasoning step-by-step. Can you
      write a whole Haiku in a single Thread?
      <br />
      Q: ( False or not False or False ) is? A: Let&apos;s think step by step
      <br />
      The square root of x is the cube root of y. What is y to the power of 2,
      if x = 4?
      <br />
      Premise: At my age you will probably have learnt one lesson. Hypothesis:
      It&apos;s not certain how many lessons you&apos;ll learn by your thirties.
      Does the premise entail the hypothesis?
      <br />
      <br />
      🌟 Ready to get started? Type your first message, and let&apos;s chat!
      <br />
    </div>
  );
}
