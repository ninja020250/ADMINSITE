import React, { Component } from "react";

export default class TextAreas extends Component {
  render() {
    return (
      <div className="text-input match_parent">
        <div className="card card-custom">
          <div className="card-header">
            <h4 className="card-title">TEXR AREAS</h4>
          </div>
          <div className="card-body mt-1">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">
                    Basic Input
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div className="form-group">
    <label for="exampleFormControlTextarea1">Input with hint text</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="text here"></textarea>
  </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="form-group ">
                  <label for="exampleInputTextDisable">Disable Input</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="exampleInputTextDisable"
                    aria-describedby="emailHelp"
                    placeholder="Readonly"
                    readonly="true"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="form-group ">
                  <label for="exampleInputText">Input With Description</label>
                  <small id="emailHelp" className="form-text text-muted">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, aliquid?
                  </small>
                  <textarea
                    type="text"
                    className="form-control"
                    id="exampleInputText"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
