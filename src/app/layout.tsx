import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GridLines from "@/components/GridLines";

/*
const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
*/
const iosevkaLight = localFont({
  src: "../fonts/IosevkaNerdFont-Light.ttf",
  variable: "--font-iosevka-light",
  weight: "400",
});
const iosevkaMedium = localFont({
  src: "../fonts/IosevkaNerdFont-Medium.ttf",
  variable: "--font-iosevka-medium",
  weight: "400",
});
const spaceMono = localFont({
  src: "../fonts/SpaceMono-Regular.ttf",
  variable: "--font-spacemono",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Password Generator",
  description: "Made with love by Swyzsh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${iosevkaLight.variable} ${iosevkaMedium.variable} ${spaceMono.variable} antialiased`}>
        <GridLines />
        {children}
      </body>
    </html>
  );
}
