import styles from "./StarrySky.module.css";
import React from "react";

export default function StarrySky() {
  return (
    <svg
      className={styles.svg_size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1171_617"
        className={styles.stylesMask}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="180"
        height="180"
      >
        <rect width="180" height="180" fill="#D9D9D9" />
      </mask>

      <g className={styles.planet_rotation} mask="url(#mask0_1171_617)">
        <circle cx="81" cy="60" r="0.8" fill="#161F38" />
        <circle cx="142" cy="30" r="0.8" fill="#161F38" />
        <circle cx="21" cy="98" r="0.8" fill="#161F38" />
        <circle cx="134" cy="120" r="0.8" fill="#161F38" />
        <circle cx="119" cy="68" r="0.8" fill="#161F38" />
        <circle cx="165" cy="26" r="0.8" fill="#161F38" />
        <circle cx="18" cy="135" r="0.8" fill="#161F38" />
        <circle cx="46" cy="64" r="0.8" fill="#161F38" />
        <circle cx="103" cy="6" r="0.8" fill="#161F38" />
        <circle cx="157" cy="167" r="0.8" fill="#161F38" />
        <circle cx="105" cy="134" r="0.8" fill="#161F38" />
        <circle cx="89" cy="175" r="0.8" fill="#161F38" />
        <circle cx="169" cy="64" r="0.8" fill="#161F38" />
        <circle cx="17" cy="38" r="0.8" fill="#161F38" />
        <circle cx="42" cy="22" r="0.8" fill="#161F38" />
        <circle cx="73" cy="112" r="0.8" fill="#161F38" />
        <circle cx="42" cy="156" r="0.8" fill="#161F38" />
        <circle cx="89" cy="39" r="0.8" fill="#161F38" />
        <circle cx="59" cy="1" r="0.8" fill="#161F38" />
        <circle cx="29" cy="6" r="0.8" fill="#161F38" />
        <circle cx="14" cy="66" r="0.8" fill="#161F38" />
        <circle cx="7" cy="116" r="0.8" fill="#161F38" />
        <circle cx="56" cy="106" r="0.8" fill="#161F38" />
        <circle cx="1" cy="106" r="0.8" fill="#161F38" />
        <circle cx="2" cy="1" r="0.8" fill="#161F38" />

        <circle
          className={`${styles.radiance} ${styles.delay}`}
          cx="81"
          cy="60"
          r="0.8"
          fill="#161F38"
        />
        <circle
          className={`${styles.radiance} ${styles.delay_two}`}
          cx="142"
          cy="30"
          r="0.8"
          fill="#161F38"
        />
        <circle
          className={`${styles.radiance}`}
          cx="18"
          cy="135"
          r="0.8"
          fill="#161F38"
        />
        <circle
          className={`${styles.radiance} ${styles.delay}`}
          cx="103"
          cy="6"
          r="0.8"
          fill="#161F38"
        />
        <circle
          className={`${styles.radiance}`}
          cx="105"
          cy="134"
          r="0.8"
          fill="#161F38"
        />
        <circle
          className={`${styles.radiance} ${styles.delay_two}`}
          cx="89"
          cy="175"
          r="0.8"
          fill="#161F38"
        />
        <circle
          className={`${styles.radiance}`}
          cx="42"
          cy="156"
          r="0.8"
          fill="#161F38"
        />
        <circle
          className={`${styles.radiance} ${styles.delay_two}`}
          cx="29"
          cy="6"
          r="0.8"
          fill="#161F38"
        />
        <circle
          className={`${styles.radiance} ${styles.delay}`}
          cx="14"
          cy="66"
          r="0.8"
          fill="#161F38"
        />
        <circle
          className={`${styles.radiance}`}
          cx="56"
          cy="106"
          r="0.8"
          fill="#161F38"
        />
        <circle
          className={`${styles.radiance} ${styles.delay_two}`}
          cx="7"
          cy="116"
          r="0.8"
          fill="#161F38"
        />
      </g>
    </svg>
  );
}
