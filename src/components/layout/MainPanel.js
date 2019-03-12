import React, { Component } from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import FormInput from './FormInput'
import { renderRoutes } from "../../common/routes";
// import OverviewCard from "../card/OverviewCard";
// import OverviewCards from "../card/OverviewCards";
// import Activities from "../activities/Activities";
// import Table1 from "../table/Table1";
// import ProuductSold from "../ProuductSold";
// import Calendar from "../Calendar";
// import PayoutAVG from "../chart/PayoutAVG";
// import Weather from "../Weather";

const routes = [
  {
    path: "/",
    exact: true,
    component: Dashboard
  },
  {
    path: "/form-input",
    exact: true,
    component: FormInput
  }
];

export default class MainPanel extends Component {
  render() {
    return (
      <div className="main-panel ">
        {renderRoutes(routes)}
      </div>
    );
  }
}
