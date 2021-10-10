import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {useEffect, useState} from 'react'
import ThemeContext from './Component/ContextApi/themeContext'
import Blog from './Blog.js'
import ClickCounter from "./Component/ClickCounter";
import HoverCounter from "./Component/HoverCounter";
import UseRedu from "./Component/UseRedu";


function App() {

    const [post,setPost] = useState([]);
    const [theme,setTheme] = useState({
        theme:"dark"
    })
    useEffect(()=>{
        loadPost()
    },[])


    const loadPost=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res=>res.json())
            .then(data=>setPost(data) );
    }
/*
  const actorCoupoule = [
    { nayok: 'James Bond', nayika: 'Selina Gomej' },
    { nayok: 'Rudro', nayika: 'Gori' },
    { nayok: 'Kaku', nayika: 'Kaki' },
  ]*/



  return (
    <div className="cinema">
        <ClickCounter></ClickCounter>
        <ThemeContext.Provider value={theme}>
            <HoverCounter></HoverCounter>
        </ThemeContext.Provider>
        <UseRedu></UseRedu>
    </div>
  );
}



/*function Cinema(props) {
  return (
    <div className="cinema">
      <h1> Nayok: {props.nayok}</h1>
      <h3>Hero of: {props.nayika}</h3>
    </div>
  );
}*/



function Counter() {
  const [count, setCount] = useState(0);


  const changeIncrese = () => {
    const newCount = count+1;
    setCount(newCount);
  }
  const changeDecrese = () => {
    if(count>0)
    { 
      const newCount = count-1;
    setCount(newCount);
    }
    
  }

  const reset = () => {
       setCount(0);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={changeIncrese}>Incress</button>
      <button onClick={changeDecrese}>Decress</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}




export default App;
