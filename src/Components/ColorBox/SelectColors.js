import React from 'react'
import { ColorConsumer } from '../../Contexts/color'

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
]

const SelectColors = () => {
    return (
        <div>
            <h2>색상 선택.</h2>
            {/* <div style={{ display: 'flex'}}>
                {colors.map(color => (
                    <div
                        key={color}
                        style={{
                            background: color,
                            width: '24px',
                            height: '24px',
                            cursor: 'pointer'
                        }}
                    />
                ))}
            </div> */}
            <ColorConsumer>
                {({actions}) => (
                    <div style={{ display: 'flex'}}>
                        {colors.map(color => (
                            <div
                                key={color}
                                style={{
                                    background: color,
                                    width: '24px',
                                    height: '24px',
                                    cursor: 'pointer'
                                }}
                                onClick={()=>actions.setColor(color)}
                                onContextMenu={e => {
                                    e.preventDefault();
                                    actions.setSubcolor(color);
                                }}
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>
            <hr/>
        </div>
    )
}

export default SelectColors