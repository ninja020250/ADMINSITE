/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { sidebar_background_image } from "../../common/image";
import {LINK_HOME,LINK_FORM_INPUT,LINK_CHECKBOX_RADIO,LINK_INPUT_GROUPS } from '../../common/constant';
// import icon
import {
  sidebar_logo,
  dashboard_icon_svg,
  form_icon_svg,
  layout_icon_svg,
  table_icon_svg,
  uiComponent_icon_svg
} from "../../common/icon";

const links = [
  {
    to: LINK_HOME,
    name: "Dashboard",
    icon: dashboard_icon_svg,
    id: "tabSubDashboard",
    isActive: true,
    childrens: [
      {
        to: LINK_HOME,
        name: "home"
      }
    ]
  },
  {
    to: LINK_HOME,
    name: "Layouts",
    icon: layout_icon_svg,
    id: "tabSubLayout",
    isActive: false,
    childrens: [
      {
        to: "/layout",
        name: "layout"
      }
    ]
  },
  {
    to:LINK_HOME,
    name: "UI Components",
    icon: uiComponent_icon_svg,
    id: "tabSubUIComponents",
    isActive: false,
    childrens: [
      {
        to: "/UI-Components",
        name: "UI Components"
      }
    ]
  },
  {
    to: LINK_HOME,
    name: "Forms",
    icon: form_icon_svg,
    id: "tabSubFormInput",
    isActive: false,
    childrens: [
      {
        to: LINK_FORM_INPUT,
        name: "Form input"
      },
      {
        to: LINK_CHECKBOX_RADIO,
        name: "Checkbox & Radio"
      },
      {
        to: LINK_INPUT_GROUPS,
        name: "Input Groups"
      }
    ]
  },
  {
    to: LINK_HOME,
    name: "Tables",
    icon: table_icon_svg,
    id: "tabSubTable",
    isActive: false,
    childrens: [
      {
        to: "/Tables",
        name: "Tables"
      }
    ]
  }
];
export default class NewSideBar extends Component {
  render() {
    return (
      <nav id="sidebar" data-color="blue">
        <div className="sidebar-header">
          <h3 className="sidebar-header-title">
            <a
              href=""
              onClick={() => {
                this.props.history.push("/home");
              }}
            >
              <img
                src={sidebar_logo}
                focusable="false"
                className="svg nav-custom-icon mr-3"
                alt=""
              />
            </a>
            ADMIN SITE
          </h3>
          <strong>
            <img
              src={sidebar_logo}
              focusable="false"
              className="svg nav-custom-icon "
              alt=""
            />
          </strong>
        </div>

        <ul className="list-unstyled components">
          {links.map(link => {
            return (
              <li className={link.isActive ? "active" : ""}>
                <a
                  href={`#${link.id}`}
                  data-toggle="collapse"
                  aria-expanded="false"
                  className="dropdown-toggle"
                >
                  <svg
                    src={link.icon}
                    focusable="false"
                    className="svg nav-custom-icon"
                    alt=""
                  />
                  <span>{link.name}</span>
                </a>
                <ul className="collapse list-unstyled" id={link.id}>
                  {link.childrens.map(child => {
                    return (
                      <li
                        onClick={() => {
                          this.props.history.push(child.to);
                        }}
                      >
                        <a href="">{child.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
