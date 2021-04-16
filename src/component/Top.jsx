import "../css/App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import AddForm from "./AddForm";
import ItemList from "./ItemList";
import Footer from "./Footer";
import { FILTER_STATE } from "../const/filter-state";

function Top() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [filterState, setFilterState] = useState(FILTER_STATE.ALL);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  function inputText(e) {
    setNewTodoTitle(e.target.value);
  }

  function changeFilterState(e) {
    setFilterState(e.target.textContent);
  }

  function addTodo(e) {
    e.preventDefault();

    if (newTodoTitle.trim() === "") {
      return;
    }

    const todosCopy = todos.slice();
    todosCopy.push({
      createdAt: new Date(),
      isDone: false,
      title: newTodoTitle,
    });

    setTodos(todosCopy);
    setNewTodoTitle("");
  }

  function deleteTodo(targetTodoCreatedAt) {
    const todosCopy = todos.slice();

    const newTodos = todosCopy.filter(
      (todo) => todo.createdAt !== targetTodoCreatedAt
    );
    setTodos(newTodos);
  }

  function toggleCheck(targetTodoCreatedAt) {
    const createdAtArray = todos.map((todo) => todo.createdAt);

    const editingTodoIndex = createdAtArray.indexOf(targetTodoCreatedAt);

    const todosCopy = todos.slice();
    const checkedState = todosCopy[editingTodoIndex].isDone;

    checkedState
      ? (todosCopy[editingTodoIndex].isDone = false)
      : (todosCopy[editingTodoIndex].isDone = true);

    setTodos(todosCopy);
  }

  return (
    <div className="container">
      <Header />
      <AddForm
        addTodo={addTodo}
        newTodoTitle={newTodoTitle}
        inputText={inputText}
      />
      <ItemList
        todos={todos}
        toggleCheck={toggleCheck}
        deleteTodo={deleteTodo}
        filterState={filterState}
      />
      <Footer changeFilterState={changeFilterState} />
      <p>[{filterState}]を表示</p>
    </div>
  );
}

export default Top;
