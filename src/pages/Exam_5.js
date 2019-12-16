import React, { Component } from 'react'

import PhoneForm from '../Components/Exam5/PhoneForm'
import PhoneInfoList from '../Components/Exam5/PhoneInfoList'

export class Exam_5 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            information : [
                {
                    id: 0,
                    name: '김민준',
                    phone: '010-0000-0000'
                },
                {
                    id: 1,
                    name: '홍길동',
                    phone: '010-0000-0001'
                }
            ]
        }
    }

    handleCreate = (data) => {
        const { information } = this.state;
        var id = information.length;

        this.setState({
            information: information.concat( { id: id, ...data } )
        });
    }

    render() {
        const { information } = this.state;
        return (
            <div>
                <PhoneForm onCreate={this.handleCreate}/>
                <PhoneInfoList data={this.state.information}/>
            </div>
        )
    }
}

export default Exam_5
