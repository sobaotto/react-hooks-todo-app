import "../css/App.css";
import { Filter } from "./Filter";

type FooterProps = {
  changeFilterState: React.ChangeEventHandler<HTMLInputElement>;
  filterState: string;
};

const Footer = (props: FooterProps): JSX.Element => {
  return (
    <div className="footer">
      <Filter
        changeFilterState={props.changeFilterState}
        filterState={props.filterState}
      />
    </div>
  );
};

export { Footer };
