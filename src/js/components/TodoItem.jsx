import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';

class TodoItem extends React.Component {
    removeTodo = () => {
        let {actions, item} = this.props;
        actions.removeTodo(item.id);
    }

    render() {
        return (
            <li>
                {this.props.item.text}
                <button type="button" onClick={this.removeTodo}>x</button>
            </li>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(
    null,
    mapDispatchToProps
)(TodoItem);