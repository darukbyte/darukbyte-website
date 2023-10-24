import Constellation from "@/components/Constellation";
import Planet from "@/components/Planet";
import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import localFont from "next/font/local";
import MiniConstellation from "@/components/MiniConstellation";
const gotu = localFont({ src: "../../font/Gotu-Regular.ttf" });

export const metadata = {
  title: "Who exactly am I? - Junior Carrillo a.k.a Daruk",
};

export default function About() {
  return (
    <main className={styles.main}>
      <section className={styles.main__intro}>
        <article className={styles.main__intro_box}>
          <h3 className={`${styles.main__intro_name} ${gotu.className}`}>
            Junior <span className={styles.main__intro_nameTwo}>Carrillo</span>{" "}
          </h3>
          <Image
            className={styles.main__intro_image}
            src="/assets/DarukbytePortraitIllustration.jpg"
            width={300}
            height={373}
            alt="Midjourney illustration of my self"
          />
          <p className={styles.main__intro_presentation}>
            I&apos;m a designer and developer on the odyssey to unveil the art
            of code and creativity, discovering new ways while exploring beyond
            the horizons of this endless universe called the web.
          </p>
          <article className={`${styles.main__intro_scroll} ${gotu.className}`}>
            <h6 className={styles.main__intro_scroll_title}>
              Scroll to start the journey
            </h6>
            <div className={`${styles.main__intro_scroll_bar}`}></div>
          </article>
        </article>
      </section>

      <section className={styles.main__box}>
        <article className={styles.main__about}>
          <h3 className={`${styles.main__about_title} ${gotu.className}`}>
            Going beyond the{" "}
            <span className={styles.main__about_titleTwo}> horizon </span>
          </h3>

          <article
            className={`${styles.main__paraghrap} ${styles.main__about_box}`}
          >
            <h5 className={`${styles.main__paraghrap_title} ${gotu.className}`}>
              Exploring new frontiers
            </h5>
            <p className={styles.main__paraghrap_content}>
              Wrecking boundaries and surpassing the frontiers of regular
              websites. I put all my creativity to make websites look better,
              move smoother, and feel more alive. I&apos;m always looking to
              expand my frontiers and discover new horizons.
            </p>
            <article
              className={`${styles.main__about_constellation} ${styles.display__view}`}
            >
              <Constellation />
            </article>
          </article>

          <article
            className={`${styles.main__about_constellation} ${styles.display__view_two}`}
          >
            <Constellation />
          </article>

          <article className={styles.main__about_points}>
            <h6 className={styles.main__about_points_title}>
              Crafting unique web experiences <br /> with creativity and code.
            </h6>

            <ul className={styles.main__about_points_list}>
              <li>Strong concepts</li>
              <li>UI Design</li>
              <li>Iterative Development</li>
              <li>Motion for the web</li>
              <li>SVG assets creation</li>
            </ul>
          </article>

          <article className={styles.main__about_planet}>
            <Planet />
          </article>
        </article>
      </section>

      <section className={styles.main__exploration}>
        <h5 className={`${styles.main__exploration_title} ${gotu.className}`}>
          Ready to <br /> discover new <br /> <span>web experiences?</span>
        </h5>

        <article
          className={`${styles.main__exploration_cta} ${gotu.className}`}
        >
          <article className={styles.main__exploration_cta_background}>
            <MiniConstellation />
          </article>
          <a href="#">Let&apos;s began</a>
        </article>
      </section>

      <section className={styles.main__details}>
        <h5
          className={`${styles.main__details_head} ${styles.details__block_one} ${gotu.className}`}
        >
          More than <br /> <span> creativity </span>
        </h5>

        <article
          className={`${styles.main__paraghrap} ${styles.details__block_two}`}
        >
          <h5 className={`${styles.main__paraghrap_title} ${gotu.className}`}>
            Creative ideas, with clear and honest solutions
          </h5>
          <p className={styles.main__paraghrap_content}>
            Exploring new ideas doesn&apos;t always mean creating new ones. I
            monitor trends and keep a eye on the best things that are make and
            develop in my field of expertise. This way, I can provide creative
            solutions and unique web experiences.
          </p>
        </article>

        <h5
          className={`${styles.main__details_head} ${styles.details__block_tree} ${gotu.className}`}
        >
          My own <br /> <span>curiosity</span>
        </h5>

        <article
          className={`${styles.main__paraghrap} ${styles.details__block_four}`}
        >
          <h5 className={`${styles.main__paraghrap_title} ${gotu.className}`}>
            Learning new things <br /> along my journeys.
          </h5>
          <p className={styles.main__paraghrap_content}>
            I&apos;m a self-taught adventure with a deep passion for learning. I
            spent every day acquiring new knowledge that help me to break
            boundaries and discover new ways to explore this vast universe
            beyond the horizon.
          </p>
        </article>

        <article className={styles.main__logo}>
          <svg
            viewBox="0 0 180 240"
            fill="none"
            className={styles.main__logo_center}
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

        <article
          className={`${styles.main__more_info} ${styles.info__block_one}`}
        >
          <h6 className={`${styles.main__more_text}  ${gotu.className}`}>
            Are you ready to embark
            <br /> on a <span>new journey?</span>
          </h6>
          <ul className={styles.main__more_list}>
            <li>
              <a href="#">Let&apos;s chat, me@darukbyte.com</a>
            </li>
            <li>
              <a href="#">Let&apos;s talk, Book a Meet</a>
            </li>
            <li>Based in Venezuela</li>
          </ul>
        </article>

        <article
          className={`${styles.main__more_info} ${styles.info__block_two}`}
        >
          <h6
            className={`${styles.main__more_text} ${styles.info__block_text} ${gotu.className}`}
          >
            Credits
          </h6>
          <ul className={`${styles.main__more_list} `}>
            <li>
              Design, Motion and Development by: <br />
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
