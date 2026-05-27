import axios from "axios";

const api = import.meta.env.VITE_API_URL;

export async function checkLogin(un, pw) {
    try {
        const response = await axios.get(`${api}/accounts`);
        const account = response.data.find(acc => acc.username == un && acc.password == pw);
        return account;
    } catch (err) {
        console.log(err);
        return null;
    }
}