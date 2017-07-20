import React from 'react';
import TodoItem from './TodoItem.jsx';
import getTodos from '../selectors';
import { connect } from 'react-redux';

class TodoList extends React.Component {
    constructor() {
        super();

        this.state = {
            todos: [
                {text: 'eat', id:this.text},
                {text: 'sleep', id:this.text}
            ]
        }
    }

    render() {
        // get the data from the getTodo selector
        let todos = state.todos.map((item)=> {
            return <TodoItem item={item.text} key={item.text} />
        })
        return (
            <div>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todoReducer: getTodos(state)
    }
}

export default connect(
    mapStateToProps
)(TodoList);
