import React, { useReducer } from 'react'
import useInputs from '../Components/CustomHook/useInputs'

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nick: ''
    })

    const { name, nick } = state;

    return (
        <div>
            <input name='name' value={name} onChange={onChange} placeholder='이름' />
            <input name='nick' value={nick} onChange={onChange} placeholder='닉네임' />
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
