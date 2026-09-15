export interface Ministry {
  name: string;
  description: string;
  leader: string;
  schedule: string;
  icon: string;
}

export const ministries: Ministry[] = [
  {
    name: "찬양팀",
    description:
      "예배의 분위기를 이끌며, 찬양으로 하나님께 영광을 돌립니다. 매주 토요일 연습을 통해 은혜로운 예배를 준비합니다.",
    leader: "김은정 집사",
    schedule: "매주 토요일 오후 3시 연습",
    icon: "Music",
  },
  {
    name: "교육부",
    description:
      "유초등부부터 청년부까지, 다음 세대가 믿음 안에서 성장하도록 돕는 교육 사역을 담당합니다.",
    leader: "이승현 부목사",
    schedule: "매주 주일 오전 9시 30분",
    icon: "BookOpen",
  },
  {
    name: "봉사부",
    description:
      "교회 안팎의 봉사활동을 기획하고, 지역사회를 섬기는 다양한 프로그램을 운영합니다.",
    leader: "박준혁 장로",
    schedule: "월 1회 봉사활동",
    icon: "Heart",
  },
  {
    name: "선교부",
    description:
      "국내외 선교지를 후원하고, 단기선교팀을 파송하여 복음 전파에 동참합니다.",
    leader: "정미란 권사",
    schedule: "분기별 선교 기도회",
    icon: "Globe",
  },
  {
    name: "새가족부",
    description:
      "처음 교회를 방문하신 분들이 교회에 잘 정착할 수 있도록 안내하고 돌봅니다.",
    leader: "한소영 집사",
    schedule: "매주 주일 예배 후",
    icon: "Users",
  },
];
