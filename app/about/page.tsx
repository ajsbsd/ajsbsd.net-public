import AMenu from "@/components/AMenu";
import Link from "next/link";

export default function DrumAndBass() {
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
            <video className="float-right" width="400" height="400" controls>
              <source src="/ajsbsd.net-talking-about.mp4" type="video/mp4" />
            </video>
            <p className="pr-2 pl-2">
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
              • Scripting and automation of Linux based administration tasks
              using Perl and Bash.
              <br />
              • Migration of web-servers from physical to cloud based solutions.
              <br />• Provide end level support for certain clients.
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
