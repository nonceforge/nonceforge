import "./globals.css";
import { WalletProvider } from "@/lib/wallet";
import PageTransition from "@/components/PageTransition";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          <PageTransition>{children}</PageTransition>
        </WalletProvider>
      </body>
    </html>
  );
}