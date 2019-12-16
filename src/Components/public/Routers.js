import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Header from './Header'
import main from '../../pages/index'
import Exam1 from '../../pages/Exam_1'
import Exam2 from '../../pages/Exam_2'
import Exam3 from '../../pages/Exam_3'
import Exam4 from '../../pages/Exam_4'
import Exam5 from '../../pages/Exam_5'

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
                    <Route path="/Exam4" component={Exam4} />
                    <Route path="/Exam5" component={Exam5} />
                </div>
            </Router>
        )
    }
}

export default Routers
