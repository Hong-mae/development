import React from 'react'
import qs from 'qs'

const About = ({ location }) => {
    console.log("hello");
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const showDetail = query.detail === "true";

    return (
        <div>
            <h1>소개</h1>        
            <p>이 프로젝트는 리액트 라우터 기초 실습입니다.</p>
            { showDetail && <p>detail 이 true인 각</p>}
        </div>
    )
}

export default About
