import { Fingerprint } from "@mui/icons-material";
import { Box, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";

const Login = (props) => {
    const [state, setState] = useState({ username: "", password: "" });
    const { auth, authHandler } = props;
    console.log("props:- ", auth);
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleClick = async (e: SyntacticEvent) => {
        await fetch(`https://localhost:44323/api/Account/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(state),
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("token", data.token);
                localStorage.setItem("isLogin", true);
                authHandler(true);
            })
            .catch((err) => {
                console.log(err);
                localStorage.setItem("isLogin", false);
                authHandler(false);
            });
    };
    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="login">
                <div>
                    <TextField
                        type="text"
                        id="standard-disabled"
                        name="username"
                        label="Username"
                        value={state.username}
                        onChange={handleChange}
                        variant="standard"
                    />
                </div>
                <div>
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        name="password"
                        defaultValue={state.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        variant="standard"
                    />
                </div>
                <div>
                    <IconButton
                        aria-label="fingerprint"
                        color="secondary"
                        onClick={handleClick}
                    >
                        <Fingerprint /> Login
                    </IconButton>
                </div>
            </div>
        </Box>
    );
};

export default Login;
