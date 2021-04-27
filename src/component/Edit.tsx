import "../css/App.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

type EditProps = {
  todos: [
    {
      createdAt: string;
      isDone: boolean;
      title: string;
    }
  ];
  updateTodo: React.FormEventHandler<HTMLFormElement>;
  editingText: string;
  updateEditingText: React.ChangeEventHandler<HTMLInputElement>;
  inputEditingText: Function;
};

interface RouteParams {
  id: string;
}

const Edit = (props: EditProps): JSX.Element => {
  const params = useParams<RouteParams>();
  const idString = params.id;
  const id = parseInt(idString);

  useEffect(() => {
    if (!props.editingText) {
      props.inputEditingText(props.todos[id].title);
    }
  }, [id, props]);

  return (
    <div className="container">
      <form onSubmit={props.updateTodo} id={idString}>
        <input
          type="text"
          value={props.editingText}
          onChange={props.updateEditingText}
        />
        <input type="submit" value="更新" />
      </form>

      <a href="/">
        <button>戻る</button>
      </a>
    </div>
  );
};

export { Edit };
