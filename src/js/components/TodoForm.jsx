import React from 'react';

export default class TodoForm extends React.Component {
    constructor() {
        super();

        this.state = {
            text: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const text = this.state.text;

        this.props.addTodo(text);
        console.log(text);
    }

    handleChange = (e) => {
        this.setState({text: e.target.value});
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
