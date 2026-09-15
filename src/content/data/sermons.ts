export interface Sermon {
  slug: string;
  title: string;
  date: string;
  preacher: string;
  series: string;
  scripture: string;
  description: string;
  youtubeId: string;
  thumbnailUrl?: string;
}

export const sermons: Sermon[] = [
  {
    slug: "2024-12-29-new-year-hope",
    title: "새해, 새 소망",
    date: "2024-12-29",
    preacher: "김진호 목사",
    series: "소망 시리즈",
    scripture: "예레미야 29:11",
    description:
      "새해를 맞이하며 하나님께서 우리를 위해 예비하신 소망의 계획을 묵상합니다. 불확실한 시대 속에서도 변하지 않는 하나님의 약속을 붙잡는 믿음에 대해 나눕니다.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    slug: "2024-12-22-christmas-love",
    title: "성탄의 사랑",
    date: "2024-12-22",
    preacher: "김진호 목사",
    series: "성탄 특별",
    scripture: "누가복음 2:10-11",
    description:
      "성탄절을 맞아 이 땅에 오신 예수님의 사랑을 되새깁니다. 말구유에 나신 왕의 겸손과 사랑이 우리 삶에 어떤 의미인지 함께 나눕니다.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    slug: "2024-12-15-faith-in-trials",
    title: "시련 속의 믿음",
    date: "2024-12-15",
    preacher: "이승현 부목사",
    series: "믿음 시리즈",
    scripture: "야고보서 1:2-4",
    description:
      "삶의 시련 가운데서도 흔들리지 않는 믿음을 세워가는 방법을 말씀을 통해 배웁니다.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    slug: "2024-12-08-community-of-grace",
    title: "은혜의 공동체",
    date: "2024-12-08",
    preacher: "김진호 목사",
    series: "공동체 시리즈",
    scripture: "에베소서 4:1-6",
    description:
      "그리스도 안에서 하나 된 공동체의 아름다움과, 서로를 향한 은혜와 사랑의 실천에 대해 나눕니다.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    slug: "2024-12-01-prayer-power",
    title: "기도의 능력",
    date: "2024-12-01",
    preacher: "김진호 목사",
    series: "기도 시리즈",
    scripture: "빌립보서 4:6-7",
    description:
      "염려를 기도로 바꿀 때 임하는 하나님의 평강에 대해 말씀합니다. 일상 속 기도의 실천을 격려합니다.",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    slug: "2024-11-24-thanksgiving",
    title: "감사의 삶",
    date: "2024-11-24",
    preacher: "이승현 부목사",
    series: "감사 시리즈",
    scripture: "데살로니가전서 5:18",
    description:
      "범사에 감사하라는 말씀을 통해, 어떤 상황에서도 감사할 수 있는 믿음의 비결을 나눕니다.",
    youtubeId: "dQw4w9WgXcQ",
  },
];
