import React, { useState } from 'react'

const IterationSampe = () => {
    // const names = [ "눈사람", "얼음", "눈", "바람" ];
    // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    // return (
    //     <ul>
    //         {nameList}
    //     </ul>
    // )
    const [ names, setNames ] = useState([
        { id: 0, text: '눈사람'},
        { id: 1, text: '얼음'},
        { id: 2, text: '눈'},
        { id: 3, text: '바람'}
    ]);
    const [ inputText, setInputText ] = useState('');
    const [ nextId, setNextId ] = useState(4);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id : nextId,
            text: inputText
        })
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const nameList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));
    return (
        <>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>Add</button>
            <ul>{nameList}</ul>
        </>
    )
}

export default IterationSampe
