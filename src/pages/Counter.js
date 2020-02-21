import React, { Component } from 'react'

export class Counter extends Component {
    state = {
        number: 0,
        fixedNumber : 7
    }

    doubleincreaseNumber = () => {
        this.setState(prevState => {
            return {
                number : prevState.number + 2
            }
        })
    }

    increaseNumber = () => {
        const { number } = this.state;
        this.setState({
            number : number + 1
        })
    }

    setZero = () => {
        this.setState({
            number : 0
        })
    }

    decreaseNumber = () => {
        this.setState({
            number : this.state.number - 1
        })
    }

    doubledecreaseNumber = () => {
        this.setState(prevState => ({
            number : prevState.number - 2
        }),
            () => {
                console.log("-2 하셨음");
            }
        )
    }    
    render() {
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>fixedNumber : {fixedNumber}</h2>
                <button className="btn btn-primary btn-sm"
                    onClick = {this.doubleincreaseNumber}>
                        +2
                </button>
                <button className="btn btn-primary btn-sm"
                    onClick = {this.increaseNumber}>
                        +
                </button>
                <button className="btn btn-success btn-sm"
                    onClick = {this.setZero}>
                        0
                </button>
                <button className="btn btn-warning btn-sm"
                    onClick = {this.decreaseNumber}>
                        -
                </button>
                <button className="btn btn-warning btn-sm"
                    onClick = {this.doubledecreaseNumber}>
                        -2
                </button>
            </div>
        )
    }
}

export default Counter
