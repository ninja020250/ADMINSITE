import React, { Component } from "react";
import CustomCalendar from '../dashboard/CustomCalendar';
import {iconMeeting, iconParty, iconTraining, iconHealthCheck} from '../../../common/icon'
export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { day: 0, month: 0, year: 0 };
  }
  componentDidMount() {
  
  }
  render() {
    return (
      <div id="calendar-container" className="card card-custom">
        <div className="card-header calendar-header">
          <h4 className="card-title">EVENTS</h4>
        </div>
        <div className="card-body calendar-body">
          <CustomCalendar/>
          <div className="calendar-task-list">
            <CalendarTask icon={iconMeeting} color="orange" />
            <CalendarTask icon={iconParty} color="blue" />
            <CalendarTask icon={iconTraining} color="green" />
            <CalendarTask icon={iconTraining} color="orange" />
            <CalendarTask icon={iconHealthCheck} color="pink" />
            <CalendarTask icon={iconHealthCheck} color="pink" />
            <CalendarTask icon={iconTraining} color="green" />
          </div>
        </div>
      </div>
    );
  }
}

class CalendarTask extends Component {


  render() {
    return (
      <div className="media calendar-task ">
        <div className={`task-icon bd-placeholder-img align-self-center mr-3  ${this.props.color}`}>
        <svg src={this.props.icon} focusable="false" className="svg custom-icon white-svg" alt="" ></svg>
          {/* <i className={this.props.icon} /> */}
        </div>
        <div className="media-body task-content">
          <div className="col-9 task-content-text">
            <h5 className="mt-0"> Idax project internal team meeting </h5>
            <p className="mb-0">9:00 AM ~ 10:00 AM</p>
          </div>
          <div className="col-3 task-content-icon bd-placeholder-img align-self-center">
            <i className="fa fa-clock-o mr-2" aria-hidden="true" />
            <i className="fa fa-trash-o" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}
