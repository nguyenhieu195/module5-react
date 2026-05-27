import axios from "axios";

const api = import.meta.env.VITE_API_URL;

export async function getStudentList() {
    try {
        const res = await axios.get(`${api}/students`);
        return res.data;
    } catch (e) {
        console.log(e);
        return [];
    }
}

export async function addStudent(student) {
    try {
        const res = await axios.post(`${api}/students`, student);
        return res.status === 201;
    } catch (e) {
        console.log(e);
        return false;
    }
}

export async function deleteById(id) {
    try {
        const res = await axios.delete(`${api}/students/${id}`);
        return res.status === 200;
    } catch (e) {
        console.log(e);
        return false;
    }
}