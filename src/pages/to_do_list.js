import React from 'react'

import '../css/to_do_list.scss'

const to_do_list = ({ form, children }) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    )
}

export default to_do_list
