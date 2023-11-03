import AMenu from "@/components/AMenu";
import Link from "next/link";

export default function DrumAndBass() {
  return (
    <section>
      <div className="flex flex-col h-screen">
        <div className="flex bg-slate-400 text-3xl text-orange font-serif">
          ajsbsd.net-public AI Chatbot v0.2
        </div>
        <div className="flex flex-1 bg-gray-100">
          <div className="basis-1/5 bg-slate-700 text-slate-400">
            <AMenu />
          </div>
          <div className="basis-4/5 bg-slate-900 text-slate-400">
            <p className="p-2">
              <Link
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                href="https://ajsbsd.net"
              >
                ajsbsd.net
              </Link>{" "}
              has an AI Chatbot and also provides an overview of Aaron&apos;s
              professional experience, skills, and a positive recommendation.
            </p>
            <div className="text-green-500 text-4x">
              Welcome to our Drum and Bass Section
            </div>
            <br />
            <div className="text-orange-500 text-2xl">
              Dedicated to the timeless genre of older drum & bass music.
            </div>
            <br />
            We celebrate the classic sounds of drum & bass and its rich history.
            Our mission is to provide a platform where enthusiasts can explore,
            appreciate, and relive the nostalgic beats that defined an era.
            <br />
            <br />
            Here, you&apos;ll find a curated collection of tracks, DJ mixes, and
            articles that pay homage to the pioneers of drum & bass. We take you
            on a journey back to the roots of this electronic music genre,
            showcasing the artists and tracks that continue to inspire
            generations.
            <br />
            <br />
            We are grateful to <Link href="https://odysee.com">
              Odysee.com
            </Link>{" "}
            for hosting our content, allowing us to share our passion for older
            drum & bass with a global audience. Join us in celebrating the beats
            that shaped a genre and continue to move dancefloors around the
            world. Experience the rhythm, embrace the nostalgia, and let the
            music take you back to the golden era of drum & bass here.
            <br />
            <div className="grid grid-cols-3">
              <div>
                Evol Intent, Infiltrata - Burn Rate
                <br />
                <iframe
                  id="odysee-iframe"
                  width={320}
                  height={320}
                  src="https://odysee.com/$/embed/@ajsbsd:b/Evol_Intent-and-Infiltrata-Burn_Rate:8?r=H2aBnBkPDHe17RSBGtzXkJsXc
yq9haAT"
                />
              </div>
              <div>
                The Panacea - Reality - 1997
                <br />
                <iframe
                  id="odysee-iframe"
                  width={320}
                  height={320}
                  src="https://odysee.com/$/embed/@ajsbsd:b/The_Panacea-Reality-1997:5?r=H2aBnBkPDHe17RSBGtzXkJsXcyq9haAT"
                />
              </div>
              <div>
                Artificial Intelligence - Movin On - 2k5
                <br />
                <iframe
                  id="odysee-iframe"
                  width={320}
                  height={320}
                  src="https://odysee.com/$/embed/@ajsbsd:b/Artificial_Intelligence-Movin_On-2k5:d?r=H2aBnBkPDHe17RSBGtzXkJsXc
yq9haAT"
                />
              </div>
              <div>
                Artificial Intelligence - Bloodlines - 2k6
                <br />
                <iframe
                  id="odysee-iframe"
                  width={320}
                  height={320}
                  src="https://odysee.com/$/embed/@ajsbsd:b/Artificial_Intelligence-Bloodlines-2k6:0?r=H2aBnBkPDHe17RSBGtzXkJs
              Xcyq9haAT"
                />
              </div>
              <div>
                The Panacea - Tron - CHROME6 - 2k10
                <br />
                <iframe
                  id="odysee-iframe"
                  width={320}
                  height={320}
                  src="https://odysee.com/$/embed/@ajsbsd:b/01-the_panacea-tron.mp3:2?r=H2aBnBkPDHe17RSBGtzXkJsXcyq9haAT"
                />
              </div>
              <div>
                DJ G-I-S - Zuruck Zu De Schatten - (the Panacea Remix)
                <br />
                <iframe
                  id="odysee-iframe"
                  width={320}
                  height={320}
                  src="https://odysee.com/$/embed/@ajsbsd:b/dj-g-i-s_-_zuruck_zu_de_schatten_-_(the_panacea_remix):4?r=H2aBnBk
  PDHe17RSBGtzXkJsXcyq9haAT"
                />
              </div>
              <div>
                The Panacea & DJ G-I-S - The Nazarene [2k6]
                <br />
                <iframe
                  id="odysee-iframe"
                  width={320}
                  height={320}
                  src="https://odysee.com/$/embed/@ajsbsd:b/A_The_Panacea_and_Dj_G-I-S-_-The_Nazarene:7?r=H2aBnBkPDHe17RSBGtzX
  kJsXcyq9haAT"
                />
              </div>
              <div>
                S.P.Y - By Your Side - By Your Side (Logistics Remix) - 2k10
                <br />
                <iframe
                  id="odysee-iframe"
                  width={320}
                  height={320}
                  src="https://odysee.com/$/embed/@ajsbsd:b/s.p.y-by_your_side:b?r=H2aBnBkPDHe17RSBGtzXkJsXcyq9haAT"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-blue-100 text-black">
          (c) 2004-2023 ajsbsd.net
        </div>
      </div>
    </section>
  );
}
