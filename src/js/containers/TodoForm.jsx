import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions/index';

class TodoForm extends React.Component {
    constructor() {
        super();

        this.state = {
            text: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const text = this.state.text;

        let { actions } = this.props;
        actions.addTodo(text);

        console.log(text);
        this.setState({text: ''});
    }

    handleChange = (e) => {
        this.setState({text: e.target.value});
    }

    render() {
        return (
            <div>
                <form method="POST" action="/todo/add"
                    onSubmit={this.handleSubmit} >
                    <input form="add-item" type="text" value={this.state.text} onChange={this.handleChange} />
                    <button type="submit">+</button>
                </form>

                <button onClick={() => this.props.actions.updateFilterType('SHOW_ALL')}>All</button>
                <button onClick={() => this.props.actions.updateFilterType('SHOW_COMPLETED')}>Completed</button>
                <button onClick={() => this.props.actions.updateFilterType('SHOW_ACTIVE')}>Active</button>
            </div>
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
)(TodoForm);