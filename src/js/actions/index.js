let actions = {
    addTodo: function(text) {
        return {
            type: 'ADD_TODO',
            text
        }
    },

    removeTodo: function(id) {
        return {
            type: 'REMOVE_TODO',
            id
        }
    }
}

export default actions