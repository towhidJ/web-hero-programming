import React, {useReducer} from 'react';

const initialState = {
    counter:0,
};
const reducer = (state,action)=>{
    switch (action.type){
        case 'increment':
            return {counter:state.counter+1};
        case 'decrement':
            return {counter:state.counter-1};
        default:
            return state;
    }
}
const UseRedu = () => {

    const [count,dispatch] = useReducer(reducer,initialState);
    return (
        <div>
            <h1>Count: {count.counter}</h1>
            <button
                type="button"
                onClick={()=>
                    dispatch({type:'increment',
                    })
                }
            >
                Incress
            </button>
        </div>
    );
};

export default UseRedu;