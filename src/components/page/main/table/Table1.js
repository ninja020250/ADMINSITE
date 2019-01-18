import React, { Component } from "react";
import RadiusButton from "../button/RadiusButton";
export default class Table1 extends Component {
  render() {
    return (
      <div className="transaction-table">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">recent transactions</h4>
            <a href="">
              <RadiusButton name="View All" custom="btn-ViewAllTransactions"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
