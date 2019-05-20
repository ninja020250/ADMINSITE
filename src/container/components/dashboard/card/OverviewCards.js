import React, { Component } from "react";
import OverviewCard from "./OverviewCard";
import {product_sold,new_customers,net_profit,customer_satisfication} from '../../../../common/image'
const cardData = [
  {
    background: "card-orange",
    // icon: "icon-product-sold",
    icon:product_sold,
    title: "Product sold",
    parameter: "11,256",
    chartId: "lineChart1"
  },
  {
    background: "card-blue",
    // icon: "icon-net-profit",
    icon:net_profit,
    title: "Product sold",
    parameter: "$278",
    chartId: "lineChart2"
  },
  {
    background: "card-green",
    icon: "icon-new-customers",
    icon: new_customers,
    title: "New Customers",
    parameter: "520",
    chartId: "lineChart3"
  },
  {
    background: "card-pink",
    // icon: "icon-customer-satisfication",
    icon:customer_satisfication,
    title: "Customer satisfication",
    parameter: "666",
    chartId: "lineChart4"
  }
];
export default class OverviewCards extends Component {
  getCards = () => {
    return cardData.map((data, index) => {
      return (
       <div className="	col-sm-12 col-md-6 col-lg-6 col-xl-3"   key={index} >
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
