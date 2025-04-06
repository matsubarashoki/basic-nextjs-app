import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";

import "../styles/globals.css"; // globals.css の場所に応じてパス調整

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "サイト名",
  description: "サイトの説明",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
