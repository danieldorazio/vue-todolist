const { createApp} = Vue;

createApp ({
    data () {
        return {
            todoList: [
                "lavare",
                "pulire",
                "fare la spesa"
            ],
        }
    },

    methods: {
        clickDeleteTodo: function(clickedIndex) {
           this.todoList.splice(clickedIndex, 1);
        }
    }
}).mount("#app");

