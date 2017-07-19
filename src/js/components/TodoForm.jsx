import React from 'react';

export default class TodoForm extends React.Component {
    constructor() {
        super();

        this.state = {
            text: this.props.text || ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let text = e.target.value.trim()


        // this.props.dispatch(addTodo(text));
    }

    handleChange = (e) => {
        this.setState({text: e.target.value })
    }

    render() {
        return (
            <div>
                <form method="POST" action="/todo/add"
                    onSubmit={this.handleSubmit} >
                    <input form="add-item" type="text" value={this.state.text} onChange={this.handleChange} />
                    <button type="submit">+</button>
                </form>
            </div>
        )
    }
}
