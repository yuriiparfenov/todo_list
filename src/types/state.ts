import store from '../store/store';

export type Task = {
    id: string;
    text: string;
    checkFlag: boolean;
}

export type initialStateType = {
    todoList: Task[];
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
