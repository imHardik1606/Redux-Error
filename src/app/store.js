import { configureStore } from '@reduxjs/toolkit'
import  todoReducer  from './Features/todo/todoSlice';

//returns obj
export const store = configureStore({
    reducer: todoReducer,
}); 
