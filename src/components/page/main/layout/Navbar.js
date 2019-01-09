import React, { Component } from "react";

export default class Navbar extends Component {
  componentDidMount() {
  
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
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
          <ul className="navbar-nav mr-auto ">
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
        <div
          className="dropdown-menu notification-dropdown dd"
          aria-labelledby="dropdownMenuButton"
        >
          <div className="header">
            <div className="container">
              <div className="text fl">Notifications</div>
              <div className="notify-count common-count count2 fl" count="0">
                <div className="value">0</div>
              </div>
            </div>
          </div>
          <div className="items">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
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
          className="search-txt"
          placeholder="type something"
        />
        <a href="#" className="search-btn">
          <i className="fa fa-search" aria-hidden="true" />
        </a>
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
            src="https://pbs.twimg.com/profile_images/898295311893880832/bCps4HFV_400x400.jpg"
            alt="justin"
          />
        </div>
        <div className="dropdown-menu user-dropdown" aria-labelledby="dropdownUser">
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
