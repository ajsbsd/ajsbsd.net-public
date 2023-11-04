import Link from "next/link";
import Image from "next/image";

export default function AMenu() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/dialogpt">🌟DialoGPT AI Chat 🌟</Link>
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
          Upwork Resume
        </Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <div className="flex justify-between">
          <Link href="https://westminsterdeclaration.org/">
            The Westminster Declaration
          </Link>
          <Link href="https://westminsterdeclaration.org/">
            <Image
              width="25"
              height="25"
              src="/the_westminster_declaration.png"
              alt="The Westminster Declaration"
            />
          </Link>
        </div>
      </li>
    </ul>
  );
}
