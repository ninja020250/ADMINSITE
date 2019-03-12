import React, { Component } from "react";
import { Provider } from "react-redux";
import "../styles/index.scss";
import SideBar from "../components/layout/SideBar";
import MainPanel from "../components/layout/MainPanel";
import icon from "../lib/handleIconSVG.js";
import $ from "jquery";
import NewSideBar from "../components/layout/NewSideBar";
import NewNAV from "../components/layout/NewNAV";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      currentInnerPage: 1
    };
  }
  handleSwitchPage = (currentPage, currentInnerPage) => {
    this.setState({
      ...this.state,
      currentPage: currentPage,
      currentInnerPage: currentInnerPage
    });
  };

  componentDidMount() {
    $("svg.svg").each(icon);
    $(document).ready(function() {
      $("#sidebarCollapse").on("click", function() {
        $("#sidebar").toggleClass("active");
      });
    });
  }
  render() {
    return (
      <div className="wrapper">
        <NewSideBar />
        {/* <SideBar switchPage={this.handleSwitchPage} history={this.props.history}/> */}

        <div id="content">
          <NewNAV />
          <MainPanel />
        </div>
      </div>
    );
  }
}
export default App;
