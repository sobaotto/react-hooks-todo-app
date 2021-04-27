import "../css/App.css";
import Filter from "./Filter";

function Footer(props) {
  return (
    <div className="footer">
      <Filter
        changeFilterState={props.changeFilterState}
        filterState={props.filterState}
      />
    </div>
  );
}

export default Footer;
