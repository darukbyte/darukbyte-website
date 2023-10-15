import "./globals.css";
import { Urbanist } from "next/font/google";
import Navigation from "@/components/Navigation";
import StarrySky from "@/components/StarrySky";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata = {
  title:
    "Junior Carrillo - Freelance Frontend Developer crafting innovative digital experiences",
  description:
    "Exploring beyond the boundaries of creativity and code, one web experience at a time. Based in Venezuela.",
  keywords: [
    "Darukbyte",
    "Junior Carrillo",
    "Frontend Developer",
    "Design",
    "Motion",
    "Animation",
    "GSAP",
    "figma",
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Next",
    "Programming",
    "Freelance",
    "Personal site",
  ],
  themeColor: "#F3F2F2",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
    metadataBase: new URL("https://darukbyte-website.vercel.app/"),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
