import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { clearCompletedTaskList } from '../../store/reducers/todo-slice';

const Footer = (): JSX.Element => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const { itemLeft } = useAppSelector(({ todo }) => todo);

  const handleClick = () => {
    dispatch(clearCompletedTaskList());
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemLeft}</strong> item left
      </span>

      <ul className="filters">
        <li>
          <Link className={pathname.length < 2 ? 'selected' : ''} to="/">All</Link>
        </li>
        <li>
          <Link className={pathname.includes('/active') ? 'selected' : ''} to="/active">Active</Link>
        </li>
        <li>
          <Link className={pathname.includes('/completed') ? 'selected' : ''} to="/completed">Completed</Link>
        </li>
      </ul>

      <button className="clear-completed" onClick={handleClick}>Clear completed</button>
    </footer>
  );
};

export default Footer;
