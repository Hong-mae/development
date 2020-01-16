import React, { Component } from 'react'

export class RefSample extends Component {
    input = React.createRef();

    handleFocus = () => {
        this.input.current.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.inpu}/>
            </div>
        )
    }
}

export default RefSample
