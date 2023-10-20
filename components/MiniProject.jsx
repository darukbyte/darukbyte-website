import React from "react";
import Image from "next/image";
import styles from "@/components/MiniProject.module.css";
import localFont from "next/font/local";

const gotu = localFont({ src: "../font/Gotu-Regular.ttf" });
const data = [
  ["https://imgur.com/67RU8DG.png", "21 Sep. 2023", "SVG animation"],
  ["https://imgur.com/67RU8DG.png", "22 Sep. 2023", "Branding Design"],
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
            href="#"
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
