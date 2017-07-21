import { createSelector } from 'reselect';

const getTodos = state => state.todos

const getTodosState = createSelector(
    [ getTodos ],
    (todos) => todos
)


export default getTodosState