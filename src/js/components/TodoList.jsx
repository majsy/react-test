import React from 'react';
import TodoItem from './TodoItem.jsx';
import TodoForm from './TodoForm.jsx';
import shortid from 'shortid';

export default class TodoList extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [
                {name: 'eat', id: this.createId()}, {name: 'party', id: this.createId()},
                {name: 'sleep', id: this.createId()}, {name: 'run', id: this.createId()}
            ]
        };
    }
    createId = () => {
        shortid.generate();
    }
    removeItem = (id) => {
        let items = this.state.items;
        items.splice(id, 1);
        this.setState({items: items})
    }
    addItem = (value) => {
        let items = this.state.items;
        items.push({name: value, id: this.createId()});
        this.setState({items});
    }
    handleSubmit = (val) => {
        this.addItem(val);
    }
    render() {
        let items = this.state.items.map((item, id)=> {
            return <TodoItem item={item.name} key={id} handleClick={this.removeItem} />
        });
        return (
            <div>
                <ul>{items}</ul>
                <TodoForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}