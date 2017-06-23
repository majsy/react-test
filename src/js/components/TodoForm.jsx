import React from 'react';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            val: ''
        }
    }
    handleChange = (e) => {
        this.setState({val: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.val);
        this.setState({val: ''});
    }
    render() {
        return (
            <form method="POST" action="/todo/add" onSubmit={this.handleSubmit} >
                <input form="add-item" type="text" ref="addItem" value={this.state.val} onChange={this.handleChange} />
                <button type="submit">+</button>
            </form>
        )
    }
}