"use client";
import React from "react";
import Planet from "@/components/Planet";
import Constellation from "@/components/Constellation";
import { Gotu } from "next/font/google";
import styles from "./page.module.css";

const gotu = Gotu({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      <main className={styles.box}>
        <article className={styles.intro}>
          <p className={styles.intro__first}>
            Freelance Frontend Developer <br /> with a creative mindset.
          </p>
          <article className={`${styles.intro__first_box} ${gotu.className}`}>
            <h1 className={styles.intro__first_box_h}>Breaking</h1>
            <h2 className={styles.intro__first_box_h}>Bounderies</h2>
          </article>
          <p className={styles.intro__first}>with Code and Design</p>
        </article>
      </main>
      <div className={styles.planet_location}>
        <Planet />
      </div>
      <div className={styles.constellation_location}>
        <Constellation />
      </div>
    </>
  );
}
