import React, { Component } from 'react'

export class PhoneForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name    : '',
            phone   : '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onCreate(this.state);

        this.setState({
            name    : '',
            phone   : ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder = '이름'
                    value       = {this.state.name}
                    onChange    = {this.handleChange}
                    name        = 'name'
                />
                <input
                    placeholder = '연락처'
                    value       = {this.state.phone}
                    onChange    = {this.handleChange}
                    name        = 'phone'
                />
                <button type='submit'>등록</button>
            </form>
        )
    }
}

export default PhoneForm
