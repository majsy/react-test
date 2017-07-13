import React from 'react';
import TodoList from './TodoList.jsx';
import TodoHeader from './TodoHeader.jsx';
import AddTodo from './AddTodo.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <TodoHeader />
                <TodoList />
                <AddTodo />
            </div>
        );
    }
}