import React, { useEffect, useState } from "react";
import { getAll, addStudent } from "../service/studentService.js";

import DeleteModal from "./DeleteModal.jsx";

const StudentList = () => {
  const [deleteStudent, setDeleteStudent] = useState({
    id: "",
    name: "",
  });

  const [studentList, setStudentList] = useState([]);

  // thêm sv
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const [isShowModal, setIsShowModal] = useState(false);
  const [reloading, setReloading] = useState(false);
  useEffect(() => {
    setStudentList([...getAll()]);
  }, [reloading]);
  const closeModal = () => {
    setIsShowModal(false);
  };

  const handleOpenModal = (student) => {
    setIsShowModal(true);
    setDeleteStudent(student);
  };

  const handleAddStudent = () => {
    const student = {
      id: id,
      name: name,
    };
    addStudent(student);
    setId("");
    setName("");
    setStudentList([...getAll()]);
  };

  return (
    <>
      <h1>Danh sách sinh viên</h1>
      <input
        type="text"
        placeholder="id sv"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="ten sv"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddStudent}>them sv</button>
      <table className={"table table-striped table-dark"}>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Tên</th>
            <th>Xoá</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student, i) => (
            <tr key={student.id}>
              <td>{i + 1}</td>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>
                <button
                  onClick={() => {
                    handleOpenModal(student);
                  }}
                  className={"btn btn-sm btn-danger"}
                >
                  Xoá
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DeleteModal
        deleteStudent={deleteStudent}
        isShow={isShowModal}
        closeModal={closeModal}
        setReloading={setReloading}
      />
    </>
  );
};
export default StudentList;
