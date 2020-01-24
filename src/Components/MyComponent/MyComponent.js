import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class MyComponent extends Component {
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    }

    static defaultProps = {
        name: 'base name'
    }

    render() {
        const { name, favoriteNumber, children } = this.props;
        return (
            <div>
                Hi! My name is {name}. <br />
                Children value is {children}. <br />
                My favorite number is {favoriteNumber}.
            </div>
        )
    }
}

export default MyComponent
