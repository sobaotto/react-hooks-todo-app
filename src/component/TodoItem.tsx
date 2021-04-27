import "../css/App.css";
import { useHistory } from "react-router-dom";


type Todo = {
  createdAt: string;
  isDone: boolean;
  title: string;
};

type TodoItemProps = {
  itemIndex: number;
  todo: Todo;
  toggleCheck: Function;
  deleteTodo: Function;
};

const TodoItem = (props: TodoItemProps): JSX.Element => {
  const history = useHistory();
  const handleLink = (path: any) => history.push(path);

  return (
    <li>
      <label htmlFor={props.todo.createdAt}>
        <input
          type="checkbox"
          id={props.todo.createdAt}
          checked={props.todo.isDone}
          onChange={() => props.toggleCheck(props.todo.createdAt)}
        />
        {props.todo.title}
      </label>
      <button onClick={() => props.deleteTodo(props.todo.createdAt)}>×</button>
      <button onClick={() => handleLink(`/edit/${props.itemIndex}`)}>編集</button>
      <button onClick={() => handleLink(`/detail/${props.itemIndex}`)}>詳細</button>
    </li>
  );
};

export { TodoItem };
