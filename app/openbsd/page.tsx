import AMenu from "@/components/AMenu";
import Link from "next/link";

export default function OpenBSD() {
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
            <video
              className="float-right ml-3 mb-3"
              width="480"
              height="360"
              controls
            >
              <source src="/ajsbsd.net-openbsd.mp4" type="video/mp4" />
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
              <br />
              <Link
                href="https://www.openbsd.org"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                OpenBSD
              </Link>{" "}
              is an open-source, multi-platform operating system that is based
              on the 4.4BSD Unix-like operating system. It is known for its
              strong focus on security, portability, correctness, and integrated
              cryptography. Here are some key points about{" "}
              <Link
                href="https://www.openbsd.org"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                OpenBSD.
              </Link>
              <br />
              <br />
              Security Emphasis:&nbsp;&nbsp;
              <Link
                href="https://www.openbsd.org"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                OpenBSD
              </Link>{" "}
              is well-known for its commitment to proactive security. The
              project&apos;s developers actively work to identify and fix
              security vulnerabilities, resulting in a strong track record of
              security. The quote you mentioned, &quot;Only two remote holes in
              the default install, in a heck of a long time!&quot; is often
              cited as an example of{" "}
              <Link
                href="https://www.openbsd.org"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                OpenBSD
              </Link>
              &apos;s security focus.
              <br />
              <br />
              Integrated Cryptography:&nbsp;&nbsp;
              <Link
                href="https://www.openbsd.org"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                OpenBSD
              </Link>{" "}
              includes built-in cryptographic features and libraries, making it
              suitable for security-sensitive applications. The project has also
              contributed to the development of cryptographic software like{" "}
              <Link
                href="https://www.openssh.com"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                OpenSSH
              </Link>
              , which is widely used for secure remote access.
              <br />
              <br />
              Portability:&nbsp;&nbsp;
              <Link
                href="https://www.openbsd.org"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                OpenBSD
              </Link>{" "}
              is designed to be highly portable across different hardware
              platforms. This means that it can run on a variety of hardware
              architectures, making it a versatile choice for different types of
              systems.
              <br />
              <br />
              Standardization and Correctness: &nbsp;The project emphasizes
              adherence to standards and correctness in its codebase. This
              approach helps ensure that the operating system behaves
              predictably and reliably.
              <br />
              <br />
              Volunteer Development:&nbsp;&nbsp;
              <Link
                href="https://www.openbsd.org"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                OpenBSD
              </Link>{" "}
              is developed entirely by volunteers who contribute their time and
              expertise to the project. These volunteers work on various aspects
              of the operating system, including kernel development, userland
              utilities, and security enhancements.
              <br />
              <br />
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
