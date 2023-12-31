"use client";
/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";
import localFont from "next/font/local";
import SocialMedia from "@/components/SocialMedia";

const gotu = localFont({ src: "../font/Gotu-Regular.ttf" });

export default function Navigation() {
  return (
    <header className={`${styles.header} ${gotu.className}`}>
      <nav className={styles.header__nav_top}>
        <ul className={styles.header__nav_top_container}>
          <li className={styles.header__nav_top_vector} key="Home">
            <Link className={styles.header__nav_top_logotype} href="/">
              <figure className={styles.header__nav_top_vector}>
                <img
                  className={styles.header__nav_top_vector}
                  src="/assets/DarukbyteIsotype.svg"
                  alt="Isotype"
                />
              </figure>
            </Link>
          </li>
          <li>
            <a
              className={`${styles.header__nav_top_sayhi} ${styles.none}`}
              href="#"
            >
              say hi.
            </a>
          </li>
          <li className={styles.header__nav_top_social}>
            <SocialMedia />
          </li>
        </ul>
      </nav>
      <nav className={styles.header__nav_bottom}>
        <ul className={styles.header__nav_bottom_container}>
          <li>
            <Link
              className={styles.header__nav_bottom_container_links}
              href="/about"
            >
              Who I am?
            </Link>
          </li>
          <li>
            <a
              className={`${styles.header__nav_top_sayhi} ${styles.flex}`}
              href="#"
            >
              say hi
            </a>
          </li>
          <li>
            <Link
              className={styles.header__nav_bottom_container_links}
              href="/works"
            >
              My work
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
