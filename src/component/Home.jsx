import "../css/App.css";
import React from "react";
import AddForm from "./AddForm";
import ItemList from "./ItemList";
import Footer from "./Footer";

function Home(props) {
  return (
    <div className="container">
      <AddForm
        addTodo={props.addTodo}
        newTodoTitle={props.newTodoTitle}
        inputText={props.inputText}
      />
      <ItemList
        todos={props.todos}
        toggleCheck={props.toggleCheck}
        deleteTodo={props.deleteTodo}
        filterState={props.filterState}
      />
      <Footer changeFilterState={props.changeFilterState} />
      <p>[{props.filterState}]を表示</p>
    </div>
  );
}

export default Home;
