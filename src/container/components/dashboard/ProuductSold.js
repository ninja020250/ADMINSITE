import React, { Component } from "react";
import { barChartData, barChartOption } from "./chart-data";
import Chart from 'chart.js'
export default class ProuductSold extends Component {
  render() {
    return (
      <div className="product-sold">
        <div className="card card-custom">
          <div className="card-header">
            <h4 className="card-title">Product Sold</h4>
          </div>
          <div className="card-body mt-1">
            <ChartProuductSold
              chartId="barchart-productsold"
              height="375"
              // width="400"
              // height="400"
            />
          </div>
        </div>
      </div>
    );
  }
}

class ChartProuductSold extends Component {
  constructor(props) {
    super(props);
  }
  getBarChart = ctx => {
    return new Chart(ctx, {
      type: "bar",
      data: barChartData,
      options: barChartOption
    });
  };  

  componentDidMount() {
 
    var ctx = document.getElementById("barchart-productsold");
    ctx.height = this.props.height;
    var myChart = this.getBarChart(ctx);
  }

  render() {
    return <canvas id="barchart-productsold" />;
  }
}
