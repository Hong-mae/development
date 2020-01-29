import React from 'react'

const data = {
    velopert: {
        name: '김민준',
        description: '리액트 개발자'
    },
    gildong: {
        name: '홍길동',
        description: '동해번쩍 서해번쩍'
    },
    "p-bin": {
        name: '박한빈',
        description: '리액트 개발할꺼야'
    }
}
const Profile = ({ match }) => {
    const {username} = match.params;
    const profile = data[username];

    console.log(username, data[`'${username}'`]);
    if(!profile){
        return <div>존재하지 않음.</div>
    }
    return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile
