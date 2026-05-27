import './App.css'
import {ToastContainer} from "react-toastify";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import HeaderComponenet from "./components/HeaderComponenet.jsx";
import {Route, Routes} from "react-router-dom";
import HomeComponent from "./components/HomeComponenet.jsx";
import StudentList from "./components/StudentList.jsx";
import AddComponent from "./components/AddComponent.jsx";

function App() {


    return (
        <>
            <ToastContainer/>
            <HeaderComponenet/>
            <Routes>
                <Route path={'/'} element={<HomeComponent/>}/>
                <Route path={'/student'} element={<StudentList/>}></Route>
                <Route path={'/student/add'} element={<AddComponent/>}></Route>
            </Routes>
        </>
    );
}

export default App
