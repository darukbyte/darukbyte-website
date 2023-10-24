"use client";
import React from "react";
import Planet from "@/components/Planet";
import Constellation from "@/components/Constellation";
import styles from "./page.module.css";
import localFont from "next/font/local";
import StarrySky from "@/components/StarrySky";
const gotu = localFont({ src: "../font/Gotu-Regular.ttf" });

export default function Home() {
  return (
    <>
      <StarrySky />
      <main className={styles.box}>
        <article className={styles.intro}>
          <p className={styles.intro__first}>
            Explore the journey of a <br /> Frontend Developer
          </p>
          <article className={`${styles.intro__first_box} ${gotu.className}`}>
            <h1 className={styles.intro__first_box_h}>Wrecking</h1>
            <h2 className={styles.intro__first_box_h}>Boundaries</h2>
          </article>
          <p className={styles.intro__first}>
            with code, design, creativity, and passion.
          </p>
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
