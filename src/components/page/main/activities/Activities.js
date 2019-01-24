import React, { Component } from "react";

export default class Activities extends Component {
  render() {
    return (
      <div className="activities-card">
        {/* <div className="activities-card-title">Activities</div> */}
        <div className="card ">
          <div className="card-header">
            <h4 className="card-title">Activities</h4>
          </div>
          <div className="card-body pt-5">
            <div className="activities-left">
              <div id="timeline">
                <div>
                  <section className="year">
                    <section>
                      <ul>
                        <li>
                          <UserActivity
                            image="https://i.pinimg.com/originals/68/02/93/680293e226b6edbd34f8e1ec55e955dc.png"
                            content="blackpink liked your post"
                            time="2 days ago/ 8 minutes"
                          />
                        </li>
                      </ul>
                    </section>
                  </section>
                  <section className="year">
                    <section>
                      <ul>
                        <li>
                          <UserActivity
                            image="https://i.pinimg.com/originals/68/02/93/680293e226b6edbd34f8e1ec55e955dc.png"
                            content="blackpink liked your post"
                            time="2 days ago/ 8 minutes"
                          />
                        </li>
                      </ul>
                    </section>
                  </section>
                  <section className="year">
                    <section>
                      <ul>
                        <li>
                          <UserActivity
                            image="https://i.pinimg.com/originals/68/02/93/680293e226b6edbd34f8e1ec55e955dc.png"
                            content="blackpink liked your post"
                            time="2 days ago/ 8 minutes"
                          />
                        </li>
                      </ul>
                    </section>
                  </section>
                  <section className="year">
                    <section>
                      <ul>
                        <li>
                          <UserActivity
                            image="https://i.pinimg.com/originals/68/02/93/680293e226b6edbd34f8e1ec55e955dc.png"
                            content="blackpink liked your post"
                            time="2 days ago/ 8 minutes"
                          />
                        </li>
                      </ul>
                    </section>
                  </section>
                  <section className="year">
                    <section>
                      <ul>
                        <li>
                          <UserActivity
                            image="https://i.pinimg.com/originals/68/02/93/680293e226b6edbd34f8e1ec55e955dc.png"
                            content="blackpink liked your post"
                            time="2 days ago/ 8 minutes"
                          />
                        </li>
                      </ul>
                    </section>
                  </section>
                  <section className="year">
                    <section>
                      <ul>
                        <li>
                          <UserActivity
                            image="https://i.pinimg.com/originals/68/02/93/680293e226b6edbd34f8e1ec55e955dc.png"
                            content="blackpink liked your post"
                            time="2 days ago/ 8 minutes"
                          />
                        </li>
                      </ul>
                    </section>
                  </section>
                  <section className="year">
                    <section>
                      <ul>
                        <li>
                          <UserActivity
                            image="https://i.pinimg.com/originals/68/02/93/680293e226b6edbd34f8e1ec55e955dc.png"
                            content="blackpink liked your post"
                            time="2 days ago/ 8 minutes"
                          />
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

export class UserActivity extends Component {
  render() {
    return (
      <div className="media user-activity">
        <div className="image">
          <img src={`${this.props.image}`} className="mr-3" alt="..." />
        </div>
        <div className="media-body">
          <h5 className="mt-0">{this.props.content}</h5>
          {this.props.time}
        </div>
      </div>
    );
  }
}
