import React from "react";
import styles from "./page.module.css";
import HexagonConstellation from "@/components/HexagonConstellation";

export const metadata = {
  title: "Works crafted by me - Junior Carrillo | Darukbyte",
};

export default function Works() {
  return (
    <main className={styles.box}>
      <a className={styles.work_info} href="#">
        Availible for work: <span>3 Days per week</span>
      </a>

      <section className={styles.projects}>
        <article className={styles.projects__mobile_hexagon}>
          <HexagonConstellation />
        </article>
        <p className={styles.projects__text}>
          I&apos;m frequently crafting insteresting stuffs on
          <a href="https://codepen.io/darukbyte" target="_blank">
            codepen
          </a>
          and
          <a href="https://dribbble.com/darukbyte" target="_blank">
            dribbble.
          </a>
          Explore a variaty of inspiring projects crafted by me.
        </p>

        <section className={styles.projects__showcase}>
          <article className={styles.projects__showcase__box}>
            <article className={styles.projects__showcase__box_title}>
              <p>01.</p>
              <div></div>
              <h4>Aestheticify</h4>
            </article>

            <p className={styles.projects__showcase__box_intro}></p>

            <article className={styles.projects__showcase__box_icons}>
              <span
                className={styles.projects__showcase__box_icons_image}
              ></span>
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

      <section className={styles.half__img}>
        <article>
          <HexagonConstellation />
        </article>
      </section>
    </main>
  );
}
