import "../css/App.css";

type Props = {
  addTodo: React.FormEventHandler<HTMLFormElement>;
  inputText: string;
  // React.FormEventHandlerでもエラー出なかった。なんで？2021/04/25
  updateInputText: React.ChangeEventHandler<HTMLInputElement>;
};

const AddForm = (props: Props): JSX.Element => {
  return (
    <form onSubmit={props.addTodo}>
      <input
        type="text"
        placeholder="Todoを入力"
        value={props.inputText}
        onChange={props.updateInputText}
      />
      <input type="submit" value="追加" />
    </form>
  );
};

export { AddForm };
