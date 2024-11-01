import type { Metadata } from "next";
import { Jockey_One, Poppins } from 'next/font/google';
import "./globals.css";

const jockeyOne = Jockey_One({
  weight: ['400'],  
  subsets: ['latin'],
  variable: '--font-jockey-one',
});

const poppins = Poppins({
  weight: ['400', '700'], 
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "DevStreak",
  description: "Landing Page do aplicativo de Programação DevStreak",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${jockeyOne.variable} ${poppins.variable} antialiased bg-gradient-to-r from-black to-gray-950`}
      >
        {children}
      </body>
    </html>
  );
}
