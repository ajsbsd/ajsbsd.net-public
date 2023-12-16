import AHeader from "@/components/AHeader";
import AFooter from "@/components/AFooter";
import Link from "next/link";

export default function OpenBSD() {
  return (
    <div>
      <AHeader />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">
              OpenBSD
              <br />
              <p className="hidden lg:inline-block">Donor</p>
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400">
              <Link
                href="https://www.openbsd.org"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                OpenBSD
              </Link>{" "}
              is an open-source, multi-platform operating system that is based
              on 4.4BSD. It is known for its strong focus on security,
              portability, correctness, and integrated cryptography.
            </p>
            <p className="mb-8 leading-relaxed text-gray-400">
              &quot;Only two remote holes in the default install, in a heck of a
              long time!&quot; -{" "}
              <Link
                href="https://www.openbsd.org"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                OpenBSD&apos;s&nbsp;
              </Link>
              famous quote
            </p>
            <div className="flex justify-center">
              <Link href="mailto:aaron@ajsbsd.net">
                <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <video
              className="float-right pr-2"
              width="480"
              height="480"
              controls
            >
              <source src="/ajsbsd.net-openbsd-nov.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <AFooter />
    </div>
  );
}
