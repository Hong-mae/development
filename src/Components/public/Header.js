import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../css/_navbar.scss'

export class Header extends Component {
    render() {
        return (
            <nav className='navbar'>
                <Link className='navbar-item' to='/'>홈</Link>
                <Link className='navbar-item' to='/Exam1'>예제1</Link>
                <Link className='navbar-item' to='/Exam2'>예제2</Link>
                <Link className='navbar-item' to='/Exam3'>SCSS</Link>
                <Link className='navbar-item' to='/Exam4'>Count</Link>
                <Link className='navbar-item' to='/Exam5'>Phone-Book</Link>
            </nav>
        )
    }
}

export default Header
