import React from 'react'

import '../../css/to_do_list_template.scss';

const to_do_list_template = ({form, palette, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className='palette-wrapper'>
                {palette}
            </section>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    )
}

export default to_do_list_template
