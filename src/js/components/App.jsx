import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import TodoList from './TodoList.jsx';
import TodoHeader from './TodoHeader.jsx';
import TodoForm from './TodoForm.jsx';
import actions from '../actions';

class App extends React.Component {
    render() {
        return (
            <div>
                <TodoHeader />
                <TodoList
                    removeTodo={this.props.actions.removeTodo}
                />
                <TodoForm addTodo={this.props.actions.addTodo} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todoReducer: state.todoReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
