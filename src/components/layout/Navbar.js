import React, { Component } from "react";
import { UserActivity } from "../page/dashboard/Activities";
import $ from 'jquery'
export default class Navbar extends Component {
  componentDidMount() {
    $(".search-txt").hide();
    $(".search-box i").click(function(){
      if($(".search-txt").css("display") == "none"){
        $(".search-txt").show();
      }else{
        $(".search-txt").hide();
      }
    });
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg crolling-nav ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item navbar-logo" id="sidebartoggler">
              <a href="#" className="sidebartoggler nav-link">
                <i className="fa fa-bars" aria-hidden="true" />
              </a>
            </li>
            <li className="nav-item navbar-logo-text">
              <a className="nav-link" href="#">
                Dashboard
              </a>
            </li>
          </ul>

          <div className="form-inline mr-6 my-lg-6 navbar-nav-search">
            <SearchBox />
            <DropDownNotification />
            <UserButton />
          </div>
        </div>
      </nav>
    );
  }
}
var initial_data = [
  {
    text: "likes your photo",
    name: "Abhijeet",
    image:
      "https://pbs.twimg.com/profile_images/898295311893880832/bCps4HFV_400x400.jpg",
    read: false
  },
  {
    text: "commented on your post",
    name: "Abhimanyu",
    image:
      "https://pbs.twimg.com/profile_images/898295311893880832/bCps4HFV_400x400.jpg",
    read: false
  },
  {
    text: "posted something on your wall",
    name: "Geet",
    image:
      "https://pbs.twimg.com/profile_images/898295311893880832/bCps4HFV_400x400.jpg",
    read: false
  }
];

class Item extends Component {
  render() {
    return (
      <div className="list-item">
        <div className="image fl">
          <img src={initial_data[0].image} />
        </div>
        <div className="text fl">
          <b>chớ tin bi bờ</b> đã like ảnh của bạn
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
                  time="2 days ago/ 8 minutes"/>
                </li>
                <li>
                  <UserActivity 
                  image="https://i.pinimg.com/originals/0f/8b/b0/0f8bb01845f7b10827e0afdaee59bcaa.png"
                  content="blackpink punch your face 2 times "
                  time="2 days ago/ 8 minutes"/>
                </li>
                <li>
                  <UserActivity 
                  image="https://pbs.twimg.com/profile_images/979349990978940929/mFKt2QFK_400x400.jpg"
                  content="blackpink liked your post"
                  time="2 days ago/ 8 minutes"/>
                </li>
                <li>
                  <UserActivity 
                  image="https://steamuserimages-a.akamaihd.net/ugc/965348083814963524/ABA356016F1A367BEAC9398743FB85BAAF3D4DDF/"
                  content="blackpink liked your post"
                  time="2 days ago/ 8 minutes"/>
                </li>
              </ul>
           
            </div>
            <div className="card-footer">
              All Activity
              </div>
          </div>
        </div>
      </div>
    );
  }
}
class SearchBox extends Component {
  render() {
    return (
      <div className="search-box">
        <input
          type="text"
          className="form-control search-txt animated slideInRight fast"
          placeholder="type something faster"
        />
          <i className="fa fa-search" aria-hidden="true" />
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
