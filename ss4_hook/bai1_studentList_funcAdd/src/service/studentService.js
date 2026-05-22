const studentList = [
  {
    id: 1,
    name: "Ha",
  },
  {
    id: 2,
    name: "Dat",
  },
  {
    id: 3,
    name: "Van Hieu",
  },
];

export function getAll() {
  return [...studentList];
}

export function addStudent(student) {
  studentList.push(student);
}

export function deleteById(id){
    for (let i = 0; i <studentList.length ; i++) {
        if (studentList[i].id==id){
            studentList.splice(i,1);
            break
        }
    }
}