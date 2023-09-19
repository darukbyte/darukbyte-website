import Link from "next/link";
import styles from "./Navigation.module.css";

export function Navigation() {
  return (
    <header className={styles.border}>
      <nav>
        <ul className={styles.ul}>
          <li key="Home">
            <Link href="/">Home</Link>
          </li>
          <li key="About">
            <Link href="/about">Who I am?</Link>
          </li>
          <li key="Portfolio">
            <Link href="/portfolio">My work</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
