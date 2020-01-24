import React, { Component } from 'react'

import LifeCycle from '../Components/LifeCycle/LifeCycle'
import ErrorBoundary from '../Components/ErrorBoundry/ErrorBoundry'


function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);       
}

export class LifeCycleSample extends Component {
    constructor(props){
        super(props);

        this.state = {
            color: "#000000",
        }
    }

    handleClick = () => {
        this.setState({
            color: getRandomColor()
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Random Color</button>
                <ErrorBoundary>
                    <LifeCycle color={this.state.color}/>
                </ErrorBoundary>
            </div>
        )
    }
}

export default LifeCycleSample
