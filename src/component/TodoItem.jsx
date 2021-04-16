import "../css/App.css";

function TodoItem(props) {
  const detailItemPath = "/detail/" + props.itemIndex;

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
      <a href={detailItemPath}>
        <button>詳細</button>
      </a>
    </li>
  );
}

export default TodoItem;
