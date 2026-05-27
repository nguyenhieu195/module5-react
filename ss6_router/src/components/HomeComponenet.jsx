import "./../styles/home.css";
import {Link} from "react-router-dom";

const HomeComponent = () => {
    return (
        <div className="home-container">
            <div className="overlay">
                <div className="home-content">
                    <h1 className="home-title">
                        Hệ Thống Quản Lý Sinh Viên
                    </h1>

                    <p className="home-description">
                        Quản lý thông tin sinh viên nhanh chóng, hiện đại và dễ sử dụng.
                    </p>

                    <Link to="/student" className="btn btn-primary home-btn">
                        Xem danh sách sinh viên
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeComponent;