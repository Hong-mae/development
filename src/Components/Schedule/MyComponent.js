import React from 'react'
import PropTypes from 'prop-types'

const MyComponent = ({ name, children }) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다.<br />

            children is {children}
        </div>
    )
}

MyComponent.defaultProps = {
    name: "react"
}

MyComponent.propTypes = {
    name: PropTypes.string
}

export default MyComponent
