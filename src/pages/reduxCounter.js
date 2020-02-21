import React from 'react'
import CounterContainer from '../container/CounterContainer'
import TodosContainer from '../container/TodosContainer'

const reduxCounter = () => {
    return (
        <div>
            <CounterContainer />
            <hr />
            <TodosContainer/>
        </div>
    )
}

export default reduxCounter
