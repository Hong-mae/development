import React from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline, MdRemove } from 'react-icons/md'

const TodoListItem = () => {
    return (
        <div className='TodoListItem'>
            <div className='checkbox'>
                <MdCheckBoxOutlineBlank />
                <div className='text'>할 일</div>
                <div className='remove'>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    )
}

export default TodoListItem
