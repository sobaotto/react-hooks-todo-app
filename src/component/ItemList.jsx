import "../css/App.css";
import TodoItem from "./TodoItem";
import { FILTER_STATE } from "../const/filter-state";

function ItemList(props) {
  const todoElements = props.todos.map((todo, index) => {
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
  });

  return <ul>{todoElements}</ul>;
}

export default ItemList;
