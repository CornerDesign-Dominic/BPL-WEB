import { Source_Sans_3 } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans-3",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Brennpunkt Logistik GmbH",
  description: "Zeitkritische Express-, Direkt- und Sonderfahrten in Deutschland und Europa.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de">
      <body className={`${sourceSans3.className} ${sourceSans3.variable}`}>
        {children}
      </body>
    </html>
  );
}
