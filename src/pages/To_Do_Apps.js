import React, { useState, useRef, useCallback, useReducer } from 'react'
import TodoTemplate from '../Components/To_Do_Apps/TodoTemplate'
import TodoInsert from '../Components/To_Do_Apps/TodoInsert'
import TodoList from '../Components/To_Do_Apps/TodoList'

function createBulkTodos() {
    const array = [];
    for(let i = 0; i <= 2500; i++){
        array.push({
            id: i,
            text: `todo ${i}`,
            checked: false
        });
    }

    return array
}

function todoReducer(todos, action) {
    switch(action.type){
        case 'INSERT' :
            return todos.concat(action.todo);
        case 'REMOVE' :
            return todos.filter(todo => todo.id !== action.id);
        case 'TOGGLE' :
            return todos.map(todo => todo.id === action.id ? { ...todo, checked: !todo.checked } : todo);
        default:
            return todos;
    }
}

const To_Do_Apps = () => {
    const [ todos, dispatch ] = useReducer(todoReducer, undefined, createBulkTodos);

    const nextId = useRef(2501);

    const onInsert = useCallback( text =>{
        const todo = {
            id: nextId.current,
            text,
            checked: false,
        };
        // setTodos(todos => todos.concat(todo));
        dispatch( { type : 'INSERT', todo});
        nextId.current += 1;
    }, []);

    const onRemove = useCallback( id => {
        // setTodos(todos => todos.filter(todo => todo.id !== id));
        dispatch( { type: 'REMOVE', id });
    }, []);

    const onToggle = useCallback(id => {
        // setTodos( todos =>
        //     todos.map(todo => 
        //         todo.id === id ? { ...todo, checked: !todo.checked } : todo
        //     )
        // )
        dispatch( { type: 'TOGGLE', id });
    }, [])

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
