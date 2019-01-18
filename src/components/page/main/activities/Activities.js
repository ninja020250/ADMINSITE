import React, { Component } from "react";

export default class Activities extends Component {
  render() {
    return (
      <div className="activities-card">
        <div className="activities-card-title">Activities</div>
        <div className="card ">
          <div className="card-body">
            <div className="activities-left">
              <div id="timeline">
                <div>
                  <section class="year">
                    <section>
                      <ul>
                        <li>
                          <UserActivity />
                        </li>
                      </ul>
                    </section>
                  </section>
                  <section class="year">
                    <section>
                      <ul>
                        <li>
                          <UserActivity />
                        </li>
                      </ul>
                    </section>
                  </section>
                  <section class="year">
                    <section>
                      <ul>
                        <li>
                          <UserActivity />
                        </li>
                      </ul>
                    </section>
                  </section>
                  <section class="year">
                    <section>
                      <ul>
                        <li>
                          <UserActivity />
                        </li>
                      </ul>
                    </section>
                  </section>
                  <section class="year">
                    <section>
                      <ul>
                        <li>
                          <UserActivity />
                        </li>
                      </ul>
                    </section>
                  </section>
                  <section class="year">
                    <section>
                      <ul>
                        <li>
                          <UserActivity />
                        </li>
                      </ul>
                    </section>
                  </section>
                  <section class="year">
                    <section>
                      <ul>
                        <li>
                          <UserActivity />
                        </li>
                      </ul>
                    </section>
                  </section>
                </div>
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
      <div class="media user-activity">
        <div className="image">
          <img
            src="https://i.ytimg.com/vi/kwtm5G2inWE/hqdefault.jpg"
            class="mr-3"
            alt="..."
          />
        </div>
        <div class="media-body">
          <h5 class="mt-0">News Customer Feedback aasdasdasdasd</h5>
          By Danny bob /2 minutes ago
        </div>
      </div>
    );
  }
}
