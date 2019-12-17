import React, { Component } from 'react'

export class Exam_3 extends Component {
    render() {
        return (
            <div>
                <h1>CRA(Create-React-App)에 SASS/SCSS 사용하기</h1>
                <p>의외로 간단하다! 아래에 따라 시작하자</p>
                <ol>
                    <li>npm i node-sass --save</li>
                    <li>원하는 scss 생성 밎 import</li>
                    <li>끝</li>
                </ol>

                <h2>개발 환경 별 변수 설정법!</h2>
                <ol>
                    <li>npm start : .env.development.local</li>
                    <li>npm deploy & npm build : .env.production.local</li>
                </ol>
            </div>
        )
    }
}

export default Exam_3
