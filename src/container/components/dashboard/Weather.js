import React, { Component } from "react";
import { weather01,weather02,weather03,weather04 } from "../../../common/icon";
export default class Weather extends Component {
  render() {
    return (
      <div className="weather">
        <div className="card card-custom">
          <div className="card-header">
            <h4 className="card-title">Weather</h4>
          </div>
          <div className="card-body mt-1">
            <div className="days-of-week d-flex">
              <DayOFWeek
                day="MON"
                color="#4e49bb"
                icon={weather01}
              />
              <DayOFWeek
                day="TUE"
                color="#d5d5d5"
                icon={weather02}
              />
              <DayOFWeek
                day="WED"
                color="#d5d5d5"
                icon={weather01}
              />
              <DayOFWeek
                day="THU"
                color="#d5d5d5"
                icon={weather03}
              />
              <DayOFWeek
                day="FRI"
                color="#d5d5d5"
                icon={weather04}
              />
              <DayOFWeek
                day="SAT"
                color="#d5d5d5"
                icon={weather01}
              />
              <DayOFWeek
                day="SUN"
                color="#d5d5d5"
                icon={weather01}
              />
            </div>
            <div className="today-body d-flex justify-content-center align-items-center">
              <div className="media">
                <svg
                  src={weather01}
                  focusable="false"
                  className="svg pure-svg align-self-center mr-2"
                  alt=""
                  style={{ color: "white", paddingRight: "40px" }}
                />
                <div className="media-body">
                  <div className="mt-0">
                    <div className="number">
                      29
                      <span>0</span>
                    </div>
                  </div>
                  <div className="status mt-0">Cloudy</div>
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
    {/* <i className={icon} aria-hidden="true" style={{ color: `${color}`, fontSize:"25px" }}  /> */}
    <svg src={icon} focusable="false" className="svg" alt="" />
    <div style={{ fontWeight: "bold" }}>{`${day}`}</div>
  </div>
);
