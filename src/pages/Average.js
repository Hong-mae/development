import React, { useState, useMemo } from 'react'

const getrAverage = (numbers) => {
    console.log("Start of average calculation ...");
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a,b) => a + b);
    return sum / numbers.length;
}

const Average = () => {
    const [ list, setList ] = useState([]);
    const [ number, setNumber ] = useState('');

    const onChange = (e) => {
        setNumber(e.target.value);
    }
    const onInsert = (e) => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }

    const avg = useMemo(() => getrAverage(list), [list]);

    return (
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>Insert</button>
            <ul>
                {list.map((v, i) => (
                    <li key={i}>{v}</li>
                ))}
            </ul>
            <div>
                <b>Average : </b>{avg}
            </div>
        </div>
    )
}

export default Average
