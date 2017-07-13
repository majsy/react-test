import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({dispatch}) => {
    let input;

    return (
        <div>
            <form method="POST" action="/todo/add"
                  onSubmit={e => {
                      e.preventDefault()
                      if (!input.value.trim()) {
                          return;
                      }
                      dispatch(addTodo(input.value))
                      input.value = '';
                  }} >
                <input form="add-item" type="text" ref={node => (input = node)}/>
                <button type="submit">+</button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo

