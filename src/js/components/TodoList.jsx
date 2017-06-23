import React from 'react';
import TodoItem from './TodoItem.jsx';
import TodoForm from './TodoForm.jsx';

export default class TodoList extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [{name: 'eat', id:0}, {name: 'party', id:1}, {name: 'sleep', id:2}, {name: 'run', id:3}]
        };
    }
    removeItem = (id) => {
        let items = this.state.items;
        items.splice(id, 1);
        this.setState({items: items})
    }
    addItem = (value) => {
        let items = this.state.items;
        items.push({name: value, id: items.length+1});
        this.setState({items});
    }
    handleSubmit = (val) => {
        this.addItem(val);
    }
    render() {
        let items = this.state.items.map((item)=> {
            return <TodoItem item={item.name} key={item.id} handleClick={this.removeItem} />
        });
        return (
            <div>
                <ul>{items}</ul>
                <TodoForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}