import "../css/App.css";
import { AddForm } from "./AddForm";
import { ItemList } from "./ItemList";
import { Footer } from "./Footer";

type HomeProps = {
  addTodo: React.FormEventHandler<HTMLFormElement>;
  inputText: string;
  updateInputText: React.ChangeEventHandler<HTMLInputElement>;
  todos: [
    {
      createdAt: string;
      isDone: boolean;
      title: string;
    }
  ];
  toggleCheck: Function;
  deleteTodo: Function;
  filterState: string;
  changeFilterState: React.ChangeEventHandler<HTMLInputElement>;
};

const Home = (props: HomeProps): JSX.Element => {
  return (
    <div className="container">
      <AddForm
        addTodo={props.addTodo}
        inputText={props.inputText}
        updateInputText={props.updateInputText}
      />
      <ItemList
        todos={props.todos}
        toggleCheck={props.toggleCheck}
        deleteTodo={props.deleteTodo}
        filterState={props.filterState}
      />
      <Footer
        changeFilterState={props.changeFilterState}
        filterState={props.filterState}
      />
    </div>
  );
};

export { Home };
