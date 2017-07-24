import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import removeTodo from '../actions';

class TodoItem extends React.Component {
    removeItem() {
        // let { actions } = this.props;
        // actions.removeTodo(this.props.id);

        let id = this.props.id;

        console.log(id);
    }

    render() {
        return (
            <li>
                {this.props.item}
                <button type="button" onClick={this.removeItem}>x</button>
            </li>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeTodo: bindActionCreators(removeTodo, dispatch)
    }
}

export default connect(
    null,
    mapDispatchToProps
)(TodoItem);
