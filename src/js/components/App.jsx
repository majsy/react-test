import React from 'react';
import TodoList from './TodoList.jsx';
import TodoHeader from './TodoHeader.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <TodoHeader />
                <TodoList />
            </div>
        );
    }
}