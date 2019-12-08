import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
                <Link to='/'>Home</Link>&nbsp;
                <Link to='/Exam1'>Exam1</Link>&nbsp;
                <Link to='/Exam2'>Exam2</Link>
            </div>
        )
    }
}

export default Header
