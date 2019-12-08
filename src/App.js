import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

// Component
import Header from './Components/Header'

// Pages
import router_index from './pages/index'
import Exam_1 from './pages/Exam_1'
import Exam_2 from './pages/Exam_2'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div>
                    리액트 공부 리스트
                </div>
                <Router>
                    <Header/>
                    <Switch>
                        <Route path='/Exam2' component={Exam_2}/>
                        <Route path='/Exam1' component={Exam_1}/>
                        <Route path='/' component={router_index}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
