import React, { useState, useRef, useCallback } from 'react'
import TodoTemplate from '../Components/To_Do_Apps/TodoTemplate'
import TodoInsert from '../Components/To_Do_Apps/TodoInsert'
import TodoList from '../Components/To_Do_Apps/TodoList'

const To_Do_Apps = () => {
    const [ todos, setTodos ] = useState([
        {
            id: 0,
            text: 'todo 0',
            checked: true,
        },
        {
            id: 1,
            text: 'todo 1',
            checked: true,
        },
        {
            id: 2,
            text: 'todo 2',
            checked: false,
        },
    ]);

    const nextId = useRef(3);

    const onInsert = useCallback( text =>{
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        setTodos(todos.concat(todo));
        nextId.current += 1;
    }, [todos]);

    const onRemove = useCallback( id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }, [todos]);

    const onToggle = useCallback(id => {
        setTodos(
            todos.map(todo => 
                todo.id === id ? { ...todo, checked: !todo.checked } : todo
            )
        )
    })

    return (
        <div className='todoapp'>
            <TodoTemplate >
                <TodoInsert onInsert={onInsert}/>
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
            </TodoTemplate>
        </div>
    )
}

export default To_Do_Apps
