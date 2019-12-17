import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import Header from './Header'
import main from '../../pages/index'
import Exam1 from '../../pages/Exam_1'
import Exam2 from '../../pages/Exam_2'
import Exam3 from '../../pages/Exam_3'
import Exam4 from '../../pages/Exam_4'
import Exam5 from '../../pages/Exam_5'

var url = "/";
if(process.env.NODE_ENV == 'production') {
    url += "development/";
}

export class Routers extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <div className='container-fluid'>
                    <Route exact path={url} component={main} />
                    <Route path={url + "Exam1"} component={Exam1} />
                    <Route path={url + "Exam2"} component={Exam2} />
                    <Route path={url + "Exam3"} component={Exam3} />
                    <Route path={url + "Exam4"} component={Exam4} />
                    <Route path={url + "Exam5"} component={Exam5} />
                </div>
            </Router>
        )
    }
}

export default Routers
