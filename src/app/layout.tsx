import clsx from "clsx";
import type { Metadata } from "next";
import { Audiowide, Electrolize, Orbitron, Rajdhani, Teko } from "next/font/google";
import {ghKit} from "@/lib/@GrangerHub/react-webkit/main.module.scss";

const audiowide = Audiowide({weight: '400', subsets: ['latin'], variable: '--font-audiowide'});
const electrolize = Electrolize({weight: '400', subsets: ['latin'], variable: '--font-electrolize'});
const orbitron = Orbitron({weight: '700', subsets: ['latin'], variable: '--font-orbitron'});
const rajdhani = Rajdhani({weight: '500', subsets: ['latin'], variable: '--font-rajdhani'});
const teko = Teko({weight: ['300', '400'], subsets: ['latin'], variable: '--font-teko'});

const fontsVariablesClasses =
  [audiowide, electrolize, orbitron, rajdhani, teko]
    .map((font) => font.variable);

export const metadata: Metadata = {
  title: "Bastien ADAM",
  description: "Développeur informatique formé sur des projets de jeux vidéos, des projets multimédia, et des projets web. Formé à l'École 42 Paris.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={clsx(ghKit, fontsVariablesClasses)}>
      <body>{children}</body>
    </html>
  );
}
