import "./globals.css";
import type { Metadata } from "next";
import { WalletProvider } from "@/lib/wallet";
import FloatingWalletButton from "@/components/FloatingWalletButton";

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
      <body>
        <WalletProvider>
  <FloatingWalletButton />
  {children}
</WalletProvider>
      </body>
    </html>
  );
}