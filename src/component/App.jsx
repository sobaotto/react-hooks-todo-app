import "../css/App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import Edit from "./Edit";
import { FILTER_STATE } from "../const/filter-state";
import Header from "./Header";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [inputText, setInputText] = useState("");
  const [editingText, setEditingText] = useState("");
  const [filterState, setFilterState] = useState(FILTER_STATE.ALL);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  const redirectToRoot = () => {
    window.location.pathname = "/";
  };

  function changeFilterState(e) {
    setFilterState(e.target.value);
  }

  function updateInputText(e) {
    setInputText(e.target.value);
  }

  function updateEditingText(e) {
    setEditingText(e.target.value);
  }

  function inputEditingText(editingTitle) {
    setEditingText(editingTitle);
  }

  function addTodo(e) {
    e.preventDefault();

    if (inputText.trim() === "") {
      return;
    }

    const todosCopy = todos.slice();
    todosCopy.push({
      createdAt: new Date(),
      isDone: false,
      title: inputText,
    });

    setTodos(todosCopy);
    setInputText("");
  }

  function updateTodo(e) {
    e.preventDefault();
    const editingItemId = e.target.id;
    console.log(editingText);

    if (editingText.trim() === "") {
      return;
    }

    const todosCopy = todos.slice();
    todosCopy[editingItemId].title = editingText;
    console.log(todosCopy);

    setTodos(todosCopy);
    setEditingText("");
    redirectToRoot();
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
        <Route exact path="/">
          <Home
            addTodo={addTodo}
            inputText={inputText}
            updateInputText={updateInputText}
            todos={todos}
            toggleCheck={toggleCheck}
            deleteTodo={deleteTodo}
            filterState={filterState}
            changeFilterState={changeFilterState}
          />
        </Route>
        <Route exact path="/detail/:id">
          <Detail todos={todos} />
        </Route>
        <Route exact path="/edit/:id">
          <Edit
            todos={todos}
            updateTodo={updateTodo}
            editingText={editingText}
            updateEditingText={updateEditingText}
            inputEditingText={inputEditingText}
          />
        </Route>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
