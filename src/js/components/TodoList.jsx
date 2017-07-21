import React from 'react';
import TodoItem from './TodoItem.jsx';
import getTodosState from '../selectors';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import removeTodo from '../actions';

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
        let todos = this.state.todos.map((item)=> {
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
        todoReducer: getTodosState(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeTodo: bindActionCreators(removeTodo, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps()
)(TodoList);
