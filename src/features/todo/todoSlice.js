import { createSlice, nanoid } from "@reduxjs/toolkit";

// 2 Creating a initial state that holds the initial value of states stored in store, and will be used in creating slice.
const initialState = {
    todos: [{
        id: 1,
        text: "Hello World"
    }]
}

// 3 Create Slice using createSlice method and exporting it
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    // 4 Creating Reducers. They are properties and functions
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            console.log(todo);
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            // action.payload means the arguments passed in the function
            state.todos = state.todos.filter((todo) => (action.payload !== todo.id));
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => { action.payload.id === todo.id ? { ...todo, text: action.payload.text } : todo })
        },

    }
})

// 5 Exporting Functinalities of todoSlice
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
// and Reducer
export default todoSlice.reducer;