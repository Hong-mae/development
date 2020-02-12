import React from 'react'
import ColorContext from '../../Contexts/color'

const ColorBox = () => {
    return (
        <ColorContext.Provider value={{color : 'red'}}>
            <div>
                <ColorContext.Consumer>
                    {value => (
                        <div
                            style = {{
                                width: '64px',
                                height: '64px',
                                background: value.color
                            }}
                        />
                    )}
                </ColorContext.Consumer>
            </div>
        </ColorContext.Provider>
    )
}

export default ColorBox
