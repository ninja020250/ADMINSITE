import React, { Component } from "react";
import Chart from "chart.js";
import {
  lineChartData,
  lineChartOption,
  lineChartDoubleData,
  lineChartDoubleOption
} from "../chart-data.js";
export default class PayoutAVG extends Component {
  render() {
    return (
      <div className="payoutAVG mt-5">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">PAYOUT AVG</h4>
            <div className="header-element">
              <AVGToggleButton />
            </div>
          </div>
          <div className="card-body mt-1">
            <div id="chartjs-legend" class="noselect" />
            <ChartPayoutAVG chartId="linechart-payoutavg" />
          </div>
        </div>
      </div>
    );
  }
}
class ChartPayoutAVG extends Component {
  constructor(props) {
    super(props);
  }

  getLineChart = ctx => {
    return new Chart(ctx, {
      type: "line",
      data: lineChartDoubleData,
      options: lineChartDoubleOption
    });
  };

  componentDidMount() {
    var ctx = document.getElementById("a");

    var myChart = this.getLineChart(ctx);
    $("#chartjs-legend").html(myChart.generateLegend());
    // $("#chartjs-legend").on('click', "li", function() {
    //   myChart.data.datasets[0].data[$(this).index()] += 50;
    //   myChart.update();
    //   console.log('legend: ' + data.datasets[0].data[$(this).index()]);
    // });
  }

  render() {
    return <canvas id="a" />;
  }
}
class AVGToggleButton extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="avg-button">
        <input type="checkbox" className="toggler" />
      </div>
    );
  }
}
