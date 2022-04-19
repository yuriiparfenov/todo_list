import { useState, KeyboardEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { Task } from '../../types/state';
import { v4 as uuidv4 } from 'uuid';
import { setNewTask } from '../../store/reducers/todo-slice';

const Header = (): JSX.Element => {
  const [todoText, setTodoText] = useState('');
  const dispatch = useAppDispatch();

  const onSetInputTask = (task: Task) => {
    dispatch(setNewTask(task));
  };

  const handleInputValue = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter')
      onSetInputTask({
        id: uuidv4(),
        text: todoText,
        checkFlag: false,
      })
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={handleInputValue}
      />
    </header>
  );
};

export default Header;
