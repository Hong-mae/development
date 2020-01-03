import React, { Component } from 'react'

import '../../css/to_do_list_item_template.scss';

export class to_do_list_item_template extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return this.props.checked !== nextProps.checked;
    }

    handleOnToggle = () => {
        const { id, onToggle } = this.props;

        onToggle(id);
    }

    handleOnClick = (e) => {
        const { id, onRemove } = this.props;
        e.stopPropagation(); // onToggle 이 실행되지 않도록 함
        onRemove(id)
    }

    render() {
        const { text, checked, color } = this.props;

        return (
            <div className="todo-item" onClick={this.handleOnToggle}>
                <div className="remove" onClick={this.handleOnClick}>&times;</div>
                <div className={`todo-text ${checked && 'checked'} ${color}`}>
                    <div className='todo-text-content'>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">&#x2713;</div>)
                }
            </div>
        )
    }
}

export default to_do_list_item_template
