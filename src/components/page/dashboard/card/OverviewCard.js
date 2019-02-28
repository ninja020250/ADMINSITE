import React, { Component, propTypes } from "react";
import PropTypes from "prop-types";
import Chart from "chart.js";
import { lineChartData, lineChartOption } from "../chart-data.js";
export default class OverviewCard extends Component {
  constructor(props) {
    super(props);
  }
  getLineChart = ctx => {
    return new Chart(ctx, {
      type: "line",
      data: lineChartData,
      options: lineChartOption
    });
  };

  componentDidMount() {
    var ctx = document.getElementById(`${this.props.chartId}`);
    ctx.height = 90;
    var myChart = this.getLineChart(ctx);
  }

  render() {
    return (
     <div className="col-3">
        <div className={`overview-card ${this.props.background}`}>
        <div className="media">
          <div className="overview-card-title media-body ">
            <div className="title mt-0">{this.props.title}</div>
            <div className="number">{this.props.parameter}</div>
          </div>
          <div className="overview-card-logo align-self-center mr-3">
            <i className={`${this.props.icon}`} aria-hidden="true" />
          </div>
        </div>
        <div className="area-chart">
          <canvas id={`${this.props.chartId}`} className="chart" />
        </div>
      </div>
     </div>
    );
  }
}

OverviewCard.propTypes = {
  background: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  parameter: PropTypes.string,
  chartId: PropTypes.string
};
