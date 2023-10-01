import SocialMedia from "@/components/SocialMedia";
import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "My Works - Darukbyte",
};

export default function Works() {
  return (
    <main className={styles.box}>
      <SocialMedia />
    </main>
  );
}
