import { memo, useCallback } from 'react';
import { useAppDispatch } from '../../hooks';
import { Task } from '../../types/state';
import { deleteTask, setNewTaskCheckFlag } from '../../store/reducers/todo-slice';

type ToDoListItemProps = {
  task: Task;
};

const ToDoListItem = ({ task }: ToDoListItemProps): JSX.Element => {
  const { id, text, checkFlag } = task;
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    dispatch(deleteTask(id));
  }, [dispatch, id]);

  const handleChangeStatus = useCallback(() => {
    dispatch(setNewTaskCheckFlag(id));
  }, [id, dispatch]);

  return (
    <li className={!checkFlag ? '' : 'completed'} key={`${id} - 100`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={checkFlag}
          onChange={handleChangeStatus}
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
