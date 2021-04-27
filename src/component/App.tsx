import "../css/App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";
import { Edit } from "./Edit";
import { Header } from "./Header";

type Todo = {
  createdAt: Date;
  isDone: boolean;
  title: string;
};

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos") as string) || []
  );
  const [inputText, setInputText] = useState("");
  const [editingText, setEditingText] = useState("");
  const [filterState, setFilterState] = useState("all");

  useEffect((): void => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const redirectToRoot = (): void => {

    const history = useHistory();
    // const handleLink = (path: any) => history.push(path);
    history.push("/");
    // window.location.pathname = "/";
  };

  const changeFilterState = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilterState(e.target.value);
  };

  const updateInputText = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
  };

  const updateEditingText = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEditingText(e.target.value);
  };

  const inputEditingText = (editingTitle: string): void => {
    setEditingText(editingTitle);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (inputText.trim() === "") {
      return;
    }

    const todosCopy: Todo[] = [...todos];
    todosCopy.push({
      createdAt: new Date(),
      isDone: false,
      title: inputText,
    });

    setTodos(todosCopy);
    setInputText("");
  };

  const updateTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const editingItemIdString: string = e.currentTarget.id;
    const editingItemId = parseInt(editingItemIdString);

    if (editingText.trim() === "") {
      return;
    }

    const todosCopy: Todo[] = [...todos];
    todosCopy[editingItemId].title = editingText;

    setTodos(todosCopy);
    setEditingText("");
    redirectToRoot();
  };

  const deleteTodo = (targetTodoCreatedAt: Date) => {
    const todosCopy: Todo[] = [...todos];

    const newTodos: Todo[] = todosCopy.filter(
      (todo: Todo) => todo.createdAt !== targetTodoCreatedAt
    );
    setTodos(newTodos);
  };

  const toggleCheck = (targetTodoCreatedAt: Date) => {
    const createdAtArray: Date[] = todos.map((todo: Todo) => todo.createdAt);

    const editingTodoIndex: number = createdAtArray.indexOf(
      targetTodoCreatedAt
    );

    const todosCopy: Todo[] = [...todos];
    const checkedState: boolean = todosCopy[editingTodoIndex].isDone;

    checkedState
      ? (todosCopy[editingTodoIndex].isDone = false)
      : (todosCopy[editingTodoIndex].isDone = true);

    setTodos(todosCopy);
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
};

export { App };
