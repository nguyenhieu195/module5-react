import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getClassList} from "../service/classService.js";
import {addStudent} from "../service/studentService.js";
import {toast} from "react-toastify";
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Button} from "react-bootstrap";

import "../styles/add-student.css";

const AddComponent = () => {

    const navigate = useNavigate();

    const [classList, setClassList] = useState([]);

    const [newStudent] = useState({
        id: "",
        name: "",
        gender: "",
        class: "",
        dob: "",
        email: "",
        phone: ""
    });

    useEffect(() => {

        const fetData = async () => {
            let list = await getClassList();
            setClassList(list);
        };

        fetData();

    }, []);

    const handleAddStudent = (value) => {

        value = {
            ...value,
            id: Number(value.id),
            gender: value.gender === "true",
            class: JSON.parse(value.class)
        };

        const fetData = async () => {

            let isSuccess = await addStudent(value);

            if (isSuccess) {
                toast.success("✅ Thêm sinh viên thành công");
                navigate("/student");
            } else {
                toast.error("❌ Có lỗi xảy ra");
            }
        };

        fetData();
    };

    const validate = Yup.object({

        id: Yup.number()
            .required("ID không được để trống")
            .min(1, "ID phải lớn hơn 0"),

        name: Yup.string()
            .required("Tên không được để trống")
            .min(3, "Tên tối thiểu 3 ký tự")
            .max(50, "Tên tối đa 50 ký tự"),

        gender: Yup.string()
            .required("Vui lòng chọn giới tính"),

        class: Yup.string()
            .required("Vui lòng chọn lớp"),

        dob: Yup.date()
            .required("Ngày sinh không được để trống"),

        email: Yup.string()
            .required("Email không được để trống")
            .email("Email không hợp lệ"),

        phone: Yup.string()
            .required("Số điện thoại không được để trống")
            .matches(
                /^(0[3|5|7|8|9])[0-9]{8}$/,
                "Số điện thoại không đúng định dạng"
            )
    });

    return (

        <div className="add-container">

            <h1 className="add-title">
                Thêm sinh viên
            </h1>

            <Formik
                initialValues={newStudent}
                onSubmit={handleAddStudent}
                validationSchema={validate}
            >

                <Form>

                    <div className="form-group">

                        <label className="form-label">
                            ID
                        </label>

                        <Field
                            type="text"
                            name="id"
                            className="form-control"
                        />

                        <ErrorMessage
                            name="id"
                            component="small"
                            className="error-text"
                        />

                    </div>

                    <div className="form-group">

                        <label className="form-label">
                            Name
                        </label>

                        <Field
                            type="text"
                            name="name"
                            className="form-control"
                        />

                        <ErrorMessage
                            name="name"
                            component="small"
                            className="error-text"
                        />

                    </div>

                    <div className="form-group">

                        <label className="form-label">
                            Gender
                        </label>

                        <div className="gender-group">

                            <label>
                                <Field
                                    type="radio"
                                    name="gender"
                                    value="true"
                                />

                                <span className="ms-2">
                                    Male
                                </span>
                            </label>

                            <label>
                                <Field
                                    type="radio"
                                    name="gender"
                                    value="false"
                                />

                                <span className="ms-2">
                                    Female
                                </span>
                            </label>

                        </div>

                        <ErrorMessage
                            name="gender"
                            component="small"
                            className="error-text"
                        />

                    </div>

                    <div className="form-group">

                        <label className="form-label">
                            Class
                        </label>

                        <Field
                            as="select"
                            name="class"
                            className="form-select"
                        >

                            <option value="">
                                Select a class
                            </option>

                            {classList.map((cls) => (

                                <option
                                    key={cls.id}
                                    value={JSON.stringify(cls)}
                                >
                                    {cls.name}
                                </option>

                            ))}

                        </Field>

                        <ErrorMessage
                            name="class"
                            component="small"
                            className="error-text"
                        />

                    </div>

                    <div className="form-group">

                        <label className="form-label">
                            Date of Birth
                        </label>

                        <Field
                            type="date"
                            name="dob"
                            className="form-control"
                        />

                        <ErrorMessage
                            name="dob"
                            component="small"
                            className="error-text"
                        />

                    </div>

                    <div className="form-group">

                        <label className="form-label">
                            Email
                        </label>

                        <Field
                            type="email"
                            name="email"
                            className="form-control"
                        />

                        <ErrorMessage
                            name="email"
                            component="small"
                            className="error-text"
                        />

                    </div>

                    <div className="form-group">

                        <label className="form-label">
                            Phone
                        </label>

                        <Field
                            type="text"
                            name="phone"
                            className="form-control"
                        />

                        <ErrorMessage
                            name="phone"
                            component="small"
                            className="error-text"
                        />

                    </div>

                    <Button
                        variant="primary"
                        type="submit"
                        className="submit-btn"
                    >
                        Add Student
                    </Button>

                </Form>

            </Formik>

        </div>
    );
};

export default AddComponent;