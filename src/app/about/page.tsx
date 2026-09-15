import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "교회 소개 - 광주새서광교회",
  description:
    "광주새서광교회의 비전, 역사, 담임목사 인사말, 섬기는 사람들을 소개합니다.",
};

export default function AboutPage() {
  redirect("/about/vision");
}
