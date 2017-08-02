import React from 'react';
import TodoItem from '../components/TodoItem.jsx';
import {getFilteredTodos} from '../selectors/index';
import { connect } from 'react-redux';

class TodoList extends React.Component {
    render() {
        let {todos} = this.props;
        if (!todos) {
            return null;
        }

        let $todos = todos.map((item)=> {
            return <TodoItem item={item} key={item.id} />
        })
        return (
            <div>
                <ul>
                    {$todos}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: getFilteredTodos(state)
    }
}

export default connect(
    mapStateToProps,
    null
)(TodoList);
