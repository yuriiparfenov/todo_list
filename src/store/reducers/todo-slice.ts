import { createSlice } from '@reduxjs/toolkit';
import { initialStateType } from '../../types/state';

const initialState: initialStateType = {
    todoList: [],
};

export const todoSlice = createSlice({
    name: 'todoReducer',
    initialState,
    reducers: {

    }
});

export default todoSlice.reducer;