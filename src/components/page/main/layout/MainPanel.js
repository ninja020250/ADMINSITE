import React, { Component } from "react";
import Navbar from "./Navbar";
import OverviewCard from "../card/OverviewCard";
import OverviewCards from "../card/OverviewCards";
import Activities from "../activities/Activities";
import Table1 from "../table/Table1";
import ProuductSold from "../ProuductSold";
import Calendar from "../Calendar";
import PayoutAVG from "../chart/PayoutAVG";
import Weather from "../Weather";
export default class MainPanel extends Component {
  render() {
    return (
      <div className="main-panel ">
        <Navbar />
        {/* <div className="col-xl-4 col-lg-12">
          <Activities />
        </div> */}
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
          <div className="row mt-5">
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
      </div>
    );
  }
}
