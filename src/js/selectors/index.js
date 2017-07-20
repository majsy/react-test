import { createSelector } from 'reselect';

const todos = state => state.todos
const getTodos = () => {
    return createSelector(
        [todos],
        (todos) => {
            return todos
        }
    )
}

export default getTodos

