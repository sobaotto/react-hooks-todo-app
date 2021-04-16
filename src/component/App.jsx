import "../css/App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Top from "./Top";
import Detail from "./Detail";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={Top} />
        <Route exact path="/detail/:id" component={Detail} />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
