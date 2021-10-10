import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "./components/Slider/Slider";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="App">
        <Header></Header>
      <Slider></Slider>
    </div>
  );
}

export default App;
