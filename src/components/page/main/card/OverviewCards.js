import React, { Component } from "react";
import OverviewCard from "./OverviewCard";
const cardData = [
  {
    background: "card-orange",
    icon: "fa fa-cube",
    title: "Product sold",
    parameter: "11,256",
    chartId: "lineChart1"
  },
  {
    background: "card-blue",
    icon: "fa fa-cube",
    title: "Product sold",
    parameter: "$278",
    chartId: "lineChart2"
  },
  {
    background: "card-blue",
    icon: "fa fa-cube",
    title: "Product sold",
    parameter: "$278",
    chartId: "lineChart2"
  },
  {
    background: "card-blue",
    icon: "fa fa-cube",
    title: "Product sold",
    parameter: "$278",
    chartId: "lineChart2"
  }
];
export default class OverviewCards extends Component {
  getCards = () => {
    return cardData.map((data, index) => {
      return (
        <OverviewCard
          background={data.background}
          icon={data.icon}
          title={data.title}
          parameter={data.parameter}
          key={index}
          chartId={data.chartId}
        />
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
