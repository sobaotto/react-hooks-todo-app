import "../css/App.css";
import Filter from "./Filter";

function Footer(props) {
  return (
    <div className="footer">
      <Filter changeFilterState={props.changeFilterState} />
    </div>
  );
}

export default Footer;
