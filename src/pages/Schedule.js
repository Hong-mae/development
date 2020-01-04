import React, { Component } from 'react'

import MyComponent from '../Components/Schedule/MyComponent'

export class Schedule extends Component {
    render() {
        return (
            <MyComponent name={'React'} favoriteNumber={7}>리액트</MyComponent>
        )
    }
}

export default Schedule
