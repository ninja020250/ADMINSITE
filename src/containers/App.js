import React, { Component } from "react";
import { Provider } from "react-redux";
import "../styles/index.scss";
import SideBar from "../components/page/main/layout/SideBar";
class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SideBar />
      </div>
    );
  }
}
export default App;
