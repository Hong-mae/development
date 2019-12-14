import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Header from './Header'
import main from '../../pages/index'
import Exam1 from '../../pages/Exam_1'
import Exam2 from '../../pages/Exam_2'
import Exam3 from '../../pages/Exam_3'

export class Routers extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <div className='container-fluid'>
                    <Route exact path="/" component={main} />
                    <Route path="/Exam1" component={Exam1} />
                    <Route path="/Exam2" component={Exam2} />
                    <Route path="/Exam3" component={Exam3} />
                </div>
            </Router>
        )
    }
}

export default Routers
