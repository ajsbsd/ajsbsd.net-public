import Link from "next/link";
import Image from "next/image";
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
      🔥Nothing is stored or trained, refresh and the chat is gone.🔥
      <Image src="/flan-t5.png" width="720" height="369" alt="Google Flan-T5" />
      🌟 Ready to get started? Type your first message, and let&apos;s chat!
    </div>
  );
}
