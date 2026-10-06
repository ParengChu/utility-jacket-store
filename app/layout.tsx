import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rider Utility — The Rider Utility Jacket",
  description:
    "Designed by a delivery rider. Built around the problems riders deal with every day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}