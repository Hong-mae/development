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
        { id: '0', text: '눈사람'},
        { id: '1', text: '얼음'},
        { id: '2', text: '눈'},
        { id: '3', text: '바람'}
    ]);
    const [ inputText, setInputText ] = useState('');
    const [ nextId, setNextId ] = useState(4);

    const nameList = names.map(name => <li kye={name.id}>{name.text}</li>);
    return (
        <ul>{nameList}</ul>
    )
}

export default IterationSampe
