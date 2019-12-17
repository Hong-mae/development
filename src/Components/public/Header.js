import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../css/_navbar.scss'

export class Header extends Component {
    render() {
        return (
            <nav className='navbar'>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL}>홈</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Exam1'}>예제1</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Exam2'}>예제2</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Exam3'}>SCSS</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Exam4'}>Count</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Exam5'}>Phone-Book</Link>
            </nav>
        )
    }
}

export default Header
