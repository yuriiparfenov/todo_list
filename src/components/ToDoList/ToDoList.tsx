import React, { memo } from 'react';
import { Task } from '../../types/state';
import ToDoListItem from '../ToDoListItem/ToDoListItem';

type ToDoListProps = {
  taskList: Task[];
};

const ToDoList = ({ taskList }: ToDoListProps): JSX.Element => {
  return (
    <ul className="todo-list">
      {taskList.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <ToDoListItem task={item} />
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default memo(
  ToDoList,
  (prevProps, nextProps) =>
    prevProps.taskList === nextProps.taskList
);
