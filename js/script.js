const { createApp} = Vue;

createApp ({
    data () {
        return {
            todoList: [],

            newTodoList: {
                text: "",
                done: false,
            },
        }
    },

    methods: {
        // FUNZIONE CHE CANCELLA DALL'ARRAY L'ELEMENTO CLICCATO
        clickDeleteTodo: function(clickedIndex) {
           this.todoList.splice(clickedIndex, 1);
        },

        // FUNZIONE CHE INSERISCE UNATRINGA ALL'INTERNO DI UN ARRAY E AZZERA QUELLA STRINGA 
        addTodo: function() {           
            this.todoList.push({...this.newTodoList});
            this.newTodoList.text = "";
            this.newTodoList.done = false;
        },
    }
}).mount("#app");

