import React, { Component } from 'react'

import TodoTemplate from '../Components/To_Do_Apps/TodoTemplate'
import TodoInsert from '../Components/To_Do_Apps/TodoInsert'

export class To_Do_Apps extends Component {
    render() {
        return (
            <div className='todoapp'>
                <TodoTemplate >
                    <TodoInsert />
                </TodoTemplate>
            </div>
        )
    }
}

export default To_Do_Apps
