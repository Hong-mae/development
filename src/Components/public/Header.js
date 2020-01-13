import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'to_do_list'}>To-do-List</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Props'}>Props</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Counter'}>Counter</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Say'}>Say</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'EventPractice'}>EventPractice</Link>
            </nav>
        )
    }
}

export default Header

