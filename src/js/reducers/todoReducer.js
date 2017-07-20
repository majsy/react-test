export default function todoReducer(todos = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...todos,
                {
                    id: action.text,
                    text: action.text,
                    completed: false
                }
            ]
        case 'REMOVE_TODO':
            return todos.filter((todo) => {
                return todo.id
            })
        default:
            return todos;
    }
}
