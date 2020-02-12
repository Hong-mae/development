import React from 'react'
import { ColorProvider } from '../../Contexts/color'
import SelectColors from './SelectColors'
import ColorContent from './ColorContent'

const ColorBox = () => {
    return (
        <ColorProvider>
            <div>
                <SelectColors/>
                <ColorContent/>
            </div>
        </ColorProvider>
    )
}

export default ColorBox
