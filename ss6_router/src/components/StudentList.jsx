import React, {useEffect, useState} from "react";
import {getStudentList} from "../service/studentService.js";
import DeleteModal from "./DeleteModal.jsx";
import {Link} from "react-router-dom";
import "../styles/student-list.css";

const StudentList = () => {
    const [deleteStudent, setDeleteStudent] = useState({
        id: "",
        name: "",
    });

    const [studentList, setStudentList] = useState([]);

    const [isShowModal, setIsShowModal] = useState(false);
    const [reloading, setReloading] = useState(false);

    useEffect(() => {
            const fetData = async () => {
                let list = await getStudentList();
                setStudentList(list);
            }
            fetData();
        }, [reloading]
    );

    const closeModal = () => {
        setIsShowModal(false);
    };

    const handleOpenModal = (student) => {
        setIsShowModal(true);
        setDeleteStudent(student);
    };

    return (
        <div className="student-container">
            <Link to={"/student/add"} className="btn btn-primary add-btn">
                Thêm mới
            </Link>

            <h1 className="student-title">Danh sách sinh viên</h1>

            <table className={"table table-striped table-hover student-table"}>
                <thead className="table-dark">
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
                                className={"btn btn-danger btn-sm delete-btn"}
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
        </div>
    );
};

export default StudentList;