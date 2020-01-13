import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            number: 0,
            fixedNumber : 7
        }
    }

    increaseNumber = () => {
        const { number } = this.state;
        this.setState({
            number : number + 1
        })
    }

    decreaseNumber = () => {
        const { number } = this.state;
        this.setState({
            number : this.state.number - 1
        })
    }
    
    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>fixedNumber : {fixedNumber}</h2>
                <button
                    onClick = {this.increaseNumber}>
                        +
                </button>
                <button
                    onClick = {this.decreaseNumber}>
                        -
                </button>
            </div>
        )
    }
}

export default Counter
