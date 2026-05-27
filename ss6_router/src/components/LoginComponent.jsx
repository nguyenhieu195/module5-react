import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useRef} from "react";
import {login} from "../redux/action.js";
import {toast} from "react-toastify";

const LoginComponent = () => {

    const userInfo = useSelector(state => state.user);
    const navigate = useNavigate();
    const usernameRef = useRef("");
    const passwordRef = useRef("");
    const dispatch = useDispatch();

    const handleLogin = async () => {
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        let isValid = dispatch(login(username, password));
        if (!isValid) {
            toast.error("Đăng nhập thất bại");
        } else {
            toast.success("Đăng nhập thành công");
            navigate("/");
        }
    }

    // const acountInfo = await checkLogin(username,password);
    // if (acountInfo!=null){
    //     console.log("----------login thành công ------------")
    //     dispatch(login(acountInfo));
    //     console.log(acountInfo)
    //     navigate("/students");
    // }else {
    //     console.log("-------login không thành công------------")
    // }

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card shadow p-4" style={{width: "400px"}}>
                    <form>
                        <h3 className="text-center mb-4">
                            Login {userInfo != null ? `- ${userInfo.username}` : ""}
                        </h3>

                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                ref={usernameRef}
                                name="username"
                                type="text"
                                className="form-control"
                                placeholder="Enter username"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="form-label">Password</label>
                            <input
                                ref={passwordRef}
                                name="password"
                                type="password"
                                className="form-control"
                                placeholder="Enter password"/>
                        </div>

                        <button type="button" onClick={handleLogin} className="btn btn-primary w-100">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginComponent;