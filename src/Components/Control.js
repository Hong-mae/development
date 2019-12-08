import React, { Component } from 'react'

export class Control extends Component {
    handleOnClick = (_e) => {
        _e.preventDefault();
    };

    handleOnCreate = (e) => {
        this.handleOnClick(e);
        this.props.onChangeMode('create');
    }

    handleOnUpdate = (e) => {
        this.handleOnClick(e);
        this.props.onChangeMode('update');
    }

    render() {
        return (
            <div>
                <ul>
                    <li><a href='/Create' onClick={this.handleOnCreate}>Create</a></li>
                    <li><a href='/Update' onClick={this.handleOnUpdate}>Update</a></li>
                    <li><input type='button' value='Delete'/></li>
                </ul>
            </div>
        )
    }
}

export default Control
