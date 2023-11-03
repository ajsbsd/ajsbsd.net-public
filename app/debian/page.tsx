import AMenu from "@/components/AMenu";
import Link from "next/link";

export default function Debian() {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <div className="flex bg-slate-400 text-3xl text-orange font-serif">
          ajsbsd.net-public AI Chatbot v0.2
        </div>
        <div className="flex flex-1 bg-gray-100">
          <div className="basis-1/5 bg-slate-700 text-slate-400">
            <AMenu />
          </div>
          <div className="basis-4/5 bg-slate-900 text-slate-400">
            <video className="float-right" width="480" height="360" controls>
              <source src="/ajsbsd.net-debian.mp4" type="video/mp4" />
            </video>
            <p className="p-2">
              <Link
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                href="https://ajsbsd.net"
              >
                ajsbsd.net
              </Link>{" "}
              has an AI Chatbot and also provides an overview of Aaron&apos;s
              professional experience, skills, and a positive recommendation.
              <br />
            </p>
            <p className="p-2">
              <Link
                href="https://www.debian.org"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Debian
              </Link>{" "}
              is a versatile and widely respected operating system that offers
              numerous benefits for users, developers, and enterprise
              environments. Here are some of the key reasons to consider using
              Debian in these different contexts.
              <br />
              <br />
              <Link
                href="https://www.debian.org"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Debian
              </Link>{" "}
              is committed to being 100% free and open source, allowing anyone
              to use, modify, and distribute it without any cost.
              <br />
              <br />
              <Link
                href="https://www.debian.org"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Debian
              </Link>{" "}
              is known for its stability and security. It provides regular
              security updates for packages, making it a reliable choice for
              everyday use.
              <br />
              <br />
              <Link
                href="https://www.debian.org"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Debian
              </Link>{" "}
              offers extensive hardware support, with most hardware being
              supported by the Linux kernel. Proprietary drivers are also
              available when necessary.
              <br />
              <br />
              <Link
                href="https://www.debian.org"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Debian
              </Link>{" "}
              provides a flexible installation process. Users can choose between
              the Live CD with a user-friendly installer or the traditional
              Debian installer with advanced options. Debian makes it easy to
              keep the operating system up-to-date, whether it&apos;s updating a
              single package or upgrading to a new release.
            </p>
          </div>
        </div>
        <div className="flex bg-blue-100 text-black">
          (c) 2004-2023 ajsbsd.net
        </div>
      </div>
    </div>
  );
}
