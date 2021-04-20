import "../css/App.css";
import { useParams } from "react-router-dom";

function Detail(props) {
  const { id } = useParams();

  return (
    <div className="container">
      <table border="1" className="todo-table">
        <tr>
          <th>進捗</th>
          <td> {props.todos[id].isDone ? "完了" : "未完了"}</td>
        </tr>
        <tr>
          <th>タスク名</th>
          <td> {props.todos[id].title}</td>
        </tr>
      </table>
      <a href="/">
        <button>戻る</button>
      </a>
    </div>
  );
}

export default Detail;
