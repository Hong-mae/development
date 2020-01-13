import React, { useState } from 'react'

const Say = () => {
    const [ message, setMessage ] = useState('');
    const onClickEnter = () => setMessage('아릉하세연?');
    const onClickLeave = () => setMessage('아릉이가 가세연?');

    const [ color, setColor ] = useState('black');

    return (
        <div>
            <button className='btn btn-secondary btn-lg' onClick={onClickEnter}>입장</button>
            <button className='btn btn-secondary btn-lg' onClick={onClickLeave}>퇴장</button>
            
            <h1 style={{color}}>{message}</h1>

            <button className='btn btn-danger btn-sm' onClick={() => setColor('red')}>RED</button>
            <button className='btn btn-success btn-sm' onClick={() => setColor('green')}>GREEN</button>
            <button className='btn btn-primary btn-sm' onClick={() => setColor('blue')}>BLUE</button>
        </div>
    )
}

export default Say
