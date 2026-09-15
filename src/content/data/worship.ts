export interface WorshipService {
  id: string;
  name: string;
  time: string;
  day: string;
  location: string;
  description: string;
}

export const worshipServices: WorshipService[] = [
  {
    id: "sunday-main",
    name: "주일오전예배",
    time: "오전 11:00",
    day: "주일",
    location: "본당",
    description: "온 세대가 함께 드리는 주일 예배",
  },
  {
    id: "wednesday",
    name: "수요저녁기도회",
    time: "저녁 7:00",
    day: "수요일",
    location: "본당",
    description: "말씀 묵상과 기도의 시간",
  },
  {
    id: "sunday-afternoon",
    name: "주일오후예배",
    time: "오후 1:30",
    day: "주일",
    location: "본당",
    description: "오후에 드리는 감사와 찬양의 예배",
  },
  {
    id: "dawn",
    name: "새벽기도",
    time: "오전 6:00",
    day: "토요일",
    location: "본당",
    description: "기도로 시작하는 말씀의 시간",
  },
];
