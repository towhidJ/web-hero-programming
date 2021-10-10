import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "../Login/Login.css";

const Register = () => {
    const { userRegisterWithPassword } = useAuth();
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInfo((prevState) => ({ ...prevState, [name]: value }));
        console.log(name + ": " + value);
    };

    const { email, password } = userInfo;
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-light fs-5">
                                Sign Up
                            </h5>
                            <form>
                                {/* <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="Abu Tayeb"
                                        name="name"
                                    />
                                    <label htmlFor="floatingInput">Name</label>
                                </div> */}
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="floatingInput">
                                        Email address
                                    </label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        name="password"
                                        value={password}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="floatingPassword">
                                        Password
                                    </label>
                                </div>
                                <div className="d-grid">
                                    <button
                                        onClick={(e) =>
                                            userRegisterWithPassword(
                                                e,
                                                email,
                                                password
                                            )
                                        }
                                        className="btn btn-primary btn-login text-uppercase fw-bold"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                                <div className="d-grid">
                                    <p className="text-primary text-center">
                                        <Link to="/login">
                                            Already Have an Account
                                        </Link>
                                    </p>
                                </div>
                                <hr className="my-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
