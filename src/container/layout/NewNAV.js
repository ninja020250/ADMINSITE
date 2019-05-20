import React, { Component } from "react";
import { UserActivity } from "../components/dashboard/Activities";
import $ from "jquery";
export default class NewNAV extends Component {
  render() {
    return (
      <nav className="navbar   ">
        <div className="container-fluid">
          <div id="sidebarCollapse" className="">
            <i className="fa fa-bars" aria-hidden="true" />
            <span className="ml-3"> Dashboard</span>
          </div>
          <SearchBox class="ml-5" />
          {/* <button
            className="btn btn-dark d-inline-block d-lg-none ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars" aria-hidden="true" />
          </button> */}
          <ul class="nav">
            <li className="nav-item active">
              <span
                className="nav-link"
                href=""
                data-toggle="modal"
                data-target="#searchBoxModal"
              >
                <i class="fa fa-search" />
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" href="">
                <DropDownNotification />
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link" href="">
                <UserButton />
              </span>
            </li>
          </ul>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ml-auto  right-items">
              <li className="nav-item active">
              <i class="fa fa-search" />
              </li>
              <li className="nav-item">
                <span className="nav-link" href="">
                  <DropDownNotification />
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" href="">
                  <UserButton />
                </span>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    );
  }
}

class SearchBox extends Component {
  render() {
    return (
      // <div className="">
      //   <input
      //       type="text"
      //       className="form-control"
      //       placeholder="type something faster"
      //     />
      //   <i className="fa fa-search" aria-hidden="true" />
      // </div>

      // <div class={`search-box ${this.props.class}`}>
      //   <i class="fa fa-search" />
      //   <input className="form-control" placeholder="Search term" />
      // </div>
      <div
        class="modal fade search-box-navigation"
        id="searchBoxModal"
        data-backdrop="false"
        role="dialog"
        tabIndex="-1"
        aria-labelledby="searchBoxModal"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <input  placeholder="Search..." />
              <i class="fa fa-times" aria-hidden="true" data-dismiss="modal"/>
            </div>
          </div>
        </div>
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
          <div className="card card-custom">
            <div className="card-header">
              <div className="il">Recent Notification</div>
              <div className="notify-count count2 il fr" count="0">
                <div className="value">0</div>
              </div>
            </div>
            <div className="card-body">
              <ul>
                <li>
                  <UserActivity
                    image="https://i.pinimg.com/originals/68/02/93/680293e226b6edbd34f8e1ec55e955dc.png"
                    content="rose liked your post"
                    time="2 days ago/ 8 minutes"
                  />
                </li>
                <li>
                  <UserActivity
                    image="https://i.pinimg.com/originals/0f/8b/b0/0f8bb01845f7b10827e0afdaee59bcaa.png"
                    content="Jisoo say Hello "
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
                    content="lisa send you an image"
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
      </div>
    );
  }
}
