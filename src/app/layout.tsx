import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "조만장자 목록",
  description: "Billions API를 이용한 조만장자 목록 웹사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <header className="border-b">
            <div className="container mx-auto py-4 px-6">
              <nav className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">
                  조만장자들
                </Link>
              </nav>
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t py-4">
            <div className="container mx-auto px-6 text-center text-gray-500">
              <p>조만장자 목록 - 니코 API 이용</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
