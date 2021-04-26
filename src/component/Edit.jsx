import "../css/App.css";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Edit(props) {
  const { id } = useParams();

  useEffect(() => {
    if (!props.editingText) {
      props.inputEditingText(props.todos[id].title);
    }
  });

  return (
    <div className="container">
      <form onSubmit={props.updateTodo} id={id}>
        <input
          type="text"
          defaultValue={props.editingText}
          onChange={props.updateEditingText}
        />
        <input type="submit" value="更新" />
      </form>

      <a href="/">
        <button>戻る</button>
      </a>
    </div>
  );
}

export default Edit;
