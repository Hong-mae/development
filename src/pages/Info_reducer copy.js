import React, { useReducer } from 'react'

function reducer(state, action){
    return {
        ...state,
        [action.name] : action.value
    }
}

const Info = () => {
    const [ state, dispatch ] = useReducer(reducer, {
        name: '',
        nick: ''
    })
    
    const { name, nick } = state;

    const onChange = (e) => {
        dispatch(e.target);
    }

    return (
        <div>
            <input name='name' value={name} onChange={onChange} placeholder='이름'/>
            <input name='nick' value={nick} onChange={onChange} placeholder='닉네임'/>
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
