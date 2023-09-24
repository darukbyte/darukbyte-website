import "./globals.css";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata = {
  title:
    "Darukbyte - Frontend Developer crafting innovative digital experiences",
  description:
    "Pushing creative and coding boundaries, one web experience at a time. Based in Bogotá, Colombia.",
  keywords: [
    "Darukbyte",
    "Junior Carrillo",
    "Frontend Developer",
    "Design",
    "Personal site",
  ],
  themeColor: "#408950",
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
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
      {children}
      </body>
    </html>
  );
}
