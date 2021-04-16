import "../css/App.css";
import React, { useState } from "react";

function Detail(props) {
  const { id } = props.match.params;
  // stateを受け取れなくて結局ここで改めてstateを宣言してしまった。2021/04/16
  const [todos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

  return <div className="container">{todos[id].title}</div>;
}

export default Detail;
