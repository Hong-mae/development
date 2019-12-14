import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Css
import '../css/_navbar.css'

export class Header extends Component {
    render() {
        return (
            <nav className='navbar'>
                <Link className='navbar-item' to='/'>Home</Link>
                <Link className='navbar-item' to='/Exam1'>Exam1</Link>
                <Link className='navbar-item' to='/Exam2'>Exam2</Link>
                <Link className='navbar-item' to='/Exam3'>Exam3</Link>
            </nav>
        )
    }
}

export default Header
