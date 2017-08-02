let initialData = {
    todos: [
        {
            id: '12ja74',
            text: "sleep",
            completed: false
        },
        {
           id: '75hsf6',
           text: 'eat',
           completed: false
        }
    ],
    filterType: "SHOW_ALL"
};

let todoReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            let { todos } = state;
            const newTodos = [...todos,
                {
                    id: Math.random().toString(36).substr(2, 7),
                    text: action.text,
                    completed: false
                }
            ]
            return Object.assign({}, state, { todos: newTodos });

        case 'REMOVE_TODO':
            todos = state.todos;
            return Object.assign({}, state, { todos: todos.filter(todo => todo.id !== action.id) });

        case 'COMPLETE_TODO':
            todos = state.todos;
            return Object.assign({}, state, { todos: todos.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo ) });

        case 'UPDATE_FILTER_TYPE':
            return Object.assign({}, state, {filterType: action.fType});

        default:
            return state;
    }
}

export default todoReducer;