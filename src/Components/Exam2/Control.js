import React, { Component } from 'react'

export class Control extends Component {
    handleOnClick = (_e) => {
        _e.preventDefault();
        this.props.onChangeMode(_e.target.name);
    };

    render() {
        return (
            <div>
                <ul>
                    <li><a href='/Create' name='create' onClick={this.handleOnClick}>Create</a></li>
                    <li><a href='/Update' name='update' onClick={this.handleOnClick}>Update</a></li>
                    <li><input type='button' value='Delete' name='delete' onClick={this.handleOnClick}/></li>
                </ul>
            </div>
        )
    }
}

export default Control
