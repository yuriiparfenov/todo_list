import { createSlice } from '@reduxjs/toolkit';
import { initialStateType } from '../../types/state';

const initialState: initialStateType = {
    todoList: [],
};

export const todoSlice = createSlice({
    name: 'todoReducer',
    initialState,
    reducers: {
        setNewTask: (state, action) => {
            state.todoList = [...state.todoList, action.payload];
        },
        setNewTaskCheckFlag: (state, action) => {
            state.todoList = state.todoList.map((item) => item.id === action.payload ? {...item, checkFlag: !item.checkFlag} : item);
        }
    }
});

export const { setNewTask, setNewTaskCheckFlag } = todoSlice.actions;

export default todoSlice.reducer;