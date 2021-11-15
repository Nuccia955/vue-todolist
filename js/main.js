// Vue js
const app = new Vue ({
    el: '#app',
    data: {
        todos: [
            {
                text: 'fare la spesa',
                completed: true,
            },
            {
                text: 'pulire casa',
                completed: false,
            },
            {
                text: 'preparare la cena',
                completed: true,
            },
        ],
    },
    methods: {
        deleteToDo(indexToDo) {
            this.todos.splice(indexToDo, 1)
        }
    }
})