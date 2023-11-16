import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css";

export default function FlanT5() {
  return (
    <div className="text-md text-gray-400">
      Currently inferring from{" "}
      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href="https://huggingface.co/ajsbsd/flan-t5-base-openbsd-faq"
      >
        FLAN-T5 large
      </Link>
      &nbsp;with&nbsp;
      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href="https://www.openbsd.org"
      >
        OpenBSD
      </Link>{" "}
      Faq over at HuggingFace
      <br />
      <br />
      🔥Nothing is stored or trained, refresh and the chat is gone.🔥
      <br />
      <br />
      Flan-T5 is different than a traditional chat bot. You can click example
      queries on the bottom of the page. For example you can translate with:
      <br />
      <br />
      Translate to French: What a nice AI you have here ajsbsd.net!
      <br />
      <br />
      <em>Quelle ai d&apos;AI vous avez ici ajsbsd.net!</em>
      <br />
      <br />
      Summarize: Finetuning language models on a collection of datasets phrased
      as instructions has been shown to improve model performance and
      generalization to unseen tasks. In this paper we explore instruction
      finetuning with a particular focus on (1) scaling the number of tasks, (2)
      scaling the model size, and (3) finetuning on chain-of-thought data.
      <br />
      <br />
      <em>
        We explore instruction finetuning for pretrained language models with a
        particular focus on scaling the number of tasks, scaling the model size,
        and scaling the chain-of-thought data.
      </em>
      <br />
      <br />
      <a
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href="https://arxiv.org/abs/2210.11416"
      >
        About Scaling Instruction-Finetuned Language Models
      </a>
      <br />
      Modek Copyright: Creative Commons Attribution 4.0 International
      <br />
      <br />
      🌟Ready to get started? Type your first message!
    </div>
  );
}
