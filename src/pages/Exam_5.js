import React, { Component } from 'react'

import PhoneForm from '../Components/Exam5/PhoneForm'
import PhoneInfoList from '../Components/Exam5/PhoneInfoList'

export class Exam_5 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            information: [
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
            ],
            keyword: '',
        }
    }

    handleCreate = (data) => {
        const { information } = this.state;
        var id = '';
        if (information.length < 1) {
            id = 0;
        } else {
            var temp = Array.from(information);
            id = temp[temp.length - 1].id + 1;
        }

        this.setState({
            information: information.concat({ id: id, ...data })
        });
    }

    handleRemove = (id) => {
        const { information } = this.state;

        console.log(id);

        this.setState({
            information: information.filter(info => info.id !== id)
        })
    }

    handleChange = (e) => {
        this.setState({
            keyword: e.target.value,
        });
    }

    handleUpdate = (id, data) => {
        const { information } = this.state;

        this.setState({
            information: information.map(
                info => id === info.id
                    ? { ...info, ...data }
                    : info
            )
        })
    }

    render() {
        const { information, keyword } = this.state;
        const filteredList = information.filter(
            info => info.name.indexOf(keyword) !== -1
        );

        return (
            <div>
                <PhoneForm onCreate={this.handleCreate} />
                <p>
                    <input
                        placeholder="검색 할 이름을 입력하세요.."
                        onChange={this.handleChange}
                        value={keyword}
                    />
                </p>
                <PhoneInfoList
                    data={filteredList}
                    onRemove={this.handleRemove}
                    onUpdate={this.handleUpdate}
                />
            </div>
        )
    }
}

export default Exam_5
