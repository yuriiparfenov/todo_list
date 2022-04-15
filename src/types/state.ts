import store from '../store/store';

export type todoItem = {
    id: number;
    text: string;
}

export type initialStateType = {
    todoList: todoItem[];
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
