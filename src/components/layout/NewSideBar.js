import React, { Component } from "react";
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
export default class NewSideBar extends Component {
  render() {
    return (
      <nav id="sidebar" data-color="blue">
        <div className="sidebar-header">
          <h3 className="sidebar-header-title">
            <img
              src={sidebar_logo}
              focusable="false"
              className="svg nav-custom-icon mr-3"
              alt=""
            />
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
          <li className="active">
            <a
              href="#dashboardSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
               <svg
                  src={dashboard_icon_svg}
                  focusable="false"
                  className="svg nav-custom-icon"
                  alt=""
                />
              <span>Dashboard</span>
            </a>
            <ul className="collapse list-unstyled" id="dashboardSubmenu">
              <li>
                <a href="#">Home 1</a>
              </li>
              <li>
                <a href="#">Home 2</a>
              </li>
              <li>
                <a href="#">Home 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#layoutSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
               <svg
                  src={layout_icon_svg}
                  focusable="false"
                  className="svg nav-custom-icon"
                  alt=""
                />
              <span>Layouts</span>
            </a>
            <ul className="collapse list-unstyled" id="layoutSubmenu">
              <li>
                <a href="#">layout 1</a>
              </li>
              <li>
                <a href="#">layout 2</a>
              </li>
              <li>
                <a href="#">layout 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#uiCompoentSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
               <svg
                  src={uiComponent_icon_svg}
                  focusable="false"
                  className="svg nav-custom-icon"
                  alt=""
                />
              <span>UI Components</span>
            </a>
            <ul className="collapse list-unstyled" id="uiCompoentSubmenu">
              <li>
                <a href="#">UI Component 1</a>
              </li>
              <li>
                <a href="#">UI Component 2</a>
              </li>
              <li>
                <a href="#">UI Component 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#formSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
               <svg
                  src={form_icon_svg}
                  focusable="false"
                  className="svg nav-custom-icon"
                  alt=""
                />
              <span>Forms</span>
            </a>
            <ul className="collapse list-unstyled" id="formSubmenu">
              <li>
                <a href="#">form 1</a>
              </li>
              <li>
                <a href="#">form 2</a>
              </li>
              <li>
                <a href="#">form 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#tableSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
               <svg
                  src={table_icon_svg}
                  focusable="false"
                  className="svg nav-custom-icon"
                  alt=""
                />
              <span>Tables</span>
            </a>
            <ul className="collapse list-unstyled" id="tableSubmenu">
              <li>
                <a href="#">table 1</a>
              </li>
              <li>
                <a href="#">table 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>
        </ul>
        
      </nav>
    );
  }
}
