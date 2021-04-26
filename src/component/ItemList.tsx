import { FILTER_STATE } from "../const/filter-state";
import "../css/App.css";
import { TodoItem } from "./TodoItem";

type Todo = {
  createdAt: string;
  isDone: boolean;
  title: string;
};

type ItemListProps = {
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
};

const ItemList = (props: ItemListProps): JSX.Element => {
  const todoElements = props.todos.map((todo: Todo, index: number) => {
    if (props.filterState === FILTER_STATE.ALL) {
      return (
        <TodoItem
          key={todo.createdAt}
          itemIndex={index}
          todo={todo}
          toggleCheck={props.toggleCheck}
          deleteTodo={props.deleteTodo}
        />
      );
    }
    if (props.filterState === FILTER_STATE.ACTIVE) {
      if (todo.isDone === false) {
        return (
          <TodoItem
            key={todo.createdAt}
            itemIndex={index}
            todo={todo}
            toggleCheck={props.toggleCheck}
            deleteTodo={props.deleteTodo}
          />
        );
      }
    }
    if (props.filterState === FILTER_STATE.COMPLETED) {
      if (todo.isDone === true) {
        return (
          <TodoItem
            key={todo.createdAt}
            itemIndex={index}
            todo={todo}
            toggleCheck={props.toggleCheck}
            deleteTodo={props.deleteTodo}
          />
        );
      }
    }
    return undefined;
  });

  return <ul>{todoElements}</ul>;
};

export { ItemList };
