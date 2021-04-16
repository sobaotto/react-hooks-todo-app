import "../css/App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import { FILTER_STATE } from "../const/filter-state";
import Header from "./Header";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [filterState, setFilterState] = useState(FILTER_STATE.ALL);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  // １文字ずつしか入力できなくなった。2021/04/16
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
    <BrowserRouter>
      <React.Fragment>
        <Route path="/" component={Header} />
        <Route
          exact
          path="/"
          component={() => (
            <Home
              addTodo={addTodo}
              newTodoTitle={newTodoTitle}
              inputText={inputText}
              todos={todos}
              toggleCheck={toggleCheck}
              deleteTodo={deleteTodo}
              filterState={filterState}
              changeFilterState={changeFilterState}
            />
          )}
        />
        <Route exact path="/detail/:id" component={Detail} />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
