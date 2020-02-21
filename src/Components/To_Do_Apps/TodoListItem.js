import React from 'react'
import cn from 'classnames'
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md'

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
    const { id, text, checked } = todo;

    const onClick = (e) => {
        onRemove(id);
    }
    return (
        <div className='TodoListItem-virtualized' style={style}>
            <div className='TodoListItem'>
                <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                    <div className='text'>{text}</div>
                </div>
                <div className='remove' onClick={onClick}>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    )
}

export default React.memo(TodoListItem)
