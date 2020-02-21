import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
    render() {
        const hrColor = {
            borderColor: "red"
        }
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
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Counter'}>Counter - class</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Say'}>Say</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'EventPractice'}>EventPractice - Class</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'EventPractice_2'}>EventPractice - Func</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'ValidationSample'}>ValidationSample</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'ScrollBox'}>ScrollBox</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Iteration'}>Iteration</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'LifeCycle'}>LifeCycle</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Counter_2'}>Counter - func</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Info'}>Info - effect</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Counter_3'}>Counter - reducer</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Info_2'}>Info - reducer</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Average'}>Average</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Average_2'}>Average - callback</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Average_3'}>Average - ref</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Info_3'}>Info - custom</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'To_Do_Apps'}>To Do Apps</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Profile/p-bin'}>Profile</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'About'}>About</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Profiles'}>Profile - sub route</Link>
                <hr style={hrColor}/>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'News/all'}>Use API</Link>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'Context'}>Context API</Link>
                <hr style={hrColor}/>
                <Link className='navbar-item' to={process.env.REACT_APP_DEVELOPMENT_URL + 'redux'}>React Redux</Link>
            </nav>
        )
    }
}

export default Header

