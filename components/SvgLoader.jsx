import styles from "./SvgLoader.module.css";

export function SvgLoader() {
  return (
    <section className={styles.container}>
      <svg
        className={styles.loader__svg}
        viewBox="0 0 480 480"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={`${styles.loader__top} ${styles.loader}`}
          d="M239.386 123.08L190.124 173.609L206.545 207.295H222.965H255.807H272.227L288.648 173.609L239.386 123.08Z"
          fill="#161F38"
        />

        <path
          className={`${styles.loader__right} ${styles.loader}`}
          d="M359.384 240.466L307.66 192.125L273.178 208.239V224.353V256.58V272.694L307.66 288.808L359.384 240.466Z"
          fill="#161F38"
        />

        <path
          className={`${styles.loader__left} ${styles.loader}`}
          d="M120.078 240.466L171.802 192.125L206.284 208.239V224.353V256.58V272.694L171.802 288.808L120.078 240.466Z"
          fill="#161F38"
        />

        <path
          className={`${styles.loader__bottom} ${styles.loader}`}
          d="M239.385 357.553L288.647 307.024L272.227 273.338H255.806H222.965H206.544L190.123 307.024L239.385 357.553Z"
          fill="#161F38"
        />
      </svg>
    </section>
  );
}
