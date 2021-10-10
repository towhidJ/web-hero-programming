import React from 'react';
import WithCounter from "./HOC/WithCounter";

const HoverCounter=(props)=> {
    const {count,incrementCount}=props;
    return (
        <div>
            <p onMouseOver={incrementCount}>Hover Mouse {count} times</p>
        </div>
    );
}

export default WithCounter(HoverCounter);