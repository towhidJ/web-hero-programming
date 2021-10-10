import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavL from "./components/Nav/NavL";
import NewsApi from "./components/NewsApi/NewsApi";
import Shop from './components/Shop/Shop';

function App() {



    return (
        <Router>
            <div className="App">
                <NavL></NavL>

                <Switch>
                    <Route exact path="/Shop">
                        <Shop />
                    </Route>
                    <Route exact path="/">
                        <NewsApi></NewsApi>
                    </Route>
                    <Route exact path="*">
                        <p>Not found</p>
                    </Route>
                </Switch>
            </div>

        </Router>
    );
}

export default App;
