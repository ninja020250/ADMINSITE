import React from "react";
import ReactDom from "react-dom";
import App from "../containers/App";
import "../lib";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDom.render(
  <div>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </div>,
  document.getElementById("root")
);
