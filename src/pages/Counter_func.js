import React, { useState } from 'react'

const Counter_func = () => {
    const [ value, setValue ] = useState(0);

    return (
        <div>
            <p>Counter is <b>{value}</b></p>
            <button onClick={() => setValue(value + 1)}>+</button>
            <button onClick={() => setValue(value - 1)}>-</button>
        </div>
    )
}

export default Counter_func
