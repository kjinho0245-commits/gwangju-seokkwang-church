export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  category: "공지" | "행사" | "교육" | "선교";
  summary: string;
  content: string;
}

export const newsItems: NewsItem[] = [];
