import React, { useState, useEffect } from 'react'


const Info = () => {
    const [ visible, setVisible ] = useState(false);
    const [ name, setName ] = useState('');
    const [ nick, setNick ] = useState('');
    
    useEffect(() => {
        console.log('effect', {name, nick});
        return () => {
            console.log('cleanup', {name, nick});
        };
    },[name, nick])

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChageNick = (e) => {
        setNick(e.target.value);
    }

    return (
        <div>
            <button onClick={() => {
                setVisible(!visible);
            }}>{visible ? 'hide' : 'show' }</button>
            <hr/>
            { visible && 
            <div>
                <input onChange={onChangeName} placeholder='이름'/>
                <input onChange={onChageNick} placeholder='닉네임'/>
                <div>
                    <b>Name : </b>{name}
                </div>
                <div>
                    <b>NickName : </b>{nick}
                </div>
            </div>}
        </div>
    )
}

export default Info
