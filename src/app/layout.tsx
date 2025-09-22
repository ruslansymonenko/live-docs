import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Live Docs",
  description:
    "Text editing application with support for multiple users simultaneously",
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
