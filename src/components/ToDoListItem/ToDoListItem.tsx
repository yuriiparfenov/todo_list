import { memo, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { Task } from '../../types/state';
import { deleteTask, setNewTaskCheckFlag } from '../../store/reducers/todo-slice';

type ToDoListItemProps = {
  task: Task;
};

const ToDoListItem = ({ task }: ToDoListItemProps): JSX.Element => {
  const { id, text, checkFlag } = task;
  console.log(checkFlag);
  const [checkboxState, setCheckboxState] = useState(checkFlag);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(deleteTask(id));
  }

  useEffect(() => {
    dispatch(setNewTaskCheckFlag(id));
  }, [checkboxState, dispatch, id]);

  return (
    <li className={!checkboxState ? '' : 'completed'} key={id}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={checkboxState}
          onChange={() => setCheckboxState(!checkboxState)}
        />
        <label>{text}</label>
        <button className="destroy" onClick={handleClick}></button>
      </div>
      <input className="edit" defaultValue={text} />
    </li>
  );
};

export default memo(
  ToDoListItem,
  (prevProps, nextProps) =>
    prevProps.task.checkFlag === nextProps.task.checkFlag
);
