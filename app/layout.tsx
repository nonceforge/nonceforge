import "./globals.css";
import type { Metadata } from "next";
import { WalletProvider } from "@/lib/wallet";

export const metadata: Metadata = {
  title: "NonceForge",
  description: "Fair Launch Browser Mining Protocol",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}