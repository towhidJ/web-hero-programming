import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import Shipping from "./components/Shipping/Shipping";
import AuthProvider from "./context/AuthProvider";
function App() {
    return (
        <AuthProvider>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Login></Login>
                    </Route>
                    <Route exact path="/home">
                        <Home></Home>
                    </Route>
                    <Route exact path="/register">
                        <Register></Register>
                    </Route>
                    <Route exact path="/login">
                        <div className="App">
                            <Login></Login>
                        </div>
                    </Route>

                    <PrivateRoute path="/shipping">
                        <div className="App">
                            <Shipping></Shipping>
                        </div>
                    </PrivateRoute>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
