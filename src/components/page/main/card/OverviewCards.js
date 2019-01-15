import React, { Component } from "react";
import OverviewCard from './OverviewCard';
const cardData = [
    {
        background: "card-orange",
        icon:"fa fa-cube",
        title:"Product sold",
        parameter:"11,256",
        chartId: "lineChart1"
    },
    {
        background: "card-blue",
        icon:"fa fa-cube",
        title:"Product sold",
        parameter:"$278",
        chartId: "lineChart2"
    }
]
export default class OverviewCards extends Component {
  getCards = () => {
      return   cardData.map((data, index) => {
        return <OverviewCard background={data.background}
        icon={data.icon}
        title={data.title}
        parameter={data.parameter}
        key={index}
        chartId={data.chartId} />
    });
  

  };
  render() {
    return <div >
        {this.getCards()}
    </div>;
  }
}
{/* <OverviewCard background="card-orange"
icon="fa fa-cube"
title="Product sold"
parameter="11,256"/>
 <OverviewCard background="card-blue"
icon="fa fa-cube"
title="net profit"
parameter="$728"/> */}