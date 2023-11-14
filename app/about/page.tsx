import AHeader from "@/components/AHeader";
import AFooter from "@/components/AFooter";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-gray-900 text-gray-400  ">
      <AHeader />
      <div className="flex columns-2">
        <div>
          <video className="pr-3" width="320" height="320" controls>
            <source src="/ajsbsd.net-about-november.mp4" type="video/mp4" />
          </video>
        </div>
        <div>
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
          It highlights his expertise in Linux/Unix, cloud engineering, and
          system administration.
          <br />
          <b>Linux/Unix DevOps Cloud Engineer</b>
          <br />
          Independent Contractor April 2009 - Current
          <br />
          • Provide Linux and application support for a variety of clients
          around the world.
          <br />
          • Develop a custom SugarCRM, Xero Accounting, Concrete5 web store
          using PHP and MySQL.
          <br />
          • Daily maintenance and security auditing of around 30 machines.
          <br />
          • Build complex cloud based scalable solutions on Amazon EC2.
          <br />
          • Scripting and automation of Linux based administration tasks using
          Perl and Bash.
          <br />
          • Migration of web-servers from physical to cloud based solutions.
          <br />• Provide end level support for certain clients.
        </div>
      </div>
      <AFooter />
    </div>
  );
}
