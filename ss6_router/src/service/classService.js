import axios from "axios";

const api = import.meta.env.VITE_API_URL;

export async function getClassList() {
    const res = await axios.get(`${api}/classes`);
    return res.data;
}