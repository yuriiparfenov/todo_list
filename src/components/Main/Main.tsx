import { Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setAllTaskCompleted } from '../../store/reducers/todo-slice';
import ToDoList from '../ToDoList/ToDoList';

const Main = (): JSX.Element => {
  const { todoList, todoActiveList, todoCompletedList } = useAppSelector(({ todo }) => todo);
  const dispatch = useAppDispatch();
  
  const handleClick = () => {
    dispatch(setAllTaskCompleted());
  }

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" onClick={handleClick}>Mark all as complete</label>
      <Routes>
        <Route index element={<ToDoList taskList={todoList} />} />
        <Route path='/completed' element={<ToDoList taskList={todoCompletedList} />} />
        <Route path='/active' element={<ToDoList taskList={todoActiveList} />} />
      </Routes>
    </section>
  );
};

export default Main;
