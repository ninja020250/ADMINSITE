import React, { Component } from "react";
const dataImage = require("../../../../static/img/sidebar-5.jpg");
export default class SideBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="sidebar"
        id="sidebar"
        data-color="pink"
        data-image={dataImage}
      >
        <div className="sidebar-wrapper">
          <div className="logo">
            <div href="#" className="simple-text">
              {/* <i className="icon-logo-1-cuong" aria-hidden="true" /> */}
              <svg
                  src={require("../../../../static/icon/logo.svg")}
                  focusable="false"
                  className="svg nav-custom-icon "
                  alt=""
                />
              <a href="#" className="logo-text">
                Dashboard
              </a>
            </div>
          </div>
          <ul className="nav flex-column">
            <li className="active">
              <a
                href="#"
                className="has-arrow collapsed"
                data-toggle="collapse"
                href="#dashboard"
                aria-expanded="false"
                aria-controls="dashboard"
              >
                {/* <i class="icon-dashboard"  data-icon="a"></i> */}
                <svg
                  src={require("../../../../static/icon/dashboardSelected.svg")}
                  focusable="false"
                  className="svg nav-custom-icon"
                  alt=""
                />
             Dashboard
              </a>
              <ul className="nav collapse" id="dashboard">
                <li>
                  <a href="#">Dashboard 01</a>
                </li>
                <li>
                  <a href="#">Dashboard 02</a>
                </li>
                <li>
                  <a href="#">Dashboard 03</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="has-arrow collapsed"
                data-toggle="collapse"
                href="#layout"
                aria-expanded="false"
                aria-controls="layout"
              >
                {/* <i class="icon-layout" data-icon="b" /> */}
                <svg
                  src={require("../../../../static/icon/layout.svg")}
                  focusable="false"
                  className="svg nav-custom-icon"
                  alt=""
                />
              Layout
              </a>
              <ul className="nav collapse" id="layout">
                <li>
                  <a href="#">Layout 01</a>
                </li>
                <li>
                  <a href="#">Layout 02</a>
                </li>
                <li>
                  <a href="#">Layout 03</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="has-arrow collapsed"
                data-toggle="collapse"
                href="#ui-components"
                aria-expanded="false"
                aria-controls="ui-components"
              >
                {/* <i class="icon-ui-components" data-icon="c" /> */}
                <svg
                  src={require("../../../../static/icon/uiComponents.svg")}
                  focusable="false"
                  className="svg nav-custom-icon"
                  alt=""
                />
               UI Components
              </a>
              <ul className="nav collapse" id="ui-components">
                <li>
                  <a href="#">Layout 01</a>
                </li>
                <li>
                  <a href="#">Layout 02</a>
                </li>
                <li>
                  <a href="#">Layout 03</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="has-arrow collapsed"
                data-toggle="collapse"
                href="#form"
                aria-expanded="false"
                aria-controls="form"
              >
                {/* <i class="icon-forms" data-icon="e" /> */}
                <svg
                  src={require("../../../../static/icon/forms.svg")}
                  focusable="false"
                  className="svg nav-custom-icon"
                  alt=""
                />
              Form
              </a>
              <ul className="nav collapse" id="form">
                <li>
                  <a href="#">Form 01</a>
                </li>
                <li>
                  <a href="#">Form 02</a>
                </li>
                <li>
                  <a href="#">Form 03</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="has-arrow collapsed"
                data-toggle="collapse"
                href="#table"
                aria-expanded="false"
                aria-controls="table"
              >
                {/* <i class="icon-table" data-icon="d" /> */}
                <svg
                  src={require("../../../../static/icon/table.svg")}
                  focusable="false"
                  className="svg nav-custom-icon"
                  alt=""
                />
                Table  
              </a>
              <ul className="nav collapse" id="table">
                <li>
                  <a href="#">Table 01</a>
                </li>
                <li>
                  <a href="#">Table 02</a>
                </li>
                <li>
                  <a href="#">Table 03</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* 
Tip 1: you can change the color of the sidebar using: data-color="blue | azure | green | orange | red | purple"
Tip 2: you can also add an image using data-image tag */}
      </div>
    );
  }
}
