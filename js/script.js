const { createApp} = Vue;

createApp ({
    data () {
        return {
            todoList: [
                "lavare",
                "pulire",
                "fare la spesa",
            ],
            newTodoList: "",
        }
    },

    methods: {
        // FUNZIONE CHE CANCELLA DALL'ARRAY L'ELEMENTO CLICCATO
        clickDeleteTodo: function(clickedIndex) {
           this.todoList.splice(clickedIndex, 1);
        },
        // FUNZIONE CHE INSERISCE UNATRINGA ALL'INTERNO DI UN ARRAY E AZZERA QUELLA STRINGA 
        addTodo: function() {
            this.todoList.push(this.newTodoList);
            this.newTodoList = "";
        }
    }
}).mount("#app");

