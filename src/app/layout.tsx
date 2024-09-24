import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

export const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Heart Disease Prediction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("bg-stone-50 font-sans", fontSans.variable)}
      >
        <link rel="icon" href="/icon/heart.ico" sizes="any" />
        {children}
      </body>
    </html>
  );
}
