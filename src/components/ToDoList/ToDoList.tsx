import { useAppSelector } from '../../hooks';
import ToDoListItem from '../ToDoListItem/ToDoListItem';

const ToDoList = (): JSX.Element => {
  const { todoList } = useAppSelector(({ todo }) => todo);

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />

      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {todoList.map((item) => {
          return (
              <ToDoListItem task={item} />
          );
        })}
      </ul>
    </section>
  );
};

export default ToDoList;

/*
<li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" defaultChecked />
            <label>Taste JavaScript</label>
            <button className="destroy"></button>
          </div>
          <input className="edit" value="Create a TodoMVC template" />
        </li>

        <li className="editing">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>Buy a unicorn</label>
            <button className="destroy"></button>
          </div>
          <input className="edit" defaultValue="Rule the web" />
        </li>
        */
