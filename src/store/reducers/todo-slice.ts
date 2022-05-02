import { createSlice } from '@reduxjs/toolkit';
import { initialStateType } from '../../types/state';

const initialState: initialStateType = {
    todoList: [],
    todoCompletedList: [],
    todoActiveList: [],
    itemLeft: 0,
};

export const todoSlice = createSlice({
    name: 'todoReducer',
    initialState,
    reducers: {
        setNewTask: (state, action) => {
            state.todoList = [...state.todoList, action.payload];
            state.todoActiveList = [...state.todoActiveList, action.payload];
        },
        setNewTaskCheckFlag: (state, action) => {
            state.todoList = state.todoList.map((item) => item.id === action.payload ? {...item, checkFlag: !item.checkFlag} : item);
            state.todoCompletedList = state.todoList.filter((item) => item.checkFlag === true);
            state.todoActiveList = state.todoList.filter((item) => item.checkFlag !== true);
            state.itemLeft = state.todoCompletedList.length;
        },
        deleteTask: (state, action) => {
            state.todoList = state.todoList.filter((item) => item.id !== action.payload);
            state.todoCompletedList = state.todoList.filter((item) => item.checkFlag === true && item.id !== action.payload);
            state.todoActiveList = state.todoList.filter((item) => item.id !== action.payload && item.checkFlag !== true);
            state.itemLeft = state.todoCompletedList.length;
        },
        clearCompletedTaskList: (state) => {
            state.todoCompletedList = [];
            state.todoList = state.todoList.filter((item) => item.checkFlag !== true);
            state.itemLeft = state.todoCompletedList.length;
        },
        setAllTaskCompleted: (state) => {
            state.todoList = state.todoList.map((item) => item.checkFlag === false ? {...item, checkFlag: !item.checkFlag} : item);
            state.todoCompletedList = state.todoList;
            state.todoActiveList = [];
            state.itemLeft = state.todoCompletedList.length;
        }
    }
});

export const { setNewTask, setNewTaskCheckFlag, deleteTask, clearCompletedTaskList, setAllTaskCompleted } = todoSlice.actions;

export default todoSlice.reducer;