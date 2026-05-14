const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  gender: "male",
  occupation: "developer",
  nationality: "American",
  city: "New York",
  hobbies: ["reading", "traveling", "photography"],
  languages: ["English", "Spanish"],
  education: {
    degree: "Bachelor",
    major: "Computer Science",
    university: "Harvard University",
  },
};

// dùng destructuring và rest (...) để tách thông tin, lấy riêng occupation để định nghĩa lại là student
// toàn bộ dữ liệu còn lại được gom vào biến restOfPerson
const {firstName, gender, education: {degree}, occupation, ...restOfPerson } = person;

const student = {
  ...restOfPerson, // spread : sao chép toàn bộ thuộc tính của restOfPerson
  occupation: "student", // ghi đè lại
  gpa: 3.4, // khỏi tạo thuộc tính mới
};


const student2 = {
    firstName,
    gender,
    degree,
    english: 'English'
}
console.log("------ Thông tin của Student vừa tạo: ------");
console.log(student);
console.log("------ Yêu cầu bài 2: ------");
console.log(student2);
