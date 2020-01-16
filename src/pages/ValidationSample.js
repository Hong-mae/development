import React, { Component } from 'react'

import '../css/validate.scss'

export class ValidationSample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            clicked: false,
            validate: false,
        }
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleClick = (e) => {
        this.setState({
            clicked: true,
            validate: this.state.password === "0000",
        })
    }

    handleFocus = (e) => {
        this.setState({
            clicked: false,
            validate: false
        })
    }

    render() {
        return (
            <div>
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validate ? 'success' : 'failure') : ''}
                    onFocus={this.handleFocus}
                />
                <button onClick={this.handleClick}>검증하기</button>
            </div>
        )
    }
}

export default ValidationSample
