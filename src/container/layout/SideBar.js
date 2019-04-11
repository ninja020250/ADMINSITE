import React, { Component } from "react";
import $ from "jquery";
// import image
import { sidebar_background_image } from "../../common/image";
// import icon
import {
  sidebar_logo,
  dashboard_icon_svg,
  form_icon_svg,
  layout_icon_svg,
  table_icon_svg,
  uiComponent_icon_svg
} from "../../common/icon";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(".nav .li-outer").click(e => {
      console.log(e);
      if ($(e.currentTarget).hasClass("active")) {
        $(e.currentTarget).removeClass("active");
      } else {
        $(e.currentTarget).addClass("active");
      }
    });
  }
  navigateTo = to => {
    this.props.history.push(to);
  };
  handleSwitchPage = (page, innerPage) => {
    // do something
  };

  render() {
    return (
      <div
        className="sidebar "
        id="sidebar"
        data-color="pink"
        data-image={sidebar_background_image}
      >
        <div className="sidebar-wrapper">
          <div className="logo">
            <div href="#" className="simple-text">
              <img
                src={sidebar_logo}
                focusable="false"
                className="svg nav-custom-icon "
                alt=""
              />
              <a
                href="#"
                className="logo-text"
                onClick={() => {
                  this.navigateTo("/");
                }}
              >
                Dashboard
              </a>
            </div>
          </div>
          <ul className="nav flex-column">
            <li
              className="li-outer"
              onClick={() => {
                this.navigateTo("/");
              }}
            >
              <a
                href="#"
                className="has-arrow collapsed"
                data-toggle="collapse"
                href="#dashboard"
                aria-expanded="false"
                aria-controls="dashboard"
              >
                <svg
                  src={dashboard_icon_svg}
                  focusable="false"
                  className="svg nav-custom-icon"
                  alt=""
                />
                <span> Dashboard</span>
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
            <li className="li-outer">
              <a
                href="#"
                className="has-arrow collapsed"
                data-toggle="collapse"
                href="#layout"
                aria-expanded="false"
                aria-controls="layout"
              >
                {/* <i className="icon-layout" data-icon="b" /> */}
                <svg
                  src={layout_icon_svg}
                  focusable="false"
                  className="svg nav-custom-icon"
                  alt=""
                />
                <span> Layout</span>
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
            <li className="li-outer">
              <a
                href="#"
                className="has-arrow collapsed"
                data-toggle="collapse"
                href="#ui-components"
                aria-expanded="false"
                aria-controls="ui-components"
              >
                {/* <i className="icon-ui-components" data-icon="c" /> */}
                <svg
                  src={uiComponent_icon_svg}
                  focusable="false"
                  className="svg nav-custom-icon"
                  alt=""
                />
                <span> UI Components</span>
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
            <li
              className="li-outer"
              onClick={() => {
                this.navigateTo("/form-input");
              }}
            >
              <a
                href="#" className="has-arrow collapsed"
                data-toggle="collapse"
                href="#form"
                aria-expanded="false"
                aria-controls="form"
              >
                <svg
                  src={form_icon_svg}
                  focusable="false"
                  className="svg nav-custom-icon"
                  alt=""
                />
                <span> Form</span>
              </a>
              <ul className="nav collapse" id="form">
                <li>
                  <a
                    href=""
                    onClick={() => {
                      this.props.history.push("/form-input");
                    }}
                  >
                    Form 01
                  </a>
                </li>
                <li>
                  <a href="#">Form 02</a>
                </li>
                <li>
                  <a href="#">Form 03</a>
                </li>
              </ul>
            </li>
            <li className="li-outer">
              <a
                href="#"
                className="has-arrow collapsed"
                data-toggle="collapse"
                href="#table"
                aria-expanded="false"
                aria-controls="table"
              >
                {/* <i className="icon-table" data-icon="d" /> */}
                <svg
                  src={table_icon_svg}
                  focusable="false"
                  className="svg nav-custom-icon"
                  alt=""
                />
                <span>Table</span>
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
      </div>
    );
  }
}
