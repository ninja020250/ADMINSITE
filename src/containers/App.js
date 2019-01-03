import React, { Component } from "react";
import { Provider } from "react-redux";
import "../styles/index.css";
import SideBar from "../components/page/main/layout/SideBar";
class App extends Component {
  render() {
    return <SideBar />;
  }
}
export default App;
