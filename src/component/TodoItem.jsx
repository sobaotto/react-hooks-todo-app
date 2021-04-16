import "../css/App.css";

function TodoItem(props) {
  return (
    <li className="todo-item">
      <label htmlFor={props.todo.createdAt}>
        <input
          type="checkbox"
          id={props.todo.createdAt}
          checked={props.todo.isDone}
          // なんでここは無名関数なの？2021/04/14
          onChange={() => props.toggleCheck(props.todo.createdAt)}
        />
        {props.todo.title}
      </label>
      <button
        className="delete-button"
        onClick={() => props.deleteTodo(props.todo.createdAt)}
      >
        ×
      </button>
    </li>
  );
}

export default TodoItem;
