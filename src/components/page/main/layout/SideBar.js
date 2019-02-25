import React, { Component } from "react";
const dataImage = require("../../../../static/img/sidebar-5.jpg");
export default class SideBar extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div className="sidebar" id="sidebar" data-color="pink" data-image={dataImage}>
        <div className="sidebar-wrapper">
          <div className="logo">
            <div href="#" className="simple-text">
            <i className="icon-logo-1-cuong" aria-hidden="true"></i>
            <a href="#" className="logo-text">Dashboard</a>
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
                <i class="icon-dashboard"  data-icon="a"></i>
                
                <p>Dashboard</p>
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
               <i class="icon-layout" data-icon="b"></i>
                <p>Layout</p>
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
              <i class="icon-ui-components" data-icon="c"></i>
                <p>UI Components</p>
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
           <i class="icon-forms" data-icon="e"></i>
                <p>Form</p>
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
              <i class="icon-table" data-icon="d"></i>
                <p>Table</p>
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
