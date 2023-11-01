import Link from "next/link";
import Image from "next/image";

export default function AMenu() {
  return (
    <ul>
      <li>
        <Link href="/">AI Chat</Link>
      </li>
      <li>
        <Link href="/aiassistant">🌟AI Assistants🌟</Link>
      </li>
      <li>
        <Link href="/debian">Debian</Link>
      </li>
      <li>
        <Link href="/drumandbass">Drum & Bass</Link>
      </li>
      <li>
        <Link href="/openbsd">OpenBSD</Link>
      </li>
      <li>
        <Link href="https://www.upwork.com/freelancers/~01ae72fcdf0267bdbe">
          Resume
        </Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="https://westminsterdeclaration.org/">
          The Westminster Declaration
          <Image
            width="25"
            height="25"
            src="/the_westminster_declaration.png"
            alt="The Westminster Declaration"
          />
        </Link>
      </li>
    </ul>
  );
}
