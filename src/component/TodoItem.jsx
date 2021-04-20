import "../css/App.css";

function TodoItem(props) {
  const detailItemPath = "/detail/" + props.itemIndex;
  const editItemPath = "/edit/" + props.itemIndex;

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
      <a href={editItemPath}>
        <button>編集</button>
      </a>
      <a href={detailItemPath}>
        <button>詳細</button>
      </a>
    </li>
  );
}

export default TodoItem;
