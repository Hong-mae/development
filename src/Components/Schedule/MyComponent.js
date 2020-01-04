import React from 'react'

const MyComponent = (props) => {
    return (
        <div>
            안녕하세요, 제 이름은 {props.name}입니다.<br />

            children is {props.children}
        </div>
    )
}

MyComponent.defaultProps = {
    name: "react"
}

export default MyComponent
