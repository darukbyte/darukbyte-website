import React from "react";
import Image from "next/image";
import styles from "@/components/MiniProject.module.css";
import localFont from "next/font/local";

const gotu = localFont({ src: "../font/Gotu-Regular.ttf" });
const data = [
  [
    "https://imgur.com/AXVAlcL.png",
    "13 Oct. 2023",
    "SVG Animation",
    "https://codepen.io/darukbyte/pen/jOXRRYM",
  ],
  [
    "https://imgur.com/nFxgI2j.png",
    "08 Sep. 2023",
    "Branding Design",
    "https://dribbble.com/shots/22507050-Darukbyte-Personal-Brand-Logo-Design",
  ],
  [
    "https://imgur.com/w4B9rVJ.png",
    "08 Sep. 2023",
    "SVG Animation",
    "https://codepen.io/darukbyte/pen/poqevQW",
  ],
  [
    "https://imgur.com/ZidIKuX.png",
    "06 Sep. 2023",
    "SVG Animation",
    "https://codepen.io/darukbyte/pen/mdaONQP",
  ],
  [
    "https://imgur.com/xFiLlKw.png",
    "02 Sep. 2023",
    "SVG Animation",
    "https://codepen.io/darukbyte/pen/BavLNLO",
  ],
  [
    "https://imgur.com/bFQY7Ep.png",
    "28 Aug. 2023",
    "SVG Animation",
    "https://codepen.io/darukbyte/pen/dyROWmm",
  ],
  [
    "https://imgur.com/Ymbwonw.png",
    "26 Aug. 2023",
    "Branding Design",
    "https://dribbble.com/shots/22389079-Aestheticify-Branding-Logo-Design",
  ],
];

export default function MiniProject() {
  return (
    <article className={styles.mini__project_box}>
      {data.map((item, index) => (
        <article key={index} className={styles.mini_project}>
          <Image
            className={styles.mini__project_image}
            src={item[0]}
            width={340}
            height={207}
            alt={item[2]}
          />
          <h5 className={styles.mini__project_date}>{item[1]}</h5>
          <a
            href={item[3]}
            target="_blank"
            className={`${gotu.className} ${styles.mini__project_title}`}
          >
            {item[2]}
          </a>
        </article>
      ))}
    </article>
  );
}
