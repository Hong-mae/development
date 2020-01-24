import React, { useState, useEffect } from 'react'

const Info = () => {
    const [ name, setName ] = useState('');
    const [ nick, setNick ] = useState('');
    useEffect(() => {
        console.log("randering complete");
        console.log({name, nick});
    }, [])

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChageNick = (e) => {
        setNick(e.target.value);
    }

    return (
        <div>
            <input onChange={onChangeName} placeholder='이름'/>
            <input onChange={onChageNick} placeholder='닉네임'/>
            <div>
                <b>Name : </b>{name}
            </div>
            <div>
                <b>NickName : </b>{nick}
            </div>
        </div>
    )
}

export default Info
