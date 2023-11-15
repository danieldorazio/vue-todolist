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
    }
}).mount("#app");

