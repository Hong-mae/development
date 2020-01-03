import React, { Component } from 'react'

import '../../css/palette.scss';

const Color = ({
    color, active, onClick
}) =>{
    return (
        <div className={`color ${color} ${active && 'active'}`} onClick={onClick}>

        </div>
    )
}

const palette = ({
    colors, selected, onSelect
}) => {
    const colorList = colors.map(
        (color) => (<Color color={color} active={selected===color} onClick={() => onSelect(color)} key={color}/>)
    )

    return (
        <div className='palette'>
            {colorList}
        </div>
    )
}

export default palette
