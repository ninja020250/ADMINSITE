import React, { Component } from "react";

export default class Weather extends Component {
  render() {
    return (
      <div className="weather">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Weather</h4>
          </div>
          <div className="card-body mt-1">
            <div className="days-of-week">
              <DayOFWeek day="MON" color="#4e49bb" icon="icon-weather-01-inactive" />
              <DayOFWeek day="TUE" color="#d5d5d5" icon="icon-weather-02-active"/>
              <DayOFWeek day="WED" color="#d5d5d5" icon="icon-weather-01-inactive"/>
              <DayOFWeek day="THU" color="#d5d5d5" icon="icon-weather-03-active"/>
              <DayOFWeek day="FRI" color="#d5d5d5" icon="icon-weather-04-active"/>
              <DayOFWeek day="SAT" color="#d5d5d5" icon="icon-weather-01-inactive"/>
              <DayOFWeek day="SUN" color="#d5d5d5" icon="icon-weather-01-inactive"/>
            </div>
            <div className="today-body">
              <div className="today">
                <i
                  className="icon-weather-01-inactive"
                 
                  style={{ color: "white", paddingRight: "40px" }}
                />
                <div className="tempo">
                  <div>
                    <div
                      className="number"
                      style={{
                        fontSize: "90px",
                        marginBottom: "-34px",
                        fontWeight: "bold"
                      }}
                    >
                      29
                    </div>
                    <span>0</span>
                  </div>
                  <div className="status">Cloudy</div>
                </div>
              </div>
            </div>
            <div className="weather-footer row">
              <div>MON 10-16</div>
              <div>VIET NAM - 11:30</div>
              <div>HUMIDITY 70%</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const DayOFWeek = ({ day, color, icon }) => (
  <div className="day-of-week">
    <i class={icon} aria-hidden="true" style={{ color: `${color}`, fontSize:"25px" }}  />
    <div style={{ fontWeight: "bold" }}>{`${day}`}</div>
  </div>
);
