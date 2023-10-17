import React from "react";
import styles from "./page.module.css";
import HexagonConstellation from "@/components/HexagonConstellation";
import localFont from "next/font/local";
import Image from "next/image";
const gotu = localFont({ src: "../../font/Gotu-Regular.ttf" });

export const metadata = {
  title: "Works crafted by me - Junior Carrillo | Darukbyte",
};

export default function Works() {
  return (
    <main className={styles.project_box}>
      <a className={`${styles.work_info} ${styles.work_info_fixed}`} href="#">
        Availible for work: <span>3 Days per week</span>
      </a>

      <section className={styles.projects}>
        <a className={styles.work_info} href="#">
          Availible for work: <span>3 Days per week</span>
        </a>

        <article
          className={`${styles.projects__mobile_hexagon} ${styles.view}`}
        >
          <svg
            viewBox="0 0 180 240"
            fill="none"
            className={styles.logo}
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
          <HexagonConstellation />
        </article>

        <p className={styles.projects__text}>
          I&apos;m frequently crafting insteresting stuffs on{" "}
          <a href="https://codepen.io/darukbyte" target="_blank">
            codepen
          </a>{" "}
          and{" "}
          <a href="https://dribbble.com/darukbyte" target="_blank">
            dribbble.
          </a>{" "}
          Explore a variaty of inspiring projects crafted by me.
        </p>

        <section className={styles.projects__showcase}>
          <article className={styles.projects__showcase__box}>
            <a
              href="https://aestheticify.vercel.app/"
              target="_blank"
              className={`${styles.projects__showcase__box_title} ${gotu.className}`}
            >
              <p>01.</p>
              <div className={styles.projects__bar}></div>
              <h4>Aestheticify</h4>
            </a>

            <h5 className={styles.projects__showcase__box_date}>Sep. 2023</h5>

            <p className={styles.projects__showcase__box_intro}>
              Landing Page for a Web3 platform that offers a unique experience
              of personalization through illustrations, NFTs and AI.
            </p>

            <article className={styles.projects__showcase__box_icons}>
              <Image
                src="/assets/design.svg"
                width={24}
                height={24}
                alt="design"
              />
              <Image
                src="/assets/figma.svg"
                width={24}
                height={24}
                alt="design"
              />
              <Image
                src="/assets/html.svg"
                width={24}
                height={24}
                alt="design"
              />
              <Image
                src="/assets/css.svg"
                width={24}
                height={24}
                alt="design"
              />
              <Image
                src="/assets/javascript.svg"
                width={24}
                height={24}
                alt="js"
              />
              <Image src="/assets/gsap.svg" width={24} height={24} alt="gsap" />
            </article>
          </article>
        </section>

        <section className={styles.mini_projects}>
          <p className={styles.mini_projects_text}>
            Codepen, Dribbble and Webflow latest creation
          </p>

          <section className={styles.mini_projects__showcase}>
            <article>
              <span></span>
              <h5></h5>
              <p></p>
            </article>
          </section>
        </section>
      </section>

      <section className={`${styles.half__image} ${styles.view_no}`}>
        <article>
          <HexagonConstellation />
        </article>
      </section>
    </main>
  );
}
