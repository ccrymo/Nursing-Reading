import localFont from "next/font/local";
import { Analytics } from '@vercel/analytics/next';

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Basic Reading 1 ",
  description: "Vocabulary and Skills breakdown",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <head>
          <link href="https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&family=Racing+Sans+One&display=swap" rel="stylesheet" />
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
