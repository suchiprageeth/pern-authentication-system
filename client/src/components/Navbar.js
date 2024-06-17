import {NavLink} from "react-router-dom";

const Navbar = () => {
    const isAuth = false
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand">PERN Authentication</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {isAuth ? (
                            <li className="nav-item">
                            <NavLink to='/dashboard' className="nav-link">Dashboard</NavLink>
                            </li>
                        ): (
                            <>
                                <li className="nav-item">
                                    <NavLink to='/login' className="nav-link">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/register' className="nav-link">Register</NavLink>
                                </li>
                            </>
                        )}

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;