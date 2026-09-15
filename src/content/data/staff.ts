export interface StaffMember {
  name: string;
  role: string;
  department: string;
  description: string;
  imageUrl?: string;
}

export const staffMembers: StaffMember[] = [
  {
    name: "김진호",
    role: "담임목사",
    department: "총괄",
    description:
      "광주새서광교회를 섬기며, 말씀과 기도로 성도들과 함께 걸어갑니다.",
  },
  {
    name: "이승현",
    role: "부목사",
    department: "교육부",
    description:
      "다음 세대의 신앙 교육과 청년부 사역을 담당하고 있습니다.",
  },
  {
    name: "박은혜",
    role: "전도사",
    department: "유초등부",
    description:
      "어린이들이 하나님의 사랑 안에서 자라도록 돕고 있습니다.",
  },
  {
    name: "최민수",
    role: "전도사",
    department: "청년부",
    description:
      "청년들과 함께 예배하며 삶 속에서 신앙을 실천하도록 격려합니다.",
  },
];
