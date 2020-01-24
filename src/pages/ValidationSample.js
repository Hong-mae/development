import React, { Component } from 'react'

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
        });

        this.input.focus();
    }

    handleFocus = (e) => {
        this.setState({
            clicked: false,
            validate: false
        })
    }

    handleRef = (ref) => {
        this.input = ref;
    }

    render() {
        return (
            <div>
                <input
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validate ? 'success' : 'failure') : ''}
                // ref={this.handleRef}
                />
                <button onClick={this.handleClick}>검증하기</button>
            </div>
        )
    }
}

export default ValidationSample
