/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import styles from "./SocialMedia.module.css";
import localFont from "next/font/local";

const gotu = localFont({ src: "../font/Gotu-Regular.ttf" });

const data = [
  ["https://github.com/darukbyte", "github.svg", "Github"],
  ["https://twitter.com/darukbyte", "twitter.svg", "Twitter"],
  ["https://codepen.io/darukbyte", "codepen.svg", "Codepen"],
  ["https://dribbble.com/darukbyte", "dribbble.svg", "Dribbble"],
  ["https://behance.net/darukbyte/services", "behance.svg", "Behance"],
  ["https://linkedin.com/in/darukbyte", "linkedin.svg", "Linkedin"],
];

export default function SocialMedia() {
  return (
    <section className={`${gotu.className} ${styles.container__socialLinks}`}>
      <article className={styles.container__socialLinks_boxs}>
        {data.map((item, index) => (
          <a
            key={index}
            className={styles.container__socialLink}
            href={item[0]}
            target="_blank"
          >
            <figure className={styles.container__socialLink_image}>
              <img
                className={styles.container__socialLink_image}
                src={`/assets/${item[1]}`}
                alt={item[2]}
              />
            </figure>

            <p className={styles.container__socialLink_text}>{item[2]}</p>
          </a>
        ))}
      </article>
    </section>
  );
}
