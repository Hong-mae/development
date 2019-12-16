import React, { Component } from 'react'

import '../../css/PhoneInfo.scss'

export class PhoneInfo extends Component {
    static defaultProps = {
        info : {
            id      : 0,
            name    : '이름',
            phone   : '010-0000-0000',
        }
    }
    render() {
        const {
            name, phone, id
        } = this.props.info;

        return (
            <div className = 'PhoneInfo'>
                <div><p>{name}</p></div>
                <div>{phone}</div>
            </div>
        )
    }
}

export default PhoneInfo
