import React, { useReducer } from 'react'

function reducer(state, action) {
    switch(action.type){
        case 'INCREMENT' :
            return {value : state.value + 1};
        case 'DECREMENT' :
            return {value : state.value - 1};
        default :
            return state;
    }
}

const Counter_reducer = () => {
    const [ state, dispatch ] = useReducer(reducer, { value : 1 });

    return (
        <div>
            <p>Counter is <b>{state.value}</b></p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
        </div>
    )
}

export default Counter_reducer
