import type { Metadata } from "next";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-kr",
});

const notoSerifKR = Noto_Serif_KR({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif-kr",
});

export const metadata: Metadata = {
  title: {
    default: "광주새서광교회",
    template: "%s | 광주새서광교회",
  },
  description:
    "하나님의 사랑으로 세상을 밝히는 교회, 광주새서광교회입니다. 예배 안내, 설교, 교회 소식을 확인하세요.",
  keywords: [
    "광주새서광교회",
    "새서광교회",
    "광주교회",
    "광주 백서로 교회",
    "개신교",
  ],
  openGraph: {
    title: "광주새서광교회",
    description:
      "하나님의 사랑으로 세상을 밝히는 교회, 광주새서광교회입니다.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKR.variable} ${notoSerifKR.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
