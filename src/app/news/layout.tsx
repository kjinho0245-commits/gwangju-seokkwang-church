import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "교회 소식 - 광주새서광교회",
  description:
    "광주새서광교회의 공지사항, 행사, 교육 소식을 전합니다.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
