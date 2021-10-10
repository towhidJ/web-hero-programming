import React, {Component} from 'react';
import WithCounter from "./HOC/WithCounter";



const ClickCounter = (props) => {

    const {count,incrementCount}=props;
    const btnStyle={
        backgroundColor:"orange",
        color:"black",
        padding:"10px",
        textAlign:"center",
        borderRadius:'15px',
        boxShadow:'10px 10px 10px gray',
    };

    return(
        <div style={{textAlign:"center", margin:"20px"}}>
            <button style={btnStyle} type="button" onClick={incrementCount}>Clicked {count} times</button>
        </div>
    );
};

export default WithCounter(ClickCounter);