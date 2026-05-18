import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NonceForge",
  description: "Fair Launch Browser Mining Protocol",
  icons: {
    icon: "/icon.png",
  },
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