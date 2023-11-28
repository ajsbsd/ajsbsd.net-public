import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";

export default function ZephyrIntro() {
  return (
    <div className="text-md text-gray-400">
      Currently inferring from{" "}
      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href="https://huggingface.co/HuggingFaceH4/zephyr-7b-beta"
      >
        Zephyr 7B β over at HuggingFace
      </Link>
      <br />
      <br />
      Zephyr is a series of language models that are trained to act as helpful
      assistants. Zephyr-7B-β is the second model in the series, and is a
      fine-tuned version of{" "}
      <Link
        href="https://huggingface.co/mistralai/Mistral-7B-v0.1"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        mistralai/Mistral-7B-v0.1&nbsp;
      </Link>
      that was trained on on a mix of publicly available, synthetic datasets
      using{" "}
      <Link
        href="https://arxiv.org/abs/2305.18290"
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        Direct Preference Optimization.
      </Link>
      <br />
      <br />
      🔥Nothing is stored or trained, refresh and the chat is gone.🔥
      <br />
      <br />
    </div>
  );
}
