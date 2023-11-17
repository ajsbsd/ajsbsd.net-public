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
      <br />
      <br />
      🌟Ready to get started? Type your first message!
    </div>
  );
}
