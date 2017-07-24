import { createSelector } from 'reselect';

const getTodos = state => state.todoReducer

const getTodosState = createSelector(
    getTodos,
    todoReducer => todoReducer.todos
)

export { getTodosState }