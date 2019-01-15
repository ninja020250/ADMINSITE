import React, { Component } from "react";
import { Provider } from "react-redux";
import "../styles/index.scss";
import SideBar from "../components/page/main/layout/SideBar";
import MainPanel from "../components/page/main/layout/MainPanel";

class App extends Component {
  componentDidMount() {
    $("#sidebartoggler").click(function() {
      if ($("#sidebar").hasClass("sidebar-hiden")) {
        $("#sidebar").removeClass("sidebar-hiden");
        $("#sidebar").removeClass("toggle");
        $(".main-panel").removeClass("expand-sidebar");
      } else {
        $(".main-panel").addClass("expand-sidebar");
        $("#sidebar").addClass("sidebar-hiden");
        $("#sidebar").addClass("toggle");
      }
    });

    $("#sidebar").hover(
      function() {
        if ($(this).hasClass("sidebar-hiden")) {
          $(this).removeClass("sidebar-hiden");
          $(".expand-sidebar").removeClass("expand-sidebar");
        }
      },
      function() {
        if ($(this).hasClass("toggle")) {
          $(this).addClass("sidebar-hiden");
          $(".main-panel").addClass("expand-sidebar");
        }
       // $(this).addClass("sidebar-hiden");
      //  $(".main-panel").addClass("expand-sidebar");
      }
    );
  }
  render() {
    return (
      <div className="wrapper">
        <SideBar />
        <MainPanel />
      </div>
    );
  }
}
export default App;
