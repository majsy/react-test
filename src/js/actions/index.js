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
    },

    completeTodo: function(id) {
        return {
            type: 'COMPLETE_TODO',
            id
        }
    },

    updateFilterType: function(fType) {
        return {
            type: 'UPDATE_FILTER_TYPE',
            fType
        }
    }
}

export default actions