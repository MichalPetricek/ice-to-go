import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ice To Go | Automatická zmrzlina v ČR",
  description: "Objevte naše zmrzlinové automaty rozmístěné po celé České republice. Čerstvá, automaticky natočená zmrzlina kdykoliv potřebujete!",
  keywords: "zmrzlina, automat, ice cream, Ice To Go, Česká republika, zmrzlinový automat",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Ice To Go | Automatická zmrzlina v ČR",
    description: "Objevte naše zmrzlinové automaty rozmístěné po celé České republice.",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
