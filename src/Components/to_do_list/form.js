import React from 'react'

import '../../css/form.scss';

const form = ({ value, onChange, onCreate, onKeyPress, color }) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} className={ color } />
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    )
}

export default form
