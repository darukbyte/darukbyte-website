import Constellation from "@/components/Constellation";
import Planet from "@/components/Planet";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Who exactly am I? - Darukbyte",
};

export default function About() {
  return (
    <main>
      <section>
        <h3>
          Junior <span>Carrillo</span>{" "}
        </h3>
        <Image
          src="/assets/DarukbytePortraitIllustration.jpg"
          width={300}
          height={373}
          alt="Midjourney illustration of my self"
        />
        <p>
          I&apos;m a designer and developer on the odyssey to unveil the art of
          code and creativity, discovering new ways while exploring beyond the
          horizons of this endless universe called the web.
        </p>
        <article>
          <h6>Scroll to start the journey</h6>
          <div></div>
        </article>
      </section>

      <section>
        <h3>Going beyond the horizon</h3>
        <article>
          <h5>Exploring new frontiers</h5>
          <p>
            Wrecking boundaries and surpassing the frontiers of regular
            websites. I infuse creativity to make websites look better, move
            smoother, and feel more alive. I&apos;m always looking to expand my
            frontiers and discover new horizons.
          </p>
        </article>
        <article>
          <Constellation />
        </article>
        <article>
          <h6>
            Unique web experiences crafted <br /> with creativity.
          </h6>
          <ul>
            <li>strong concepts</li>
            <li>UI Design</li>
            <li>Iterative Development</li>
            <li>Motion for the web</li>
            <li>SVG assets creation</li>
          </ul>
        </article>
        <article>
          <Planet />
        </article>
      </section>

      <section>
        <article>
          <h5>
            Ready to <br /> discover new <br /> <span>web experiences</span>
          </h5>
        </article>

        <article>
          <a href="#">Let&apos;s began</a>
        </article>
      </section>

      <section>
        <h5>
          More than <br /> creativity
        </h5>
        <article>
          <h6>
            Rather provide solutions, <br />
            than make you feel good
          </h6>
          <p>
            Exploring new ideas doesn&apos;t always mean creating new ones. I
            monitor trends and keep a eye on the best things that are made and
            develop in my field of expertise. This way, I can provide creative
            solutions and offer clear and honest feedback.
          </p>
        </article>
        <h5>
          My own <br /> curiosity
        </h5>
        <article>
          <h5>Learning new things along my journeys.</h5>
          <p>
            I&apos;m a self-taught adventure with a deep passion for learning. I
            spent every day acquiring new knowledge, this help me to break
            boundaries and discover new ways to explore the vast universe beyond
            the horizon.
          </p>
        </article>

        <article>
          <svg
            viewBox="0 0 180 240"
            width=""
            height=""
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M180 60L90 60L0 60L9.9999 0L30 0L40 10L40.2216 31.1768L60.2064 31.1768L60 20L70 10L80 0H90.04L100 0L110 10L120 20L120.161 31.1768L140.146 31.1768L140 10L150 0L170 0L180 60Z"
              fill="#408950"
            />

            <path
              d="M0 70H80V200H40L0 210L10 190L40 180V110L0 90V70Z"
              fill="#408950"
            />

            <path
              d="M180 70H100V200H140L180 210L170 190L140 180V110L180 90V70Z"
              fill="#408950"
            />

            <path d="M0 220L40 210H90H140L180 220V240H0V220Z" fill="#408950" />
          </svg>
        </article>

        <article>
          <h6>
            Are you ready to embark
            <br /> on a <span>new journey?</span>
          </h6>
          <ul>
            <li>
              <a href="#">Let&apos;s chat, me@darukbyte.com</a>
            </li>
            <li>
              <a href="#">Let&apos;s talk, Book a Meet</a>
            </li>
            <li>Based in Bogotá, Colombia</li>
          </ul>
        </article>

        <article>
          <h6>Credits</h6>
          <ul>
            <li>
              Design, Motion and Development: <br />
              Junior Carrillo
            </li>
            <li>
              Every asset on the website, unless otherwise specified, are the
              property of Junior Carrillo.
            </li>
            <li>Copyright © 2023 Darukbyte</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
