import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./page/auth/Login";

function App() {
    const [auth, setAuth] = useState();

    const authHandler = (login) => {
        if (login) {
            setAuth(true);
            console.log("login: ", auth);
        } else {
            setAuth(false);
        }
    };
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Header auth={auth}></Header>
                        <Login auth={auth} authHandler={authHandler}></Login>
                    </Route>
                    <Route exact path="/home">
                        <Header auth={auth}></Header>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
