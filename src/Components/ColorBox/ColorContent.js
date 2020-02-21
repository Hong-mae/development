import React, { useContext } from 'react'
import ColorContext from '../../Contexts/color'

const ColorContent = () => {
    
    const { state } = useContext(ColorContext);
    return (
        <>
            {/*<ColorConsumer>
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
                    {/* {({state}) => (
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
                    )}}
                </ColorConsumer>*/}
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
    )
}

export default ColorContent
