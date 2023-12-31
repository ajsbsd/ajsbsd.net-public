import Link from "next/link";

export default function AHeader() {
  return (
    <header className="body-font text-gray-600">
      <div className="bg-slate-950 flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl text-blue-900">ajsbsd.net</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l 	flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-blue-800" href="/about">
            About
          </a>
          <a className="mr-5 hover:text-blue-800" href="/debian">
            Debian
          </a>

          <a className="mr-5 hover:text-blue-800" href="/openbsd">
            OpenBSD
          </a>
          <a
            className="mr-5 hover:text-blue-800"
            href="https://www.upwork.com/freelancers/~01ae72fcdf0267bdbe"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
