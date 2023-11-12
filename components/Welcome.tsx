import Link from "next/link";
export default function Welcome() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">
            Privacy First
            <br />
            <p className="hidden lg:inline-block">AI Chat</p>
          </h1>
          <p className="mb-8 leading-relaxed text-gray-400">
            Experiment with AI Chat Securely and Anonymously via HuggingFace
            inference.
            <br />
            No login, no logging, nothing stored locally, nothing added to NLM
            models.
            <br />
            <br />
            Let&apos;s talk to Flan T5 from Google!
          </p>
          <div className="flex justify-center">
            <Link href="/flan">
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                Chat
              </button>
            </Link>

            <Link href="mailto:ajsbsd@gmail.com">
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <video className="float-right pr-2" width="720" height="600" controls>
            <source src="/ajsbsd.net-nov-introduction.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
