import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GridLines from "@/components/GridLines";
import ShillFooter from "@/components/ShillFooter";

const helveticaMedium = localFont({
  src: "../fonts/HelveticaNeue-Medium.otf",
  variable: "--font-helvetica-med",
  weight: "400",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geistmono-reg",
  weight: "400",
});
const vt323Regular = localFont({
  src: "../fonts/VT323-Regular.ttf",
  variable: "--font-vt323-reg",
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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${helveticaMedium.variable} ${geistMono.variable} ${vt323Regular.variable} antialiased`}>
        <GridLines />
        {children}
        <ShillFooter />
      </body>
    </html>
  );
}
