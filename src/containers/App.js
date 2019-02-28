import React, { Component } from "react";
import { Provider } from "react-redux";
import "../styles/index.scss";
import SideBar from "../components/layout/SideBar";
import MainPanel from "../components/layout/MainPanel";
import icon from '../lib/handleIconSVG.js'
import $ from 'jquery'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      currentInnerPage: 1
    }
  }
  handleSwitchPage = (currentPage,currentInnerPage) => {
    this.setState({
      ...this.state,
      currentPage: currentPage,
      currentInnerPage: currentInnerPage
    })
  }
  componentDidMount() {
    $("svg.svg").each(icon);
    // $("svg.white-svg").each(icon);
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
    var prevScrollpos = window.pageYOffset;
   
  }
  render() {
    return (
      <div className="wrapper">
        <SideBar switchPage={this.handleSwitchPage}/>
        <MainPanel />
      </div>
    );
  }
}
export default App;
