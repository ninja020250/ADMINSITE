import React, { Component } from "react";
const dataImage = require("../../../../static/img/sidebar-5.jpg");
export default class SideBar extends Component {
  render() {
    return (
      <div className="sidebar" data-color="purple" data-image={dataImage}>
        <div className="sidebar-wrapper">
          <div className="logo">
            <a href="#" className="simple-text">ADMINSITE</a>
          </div>
          <ul className="nav flex-column">
            <li className="active">
              <a href="#">
              <i className="fa fa-address-card" aria-hidden="true"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li>
              <a href="#">
              <i className="fa fa-address-card" aria-hidden="true"></i>
                <p>Dashboard</p>
              </a>
            </li>
            <li>
              <a href="#">
              <i className="fa fa-address-card" aria-hidden="true"></i>
                <p>Dashboard</p>
              </a>
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
