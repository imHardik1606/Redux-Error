import { createSlice, nanoid } from '@reduxjs/toolkit'

export const initialState = { // Initial state of Todo
    todos: [{id: "abc", task: "demo task", isDone: false}],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: { // state, action
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false
            }
            state.todos.push(newTodo); // No need to destructure like react
        },
        deleteTodo: (state, action) => {
            //action.payload <--- Delete todo id
            state.todos = state.todos.filter((todo) => todo.id != action.payload) // add only whose id doesn't match
        },
        markAsDone : (state, action) => {
            //action.payload <--- Mark as done todo id
            state.todos = state.todos.map((todo) => {
                if(todo.id === action.payload) {
                    todo.isDone = true;
                }
            })
        }
    }
})

export const {addTodo,  deleteTodo, markAsDone} = todoSlice.actions;
export default todoSlice.reducer;