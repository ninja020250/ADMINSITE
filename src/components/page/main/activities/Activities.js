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
                            image="https://4.bp.blogspot.com/-5v6V_nrIJd8/WivRsBMUtkI/AAAAAAAAWS4/Evs13zjfszstVShZUWXbao8JETUwHV2sgCLcBGAs/s1600/Harry%2BPotter%2B%2528Blog%2BLourdes%2529.jpg"
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
                            image="https://i.pinimg.com/736x/0c/ca/62/0cca6287b558c330e61673ebf8270952--cerebral-palsy-quotes-cerebral-palsy-awareness.jpg"
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
                            image="https://www.thoughtco.com/thmb/hW1WazlTz8c3gZ7ELmaJt2hu-Qg=/400x400/filters:no_upscale():max_bytes(150000):strip_icc()/Bill_Gates-56a945385f9b58b7d0f9d437.jpg"
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
                            image="https://www.healthline.com/hlcmsresource/images/topic_centers/Epilepsy/400x400_12_Famous_Faces_of_Epilepsy_TheodoreRoosevelt.jpg"
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
                            image="https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/qWkAAOSwP6pbt3Kw/$_1.JPG"
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
                            image="https://migrainepal.com/wp-content/uploads/2017/10/IanThorpemigraine.jpeg"
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
