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
      <button
        onClick={() => {
          window.history.pushState(
            { test: "hoge", bala: 4 },
            "新しく追加された履歴エントリー",
            `/edit/${props.itemIndex}`
          );
        }}
      >
        編集
      </button>
      <button
        onClick={() => {
          window.history.pushState(
            { test: "hoge", bala: 4 },
            "新しく追加された履歴エントリー",
            `/detail/${props.itemIndex}`
          );
        }}
      >
        詳細
      </button>
    </li>
  );
};

export { TodoItem };
