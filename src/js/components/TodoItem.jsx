import React from 'react';

const TodoItem = ({ onClick, completed, text }) => (
    <li>
        {text}
        <button type="button" onClick={onClick}>x</button>
    </li>
)

export default TodoItem