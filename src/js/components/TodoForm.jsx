import React from 'react';

export default class TodoForm extends React.Component {
    render() {
        return (
            <form id="add-item" method="POST" action="/todo/add" onSubmit={this.props.handleSubmit} >
                <input form="add-item" type="text" name="add_item" />
                <button type="submit">+</button>
            </form>
        )
    }
}