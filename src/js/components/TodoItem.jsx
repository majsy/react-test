import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/index';

class TodoItem extends React.Component {
    constructor() {
        super();

        this.state = {
            isComplete: false
        }
    }
    removeTodo = () => {
        let {actions, item} = this.props;
        actions.removeTodo(item.id);
    }

    completeTodo = () => {
        let {actions, item} = this.props;
        actions.completeTodo(item.id);

        this.setState({ isComplete: true })
    }

    render() {
        let isComplete = this.state.isComplete;
        let style;

        if (isComplete) {
            style = { backgroundColor: '#4EF84E' };
        }

        return (
            <li>
                {this.props.item.text}
                <button type="button" className="complete-button" onClick={this.completeTodo} style={style}>&#x2714;</button>
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