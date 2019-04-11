import React, { Component } from "react";
import $ from 'jquery';
import icon from '../../common/handleIconSVG'
import {
  Activities,
  Calendar,
  OverviewCards,
  PayoutAVG,
  ProuductSold,
  RadiusButton,
  Table1,
  Weather,
  CustomCalendar
} from "../components/dashboard";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    $("svg.svg").each(icon);
  }
  render() {
    return (
      <div className="container-fluid">
        <OverviewCards />
        <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
            <ProuductSold />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
            <Activities />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <Table1 />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4">
            <Calendar />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-8">
            <div className="col-12" >
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                  <Weather />
                </div>
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                  <Weather />
                </div>
              </div>
            </div>
            <div className="col-12">
              <PayoutAVG />
            </div>
          </div>
        </div>
   
      </div>
    );
  }
}
