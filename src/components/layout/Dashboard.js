import React, { Component } from "react";
import {
  Activities,
  Calendar,
  OverviewCards,
  PayoutAVG,
  ProuductSold,
  RadiusButton,
  Table1,
  Weather
} from "../page/dashboard";
  // import OverviewCards from '../page/main/card/OverviewCards';
  // import Activities from '../page/main/activities/Activities';
  // import Table1 from '../page/main/table/Table1';
  // import Calendar from '../page/main/Calendar';
  // import ProuductSold from '../page/main/ProuductSold';
  // import Weather from '../page/main/Weather';
  // import PayoutAVG from '../page/main/chart/PayoutAVG';
export default class Dashboard extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <OverviewCards />
        <div className="row mt-5">
          <div className="col-8">
            <ProuductSold />
          </div>
          <div className="col-4">
            <Activities />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <Table1 />
          </div>
        </div>
        <div className="row  mt-5">
          <div className="col-4">
            <Calendar />
          </div>
          <div className="col-8">
            <div className="col-12">
              <div className="row">
                <div className="col-6">
                  <Weather />
                </div>
                <div className="col-6">
                  <Weather />
                </div>
              </div>
            </div>
            <div className="col-12">
              <PayoutAVG />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
