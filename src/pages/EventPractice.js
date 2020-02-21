import React, { Component } from 'react'

export class EventPractice extends Component {
    state = {
        message : ''
    }
    handleOnChage = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleResetMessage = (e) => {
        alert(this.state.username + " : " + this.state.message);
        this.setState({
            username: '',
            message: ''
        })
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleResetMessage();
        }
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type='text'
                    name='username'
                    placeholder='사용자명'
                    value={this.state.username}
                    onChange={this.handleOnChage}
                />
                <input
                    type='text'
                    name='message'
                    placeholder='아무거나 입력'
                    value={this.state.message}
                    onChange={this.handleOnChage}
                    onKeyPress={this.handleKeyPress}
                />
                <button
                    className='btn btn-dark btn-sm'
                    onClick={this.handleResetMessage}
                >
                    확인
                </button>
            </div>
        )
    }
}

export default EventPractice
