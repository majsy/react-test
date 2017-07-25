let initialData = {
    todos: [
        {
            id: '12ja74',
            text: "sleep"
        },
        {
           id: '75hsf6',
           text: 'eat'
        }
    ]
};

let todoReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            let { todos } = state;
            const newTodos = [...todos,
                {
                    id: Math.random().toString(36).substr(2, 7),
                    text: action.text
                }
            ]
            return Object.assign({}, state, { todos: newTodos });

        case 'REMOVE_TODO':
            todos = state.todos;
            return Object.assign({}, state, { todos: todos.filter(todo => todo.id !== action.id) });

        default:
            return state;
    }
}

export default todoReducer;