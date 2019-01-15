import React, { Component } from "react";

export default class Activities extends Component {
  render() {
    return (
      <div className="activities-card">
        <div className="activities-card-title">Activities</div>
        <div className="card ">
          <div className="card-body">
            <div className="col-12 activities-left">
              <div className="activities">
                <ul className="activities-user">
                  <li>
                    <UserActivity />
                  </li>
                  <li>
                    <UserActivity />
                  </li>
                  <li>
                    <UserActivity />
                  </li>
                  <li>
                    <UserActivity />
                  </li>
                  <li>
                    <UserActivity />
                  </li>
                  <li>
                    <UserActivity />
                  </li>
                  <li>
                    <UserActivity />
                  </li>
                  <li>
                    <UserActivity />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class UserActivity extends Component {
  render() {
    return (
      <div className="user-activities ">
        <div className="activities-point">
          <div className="activities-point-inner" />
        </div>
        <div className="media activities-content">
          <div className="activities-ava align-self-start mr-3">
            <img
              src="https://i.pinimg.com/originals/75/b3/9d/75b39d9c54d97dff16bc0b545a37c43c.jpg"
              alt="sj"
            />
          </div>
          <div className="activities-text media-body">
            <p className="activities-text-title mt-0">New Customer Feedback</p>
            <p className="activities-text-content">
              by Danny bob/ 2 minutes ago
            </p>
          </div>
        </div>
      </div>
    );
  }
}
