import React, { Component } from "react";
const iconMeeting = require("../../../static/icon/eventMeeting.svg");
const iconParty = require("../../../static/icon/event_party.svg");
const iconTraining = require("../../../static/icon/event_training.svg");
const iconHealthCheck = require("../../../static/icon/event_health_check.svg") ;
export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { day: 0, month: 0, year: 0 };
  }
  componentDidMount() {
    var d = new Date();
    var month_name = [
      "January ",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var month = d.getMonth();
    var year = d.getFullYear();
    var today_day = d.getDate();
    this.setState({
      day: today_day,
      month: month,
      year: year
    });
    var first_date = `${month_name[month]} 1 ${year}`;
    var tmp = new Date(first_date).toDateString();
    var first_day = tmp.substring(0, 3);
    var day_name = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var day_no = day_name.indexOf(first_day);
    var days = new Date(year, month + 1, 0).getDate();
    var calendar = this.get_calendar(day_no, days);
    calendar.classList.add("admin-calendar");
    document.getElementById("calendar-title-text").innerHTML =
      month_name[month] + " " + year;
    document.getElementById("calendar-dates").appendChild(calendar);
  }

  get_calendar = (day_no, days) => {
    var standard_day_name = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    var table = document.createElement("table");
    var tr = document.createElement("tr");
    //row for day letters
    for (var c = 0; c <= 6; c++) {
      var td = document.createElement("th");
      td.innerHTML = standard_day_name[c];
      tr.appendChild(td);
    }
    table.appendChild(tr);
    //create 2nd row
    tr = document.createElement("tr");
    var c;
    for (var c = 0; c <= 6; c++) {
      if (c == day_no) {
        break;
      }
      var td = document.createElement("td");
      td.innerHTML = "";
      tr.appendChild(td);
    }
    var today = new Date();
    var today_day = today.getDate();

    var count = 1;
    for (; c <= 6; c++) {
      var td = document.createElement("td");
      td.innerHTML = count;
      count++;
      tr.appendChild(td);
    }
    table.appendChild(tr);
    for (var r = 3; r <= 6; r++) {
      tr = document.createElement("tr");
      for (var c = 0; c <= 6; c++) {
        if (count > days) {
          table.appendChild(tr);
          return table;
        }
        var td = document.createElement("td");
        if (count === today_day) {
          td.classList.add("selected-day");
        }
        td.innerHTML = count;
        count++;
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    return table;
  };

  lastMonth = () => {};
  render() {
    return (
      <div id="calendar-container" className="card">
        <div className="card-header calendar-header">
          <h4 className="card-title">EVENTS</h4>
        </div>
        <div className="card-body calendar-body">
          <div id="calendar-month-year" className="calendar-title">
            <i className="fa fa-chevron-left " aria-hidden="true" />
            <span id="calendar-title-text" />
            <i className="fa fa-chevron-right " aria-hidden="true" />
          </div>
          <div id="calendar-dates" />
          <div className="calendar-task-list">
            <CalendarTask icon={iconMeeting} color="orange" />
            <CalendarTask icon={iconParty} color="blue" />
            <CalendarTask icon={iconTraining} color="green" />
            <CalendarTask icon={iconTraining} color="orange" />
            <CalendarTask icon={iconHealthCheck} color="pink" />
            <CalendarTask icon={iconHealthCheck} color="pink" />
          </div>
        </div>
      </div>
    );
  }
}

class CalendarTask extends Component {
  constructor(props) {
    super(props);
  }

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
            <i className="fa fa-clock-o" aria-hidden="true" />
            <i className="fa fa-trash-o" aria-hidden="true" />
          </div>
        </div>
      </div>
    );
  }
}
