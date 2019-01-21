import React, { Component } from "react";
import Navbar from "./Navbar";
import OverviewCard from "../card/OverviewCard";
import OverviewCards from "../card/OverviewCards";
import Activities from "../activities/Activities";
import Table1 from "../table/Table1";
export default class MainPanel extends Component {
  render() {
    return (
      <div className="main-panel ">
        <Navbar />
        {/* <div className="col-xl-4 col-lg-12">
          <Activities />
        </div> */}
        {/* <OverviewCards/> */}
    
          <Table1 />
        
      </div>
    );
  }
}
