import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OSUGI Radar",
  description: "IPO Intelligence Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-neutral-100 text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}