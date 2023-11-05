export default function AFooter() {
  return (
    <footer className=" body-font">
      <div className=" bg-stone-950 px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-blue-900"
          >
            <span className="ml-3 text-xl">ajsbsd.net</span>
          </a>
          <p className="mt-2 text-sm text-gray-600">
            Aaron&apos;s BSD, Linux and AI portal
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-blue-900 title-font font-medium  tracking-widest text-sm mb-3">
              About
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-blue-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-blue-900 title-font font-medium  tracking-widest text-sm mb-3">
              Debian
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-blue-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-blue-900 title-font font-medium  tracking-widest text-sm mb-3">
              Drum & Bass
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-blue-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-800">Fourth Link</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-blue-900 title-font font-medium  tracking-widest text-sm mb-3">
              OpenBSD
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-blue-800">First Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-800">Second Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-800">Third Link</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blue-800">Fourth Link</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-indigo-950">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-blue-800 text-xs">
            Copyright © 2004 - 2023 ajsbsd.net
          </p>
        </div>
      </div>
    </footer>
  );
}
