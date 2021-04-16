import "../css/App.css";

function Detail(props) {
  const { id } = props.match.params;
  return (
    <div className="container">
      <p>{id}</p>
    </div>
  );
}

export default Detail;
