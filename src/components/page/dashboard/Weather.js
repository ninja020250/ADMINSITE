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
              <DayOFWeek day="MON" color="#4e49bb" icon={require("../../../static/icon/weatherWidget/weather01Inactive.svg")} />
              <DayOFWeek day="TUE" color="#d5d5d5"  icon={require("../../../static/icon/weatherWidget/weather02Active.svg")}/>
              <DayOFWeek day="WED" color="#d5d5d5"   icon={require("../../../static/icon/weatherWidget/weather01Inactive.svg")}/>
              <DayOFWeek day="THU" color="#d5d5d5"  icon={require("../../../static/icon/weatherWidget/weather03Active.svg")}/>
              <DayOFWeek day="FRI" color="#d5d5d5"  icon={require("../../../static/icon/weatherWidget/weather04Active.svg")}/>
              <DayOFWeek day="SAT" color="#d5d5d5"  icon={require("../../../static/icon/weatherWidget/weather01Active.svg")}/>
              <DayOFWeek day="SUN" color="#d5d5d5"  icon={require("../../../static/icon/weatherWidget/weather01Active.svg")}/>
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
    {/* <i class={icon} aria-hidden="true" style={{ color: `${color}`, fontSize:"25px" }}  /> */}
    <svg
                  src={icon}
                  focusable="false"
                  className="svg"
                  alt=""
                
                />
    <div style={{ fontWeight: "bold" }}>{`${day}`}</div>
  </div>
);
