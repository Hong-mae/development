import React, { Component } from 'react'

import TodoTemplate from '../Components/To_Do_Apps/TodoTemplate'

export class To_Do_Apps extends Component {
    render() {
        return (
            <div className='todoapp'>
                <TodoTemplate >Todo App을 만들자</TodoTemplate>
            </div>
        )
    }
}

export default To_Do_Apps
