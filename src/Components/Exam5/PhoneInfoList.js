import React, { Component } from 'react'

import PhoneInfo from './PhoneInfo'

export class PhoneInfoList extends Component {
    static defaultProps = {
        data: [],
        onRemove: () => console.log("onRemove not defined"),
        onUpdate: () => console.log("onUpdate not defined"),
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.data !== nextProps.data;
    }

    render() {
        console.log('render PhoneInfoList');
        const { data, onRemove, onUpdate } = this.props;
        const list = data.map(
            info => (
                <PhoneInfo
                    key={info.id}
                    info={info}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                />
            )
        );
        return (
            <div>
                {list}
            </div>
        )
    }
}

export default PhoneInfoList
