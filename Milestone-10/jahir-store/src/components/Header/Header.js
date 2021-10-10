import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        Navbar
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link
                                    to="/home"
                                    className="nav-link active"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shipping" className="nav-link">
                                    Shipping
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">
                                    Register
                                </Link>
                            </li>
                            <li className="nav-item">
                                {!user?.email && (
                                    <Link to="/login" className="nav-link">
                                        Login
                                    </Link>
                                )}
                            </li>
                            <li className="nav-item">
                                {user?.email && (
                                    <Link
                                        to="/login"
                                        onClick={logout}
                                        className="nav-link"
                                    >
                                        Logout
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
