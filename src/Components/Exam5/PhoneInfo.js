import React, { Component } from 'react'

export class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            id: 0,
            name: '이름',
            phone: '010-0000-0000',
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            is_edit: false,
            name: '',
            phone: '',
        }
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;

        onRemove(info.id);
    }

    handleToggleEdit = () => {
        const { is_edit } = this.state;

        this.setState({
            is_edit: !is_edit
        });
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const { info, onUpdate } = this.props;

        if (!prevState.is_edit && this.state.is_edit) {
            this.setState({
                name: info.name,
                phone: info.phone
            })
        }

        if (prevState.is_edit && !this.state.is_edit) {
            onUpdate(info.id, {
                name: this.state.name,
                phone: this.state.phone
            })
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (!this.state.is_edit
            && !nextState.is_edit
            && nextProps.info === nextProps.info)
            return false;
        return true
    }

    render() {
        console.log('render PhoneInfo ' + this.props.info.id);

        const { is_edit } = this.state;

        if (is_edit) {
            return (
                <div className='PhoneInfo'>
                    <div>
                        <input
                            value={this.state.name}
                            name='name'
                            placeholder='이름'
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            value={this.state.phone}
                            name='phone'
                            placeholder='연락처'
                            onChange={this.handleChange}
                        />
                    </div>
                    <button onClick={this.handleToggleEdit}>적용</button>
                    <button onClick={this.handleRemove}>삭제</button>
                </div>
            );
        }

        const {
            name, phone, id
        } = this.props.info;

        return (
            <div className='PhoneInfo'>
                <div><p>{name}</p></div>
                <div>{phone}</div>
                <button onClick={this.handleToggleEdit}>수정</button>
                <button onClick={this.handleRemove}>삭제</button>
            </div>
        )
    }
}

export default PhoneInfo
