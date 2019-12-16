import React, { Component } from 'react'

export class Exam_4 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count : 0
        }
    }

    handleCountUp = () => {
        var now_count = this.state.count;

        this.setState({
            count : now_count + 1
        });
    }

    handleCountDown = () => {
        var now_count = this.state.count;

        this.setState({
            count : now_count - 1
        });
    }

    render() {
        return (
            <div>
                <p>
                    {this.state.count}&nbsp;
                    <button onClick={this.handleCountUp}>+</button>
                    <button onClick={this.handleCountDown}>-</button>
                </p>
            </div>
        )
    }
}

export default Exam_4
