import React, { Component } from "react";
import { UserActivity } from "../page/dashboard/Activities";
import $ from "jquery";
export default class NewNAV extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div id="sidebarCollapse" className="">
            <i className="fa fa-bars" aria-hidden="true" />
            <span className="ml-3"> Dashboard</span>
          </div>
          <button
            className="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars" aria-hidden="true" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto  right-items">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <SearchBox />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <DropDownNotification />
                </a>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="#">
                  <UserButton />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

class SearchBox extends Component {
  render() {
    return (
      <div className="search-box">
        {/* <input
            type="text"
            className="form-control search-txt animated slideInRight fast"
            placeholder="type something faster"
          /> */}
        <i className="fa fa-search" aria-hidden="true" />
      </div>
    );
  }
}

class DropDownNotification extends Component {
  render() {
    return (
      <div className="dropdown notification ">
        <i
          className="fa fa-bell-o"
          aria-hidden="true"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        />
        <div className="notify-count count1 common-count" count="0">
          <div className="value">0</div>
        </div>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div className="card">
            <div className="card-header">
              <div className=" il">Recent Notification</div>
              <div className="notify-count count2 il fr" count="0">
                <div className="value">0</div>
              </div>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <UserActivity
                    image="https://i.pinimg.com/originals/68/02/93/680293e226b6edbd34f8e1ec55e955dc.png"
                    content="blackpink liked your post"
                    time="2 days ago/ 8 minutes"
                  />
                </li>
                <li>
                  <UserActivity
                    image="https://i.pinimg.com/originals/0f/8b/b0/0f8bb01845f7b10827e0afdaee59bcaa.png"
                    content="blackpink punch your face 2 times "
                    time="2 days ago/ 8 minutes"
                  />
                </li>
                <li>
                  <UserActivity
                    image="https://pbs.twimg.com/profile_images/979349990978940929/mFKt2QFK_400x400.jpg"
                    content="blackpink liked your post"
                    time="2 days ago/ 8 minutes"
                  />
                </li>
                <li>
                  <UserActivity
                    image="https://steamuserimages-a.akamaihd.net/ugc/965348083814963524/ABA356016F1A367BEAC9398743FB85BAAF3D4DDF/"
                    content="blackpink liked your post"
                    time="2 days ago/ 8 minutes"
                  />
                </li>
              </ul>
            </div>
            <div className="card-footer">All Activity</div>
          </div>
        </div>
      </div>
    );
  }
}

class UserButton extends Component {
  render() {
    return (
      <div className="user-btn dropdown ">
        <div
          className="user-btn-image"
          id="dropdownUser"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            src="https://yt3.ggpht.com/a-/AAuE7mAJaPg2vQpOTNi9Rz8PfcPEaB2EJNX1q6V3Zg=s900-mo-c-c0xffffffff-rj-k-no"
            alt="justin"
          />
        </div>
        <div
          className="dropdown-menu user-dropdown"
          aria-labelledby="dropdownUser"
        >
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </div>
    );
  }
}
