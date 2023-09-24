"use client";
import React from "react";
import Planet from "@/components/Planet";
import Constellation from "@/components/Constellation";
import { Gotu } from "next/font/google";

const gotu = Gotu({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main>
      <article>
        <p>Frontend Developer</p>
        <p> with a creative mindset.</p>
        <h1 className={gotu.className}>
          Let&apos;s be <br /> Creative
        </h1>
        <p>Love for code, desgin, write and build</p>
      </article>
      <Planet />
      <Constellation />
    </main>
  );
}
