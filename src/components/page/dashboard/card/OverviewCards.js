import React, { Component } from "react";
import OverviewCard from "./OverviewCard";
const cardData = [
  {
    background: "card-orange",
    icon: "icon-product-sold",
    title: "Product sold",
    parameter: "11,256",
    chartId: "lineChart1"
  },
  {
    background: "card-blue",
    icon: "icon-net-profit",
    title: "Product sold",
    parameter: "$278",
    chartId: "lineChart2"
  },
  {
    background: "card-green",
    icon: "icon-new-customers",
    title: "New Customers",
    parameter: "520",
    chartId: "lineChart3"
  },
  {
    background: "card-pink",
    icon: "icon-customer-satisfication",
    title: "Customer satisfication",
    parameter: "666",
    chartId: "lineChart4"
  }
];
export default class OverviewCards extends Component {
  getCards = () => {
    return cardData.map((data, index) => {
      return (
       <div className="	col-sm-12 col-md-12 col-lg-6 col-xl-3"   key={index} >
          <OverviewCard
          background={data.background}
          icon={data.icon}
          title={data.title}
          parameter={data.parameter}
        
          chartId={data.chartId}
        />
       </div>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="row overviews-header component-header">OVERVIEW</div>
        <div className="row align-items-start">{this.getCards()}</div>
      </div>
    );
  }
}
