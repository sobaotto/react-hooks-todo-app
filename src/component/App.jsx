import "../css/App.css";
import React from "react";
import Header from "./Header";
import AddForm from "./AddForm";
import ItemList from "./ItemList";
import Footer from "./Footer";
import { FILTER_STATE } from "../const/filter-state";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodoTitle: "",
      // 定数化したいが、どこに定義するべきか？
      filterState: FILTER_STATE.ALL,
    };
    // bindって何？2021/04/14
    this.addTodo = this.addTodo.bind(this);
    this.inputText = this.inputText.bind(this);
    this.toggleCheck = this.toggleCheck.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.changeFilterState = this.changeFilterState.bind(this);
  }

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  componentDidMount() {
    this.setState({
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    });
  }

  addTodo(e) {
    e.preventDefault();

    if (this.state.newTodoTitle.trim() === "") {
      return;
    }

    const todosCopy = this.state.todos.slice();
    todosCopy.push({
      createdAt: new Date(),
      isDone: false,
      title: this.state.newTodoTitle,
    });

    this.setState({
      todos: todosCopy,
      newTodoTitle: "",
    });
  }

  inputText(e) {
    this.setState({
      newTodoTitle: e.target.value,
    });
  }

  toggleCheck(targetTodoCreatedAt) {
    const createdAtArray = this.state.todos.map((todo) => todo.createdAt);

    const editingTodoIndex = createdAtArray.indexOf(targetTodoCreatedAt);

    const todosCopy = this.state.todos.slice();
    const checkedState = todosCopy[editingTodoIndex].isDone;

    checkedState
      ? (todosCopy[editingTodoIndex].isDone = false)
      : (todosCopy[editingTodoIndex].isDone = true);

    this.setState({
      todos: todosCopy,
    });
  }

  deleteTodo(targetTodoCreatedAt) {
    const todosCopy = this.state.todos.slice();

    const newTodos = todosCopy.filter(
      (todo) => todo.createdAt !== targetTodoCreatedAt
    );

    this.setState({
      todos: newTodos,
    });
  }

  changeFilterState(e) {
    this.setState({
      filterState: e.target.textContent,
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <AddForm
          addTodo={this.addTodo}
          newTodoTitle={this.state.newTodoTitle}
          inputText={this.inputText}
        />
        <ItemList
          todos={this.state.todos}
          toggleCheck={this.toggleCheck}
          deleteTodo={this.deleteTodo}
          filterState={this.state.filterState}
        />
        <Footer changeFilterState={this.changeFilterState} />
        <p>[{this.state.filterState}]を表示</p>
      </div>
    );
  }
}

export default App;
