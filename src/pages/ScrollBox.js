import React, { Component } from 'react'

import ScrollBox_Template from '../Components/ScrollBox/ScrollBox_Template'

export class ScrollBox extends Component {
    scrollboxRef = (ref) => {
        this.scrollBox = ref;
    }

    handleOnClick = (e) => {
        this.scrollBox.scrollToBottom();
    }
    
    render() {
        return (
            <div>
                <ScrollBox_Template ref={this.scrollboxRef}/>
                <button onClick={this.handleOnClick}>
                    맨 밑으로
                </button>
            </div>
        )
    }
}

export default ScrollBox
