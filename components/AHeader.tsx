import Link from "next/link";
export default function AHeader() {
  return (
    <header className="body-font text-gray-600">
      <div className="container bg-stone-950 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center mb-4 md:mb-0">
          <span className="ml-3 text-xl text-blue-900">ajsbsd.net</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l 	flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-blue-800" href="/about">
            About
          </a>
          <a className="mr-5 hover:text-blue-800" href="/debian">
            Debian
          </a>
          <a className="mr-5 hover:text-blue-800" href="/drumandbass">
            Drum & Bass
          </a>
          <a className="mr-5 hover:text-blue-800" href="/openbsd">
            OpenBSD
          </a>
        </nav>
        <Link href="/dialogpt">
          <button className="text-blue-900 inline-flex items-center  border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
            AI Chat
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
      </div>
    </header>
  );
}
