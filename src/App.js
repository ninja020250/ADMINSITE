import React, { Component } from "react";
import $ from "jquery";

import icon from "./common/handleIconSVG";

import { Sidebar, NAV, MainPanel } from "./container/layout";
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
        <Sidebar history={this.props.history}/>
        {/* <SideBar switchPage={this.handleSwitchPage} history={this.props.history}/> */}

        <div id="content">
          <NAV />
          <MainPanel  />
        </div>
      </div>
    );
  }
}

export default App;
