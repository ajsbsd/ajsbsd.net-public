import Link from "next/link";
export default function Welcome() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">
            Privact First
            <br />
            <p className="hidden lg:inline-block">AI Chat</p>
          </h1>
          <p className="mb-8 leading-relaxed text-gray-400">
            All done via HuggingFace inference.
            <br />
            No login, no logging, nothing stored locally, nothing added to NLM
            models.
          </p>
          <div className="flex justify-center">
            <Link href="/dialogpt">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Chat now
              </button>
            </Link>

            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <video className="float-right pr-2" width="720" height="600" controls>
            <source src="/ajsbsd.net-cyborg_reporter.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
