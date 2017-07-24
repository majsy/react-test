import React from 'react';
import TodoList from './TodoList.jsx';
import TodoHeader from './TodoHeader.jsx';
import TodoForm from './TodoForm.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <TodoHeader />
                <TodoList />
                <TodoForm />
            </div>
        );
    }
}

export default App;
