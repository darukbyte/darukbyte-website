import React from "react";
import styles from "./page.module.css";
import HexagonConstellation from "@/components/HexagonConstellation";
import localFont from "next/font/local";
import Image from "next/image";
import MiniProject from "@/components/MiniProject";
const gotu = localFont({ src: "../../font/Gotu-Regular.ttf" });

export const metadata = {
  title: "Works crafted by me - Junior Carrillo a.k.a Daruk",
};

export default function Works() {
  return (
    <main className={styles.project_box}>
      <section className={styles.projects}>
        <p className={styles.projects__text}>
          I&apos;m frequently crafting new stuffs, from aesthetics design to
          awesome code projects of every sizes. Take a look and explore a
          variaty of inspiring projects crafted by me.
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
          <p className={styles.mini_projects_text}>Latest creation</p>
          <section className={styles.mini_projects_show}>
            <MiniProject />
          </section>
        </section>
      </section>

      <section className={`${styles.half__image} ${styles.view_no}`}>
        <article>
          <HexagonConstellation />
          <Image
            src="https://imgur.com/67RU8DG.png"
            width={240}
            height={240}
            alt="aestheticify illustration"
          />
        </article>
      </section>
    </main>
  );
}
