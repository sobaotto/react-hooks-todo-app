import "../css/App.css";

function Filter(props) {
  return (
    <div className="filter">
      <button onClick={props.changeFilterState}>All</button>
      <button onClick={props.changeFilterState}>Active</button>
      <button onClick={props.changeFilterState}>Completed</button>
    </div>
  );
}

export default Filter;
