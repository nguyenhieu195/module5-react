import {Link, NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../redux/action.js";

const HeaderComponent = () => {

    const account = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/student">Student management</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/student/add">Add Student</Link>
                            </li>
                            <li className="nav-item">
                                {(account == null) ? (
                                    <NavLink className={({isActive}) => `nav-link ${isActive ? 'active-link' : ''}`}
                                             to="/login">Login</NavLink>) : ('')}
                            </li>
                            <li className="nav-item">
                                {(account !== null) ? (
                                    <NavLink className={({isActive}) => `nav-link ${isActive ? 'active-link' : ''}`}
                                             to="/logout" onClick={handleLogout}>Logout</NavLink>) : ("")}
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => `nav-link ${isActive ? 'active-link' : ''}`}
                                         to="/info">{(account == null) ? "" : account.username}</NavLink>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default HeaderComponent;