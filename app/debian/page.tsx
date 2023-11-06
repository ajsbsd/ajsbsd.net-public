import AHeader from "@/components/AHeader";
import AFooter from "@/components/AFooter";
import Link from "next/link";

export default function Debian() {
  return (
    <div>
      <AHeader />
      <div className="pt-3 pb-3 pl-3">
        <video className="float-right" width="300" height="300" controls>
          <source src="/ajsbsd.net-debian.mp4" type="video/mp4" />
        </video>
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
          href="https://www.debian.org"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Debian
        </Link>{" "}
        is a versatile and widely respected operating system that offers
        numerous benefits for users, developers, and enterprise environments.
        Here are some of the key reasons to consider using Debian in these
        different contexts.
        <br />
        <br />
        <Link
          href="https://www.debian.org"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Debian
        </Link>{" "}
        is committed to being 100% free and open source, allowing anyone to use,
        modify, and distribute it without any cost.
        <br />
        <br />
        <Link
          href="https://www.debian.org"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Debian
        </Link>{" "}
        is known for its stability and security. It provides regular security
        updates for packages, making it a reliable choice for everyday use.
        <br />
        <br />
        <Link
          href="https://www.debian.org"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Debian
        </Link>{" "}
        offers extensive hardware support, with most hardware being supported by
        the Linux kernel. Proprietary drivers are also available when necessary.
        <br />
        <br />
        <Link
          href="https://www.debian.org"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Debian
        </Link>{" "}
        provides a flexible installation process. Users can choose between the
        Live CD with a user-friendly installer or the traditional Debian
        installer with advanced options. Debian makes it easy to keep the
        operating system up-to-date, whether it&apos;s updating a single package
        or upgrading to a new release.
      </div>
      <AFooter />
    </div>
  );
}
