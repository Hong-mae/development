import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Header from './Header'
import main from '../../pages/index'
import Exam1 from '../../pages/Exam_1'
import Exam2 from '../../pages/Exam_2'
import Exam3 from '../../pages/Exam_3'
import Exam4 from '../../pages/Exam_4'
import Exam5 from '../../pages/Exam_5'
import to_do_list from '../../pages/to_do_list'
import Schedule from '../../pages/Schedule'
import Counter from '../../pages/Counter'
import Say from '../../pages/Say'
import EventPractice from '../../pages/EventPractice'
import EventPractice_2 from '../../pages/EventPractice_2'
import ValidationSample from '../../pages/ValidationSample'

export class Routers extends Component {
    render() {
        return (
            <Router>
                <Header />
                <div className='contents container-fluid'>
                    <Route exact path={process.env.REACT_APP_DEVELOPMENT_URL} component={main} />
                    <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Exam1"} component={Exam1} />
                    <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Exam2"} component={Exam2} />
                    <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Exam3"} component={Exam3} />
                    <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Exam4"} component={Exam4} />
                    <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Exam5"} component={Exam5} />
                    <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "to_do_list"} component={to_do_list} />
                    <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Props"} component={Schedule} />
                    <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Counter"} component={Counter} />
                    <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "Say"} component={Say} />
                    <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "EventPractice"} component={EventPractice} />
                    <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "EventPractice_2"} component={EventPractice_2} />
                    <Route path={process.env.REACT_APP_DEVELOPMENT_URL + "ValidationSample"} component={ValidationSample} />
                </div>
            </Router>
        )
    }
}

export default Routers
