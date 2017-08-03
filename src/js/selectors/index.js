import { createSelector } from 'reselect';

const getTodos = state => state.todoReducer

let isValid = (type, todo) => {
  switch (type) {
      case 'SHOW_ALL':
          return true;
      case 'SHOW_COMPLETED':
          return todo.completed;
      case 'SHOW_ACTIVE':
          return !todo.completed;
  }
    return true;
}

const getFilteredTodos = createSelector(
    getTodos,
    store => store.todos.filter(todo => isValid(store.filterType, todo))
)

export { getFilteredTodos }