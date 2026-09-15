export const churchInfo = {
  name: "광주새서광교회",
  shortName: "새서광교회",
  pastor: "김진호",
  address: "전남광주통합특별시 동구 백서로 189번길 6-3",
  phone: "062)225-1002",
  email: "reptune@hanmail.net",
  youtube: "https://www.youtube.com/@tv-qz2fc",
  instagram: "https://www.instagram.com/jinho6424/",
  facebook: "https://www.facebook.com/jinho.gim2?locale=ko_KR",
  kakaoChannel: "https://pf.kakao.com/seokkwang",
  slogan: "함께 지어져 가는 교회",
  description:
    "광주새서광교회는 하나님의 말씀 위에 세워진 공동체로, 복음의 빛을 이웃과 세상에 전하며 함께 성장하는 교회입니다.",
} as const;

export type ChurchInfo = typeof churchInfo;
