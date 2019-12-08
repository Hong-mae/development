import React, { Component } from 'react';

class CreateContent extends Component {
    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(e.target.title.value, e.target.desc.value);
        e.target.title.value = "";
        e.target.desc.value = "";
    }

    render() {
        return (
            <article>
                <h2>Create</h2>
                <form
                    action='/create_process'
                    method='post'
                    onSubmit={this.handleOnSubmit}
                >
                    <p>
                        <input type='text' name='title' placeholder='title'/>
                    </p>
                    <p>
                        <textarea name='desc' placeholder='description'>

                        </textarea>
                    </p>
                    <p>
                        <input type='submit'/>
                    </p>
                </form>
            </article>
        );
    }
}

export default CreateContent;