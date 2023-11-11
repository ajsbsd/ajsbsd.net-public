export default function AFooter() {
  return (
    <div className="">
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
                <a
                  className="text-gray-600 hover:text-blue-800"
                  href="https://www.upwork.com/freelancers/~01ae72fcdf0267bdbe"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-blue-800"
                  href="https://github.com/ajsbsd/ajsbsd.net-public"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-blue-800"
                  href="https://www.deviantart.com/ajsbsd"
                >
                  Deviant Art
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-blue-800"
                  href="https://westminsterdeclaration.org/"
                >
                  The Westminster Declaration
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-blue-900 title-font font-medium  tracking-widest text-sm mb-3">
              Debian
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  className="text-gray-600 hover:text-blue-800"
                  href="https://www.debian.org"
                >
                  Debian.org
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-blue-800"
                  href="https://www.debian.org/intro/why_debian"
                >
                  Reasons
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-blue-800"
                  href="https://planet.debian.org/"
                >
                  Planet
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-blue-800"
                  href="https://distrowatch.com/table.php?distribution=debian"
                >
                  Distrowatch
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-blue-900 title-font font-medium  tracking-widest text-sm mb-3">
              Drum & Bass
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  className="text-gray-600 hover:text-blue-800"
                  href="https://jungletrain.net/"
                >
                  JungleTrain.net
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-blue-800"
                  href="https://www.hospitalrecords.com/artist/s-p-y"
                >
                  NHS S.P.Y
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-blue-800"
                  href="https://amaruk.bandcamp.com/"
                >
                  AMIT
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-blue-800"
                  href="https://odysee.com/@ajsbsd:b/s.p.y-by_your_side:b?lid=76f37725279a078756bc263713b69cd8feea6062"
                >
                  Odysee Uploads
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="text-blue-900 title-font font-medium  tracking-widest text-sm mb-3">
              OpenBSD
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  className="text-gray-600 hover:text-blue-800"
                  href="https://www.openbsd.org"
                >
                  OpenBSD.org
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-blue-800"
                  href="https://www.openbsdhandbook.com/"
                >
                  Handbook
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-blue-800"
                  href="https://news.ycombinator.com/item?id=38039689"
                >
                  YC Syscal(2)
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 hover:text-blue-800"
                  href="https://www.provos.org/p/hackathon/"
                >
                  Hackathons
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-indigo-950 text-blue-800 text-xslex-1 p-4">
        Copyright © 2004 - 2023 ajsbsd.net
      </div>
    </div>
  );
}
