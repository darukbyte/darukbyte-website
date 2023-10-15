import React from "react";
import gsap from "gsap";
import styles from "@/components/HexagonConstellation.module.css";

export default function HexagonConstellation() {
  return (
    <>
      <svg
        className={styles.size}
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          className={styles.mask}
          id="mask0_1437_704"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="320"
          height="320"
        >
          <rect width="320" height="320" fill="#161F38" />
        </mask>
        <g mask="url(#mask0_1437_704)">
          <circle cx="160" cy="290.909" r="5.09091" fill="#161F38" />
          <circle
            className={`${styles.raidance} ${styles.delay}`}
            cx="160"
            cy="290.909"
            r="5.09091"
            fill="#161F38"
          />

          <circle cx="47.2727" cy="224.727" r="5.09091" fill="#161F38" />
          <circle
            className={`${styles.radiance}`}
            cx="47.2727"
            cy="224.727"
            r="5.09091"
            fill="#161F38"
          />

          <circle cx="272" cy="224.727" r="5.09091" fill="#161F38" />
          <circle
            className={`${styles.radiance} ${styles.delay_two}`}
            cx="272"
            cy="224.727"
            r="5.09091"
            fill="#161F38"
          />

          <circle cx="272" cy="96" r="5.09091" fill="#161F38" />
          <circle
            className={`${styles.radiance} ${styles.delay}`}
            cx="272"
            cy="96"
            r="5.09091"
            fill="#161F38"
          />

          <circle cx="47.2727" cy="93.8182" r="5.09091" fill="#161F38" />
          <circle
            className={`${styles.radiance} ${styles.delay_two}`}
            cx="47.2727"
            cy="93.8182"
            r="5.09091"
            fill="#161F38"
          />

          <circle cx="160" cy="29.0909" r="5.09091" fill="#161F38" />
          <circle
            className={`${styles.radiance} ${styles.delay_two}`}
            cx="160"
            cy="29.0909"
            r="5.09091"
            fill="#161F38"
          />

          <path
            className={`${styles.way} ${styles.delay_two}`}
            d="M272.727 225.091L160 290.182"
            stroke="#161F38"
            strokeWidth="2.8"
          />

          <path
            className={`${styles.way} ${styles.delay_two}`}
            d="M47.2727 224.727L160 290.182"
            stroke="#161F38"
            strokeWidth="2.8"
          />

          <path
            className={`${styles.way} ${styles.delay_two}`}
            d="M47.2728 94.9091L160 29.0909"
            stroke="#161F38"
            strokeWidth="2.8"
          />

          <path
            className={`${styles.way}`}
            d="M47.2727 94.9091L47.2708 224.867"
            stroke="#161F38"
            strokeWidth="2.8"
          />

          <path
            className={`${styles.way} ${styles.delay}`}
            d="M272.727 95.2727L160 29.0909"
            stroke="#161F38"
            strokeWidth="2.8"
          />

          <path
            className={`${styles.way}`}
            d="M272.727 225.091L272.727 95.2726"
            stroke="#161F38"
            strokeWidth="2.8"
          />
        </g>
      </svg>
    </>
  );
}
