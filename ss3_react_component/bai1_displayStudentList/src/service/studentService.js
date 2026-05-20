const studentList = [
  {
    id: 1,
    name: "hiếu",
    age: 18,
    address: "quảng trị",
  },
  {
    id: 2,
    name: "tài",
    age: 12,
    address: "đà nẵng",
  },
  {
    id: 3,
    name: "đạt",
    age: 32,
    address: "quảng bình",
  },
  {
    id: 4,
    name: "đăng",
    age: 42,
    address: "quảng bình",
  },
  {
    id: 5,
    name: "vinh",
    age: 14,
    address: "daklak",
  },
];

export function getAll() {
  // call API
  return [...studentList];
}

