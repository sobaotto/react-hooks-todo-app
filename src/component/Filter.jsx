import { FILTER_STATE } from "../const/filter-state";
import "../css/App.css";

function Filter(props) {
  return (
    <form id="filterList">
      <label>
        <input
          type="radio"
          className="filter"
          value="all"
          checked={props.filterState === FILTER_STATE.ALL}
          onChange={props.changeFilterState}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          className="filter"
          value="active"
          checked={props.filterState === FILTER_STATE.ACTIVE}
          onChange={props.changeFilterState}
        />
        Active
      </label>
      <label>
        <input
          type="radio"
          className="filter"
          value="completed"
          checked={props.filterState === FILTER_STATE.COMPLETED}
          onChange={props.changeFilterState}
        />
        Completed
      </label>
    </form>
  );
}

export default Filter;
