import Link from "next/link";
import "@/app/globals.css";

export default function AIFirstLoad() {
  return (
    <div className="text-md text-gray-400">
      Currently inferring from{" "}
      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href="https://huggingface.co/facebook/blenderbot-400M-distil"
      >
        facebook/blenderbot-400M-distill over at HuggingFace
      </Link>
      <br />
      <br />
      🔥Nothing is stored or trained, refresh and the chat is gone.🔥
      <br />
      <br />
      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href="https://huggingface.co/facebook/blenderbot-400M-distill"
      >
        From Model.card:
      </Link>
      <br />
      <br />
      Abstract Building open-domain chatbots is a challenging area for machine
      learning research. While prior work has shown that scaling neural models
      in the number of parameters and the size of the data they are trained on
      gives improved results, we show that other ingredients are important for a
      high-performing chatbot. Good conversation requires a number of skills
      that an expert conversationalist blends in a seamless way: providing
      engaging talking points and listening to their partners, both asking and
      answering questions, and displaying knowledge, empathy and personality
      appropriately, depending on the situation. We show that large scale models
      can learn these skills when given appropriate training data and choice of
      generation strategy. We build variants of these recipes with 90M, 2.7B and
      9.4B parameter neural models, and make our models and code publicly
      available. Human evaluations show our best models are superior to existing
      approaches in multi-turn dialogue in terms of engagingness and humanness
      measurements. We then discuss the limitations of this work by analyzing
      failure cases of our models.
      <br />
      <br />
      🌟 Ready to get started? Type your first message, and let&apos;s chat!
      <br />
    </div>
  );
}
