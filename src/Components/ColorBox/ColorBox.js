import React from 'react'
import ColorContext, { ColorProvider, ColorConsumer } from '../../Contexts/color'
import SelectColors from './SelectColors'

const ColorBox = () => {
    return (
        <ColorProvider>
            <div>
                <SelectColors/>
                <ColorConsumer>
                    {/* {value => (
                        <>
                            <div
                                style = {{
                                    width: '64px',
                                    height: '64px',
                                    background: value.state.color
                                }}
                            />
                            <div
                                style = {{
                                    width: '32px',
                                    height: '32px',
                                    background: value.state.subcolor
                                }}
                            />
                        </>
                    )} */}
                    {({state}) => (
                        <>
                            <div
                                style = {{
                                    width: '64px',
                                    height: '64px',
                                    background: state.color
                                }}
                            />
                            <div
                                style = {{
                                    width: '32px',
                                    height: '32px',
                                    background: state.subcolor
                                }}
                            />
                        </>
                    )}
                </ColorConsumer>
            </div>
        </ColorProvider>
    )
}

export default ColorBox
