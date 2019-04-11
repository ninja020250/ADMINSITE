import React, { Component } from "react";

export default class InputStyle extends Component {
  render() {
    return (
      <div className="input-style match_parent">
        <div className="card card-custom">
          <div className="card-header">
            <h4 className="card-title">TEXT INPUT</h4>
          </div>
          <div className="card-body mt-1">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="form-group ">
                  <label for="exampleInputText">Basic Input</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputText"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="form-group ">
                  <label for="exampleInputText">Square Input</label>
                  <input
                    type="text"
                    className="form-control square"
                    id="exampleInputText"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="form-group ">
                  <label for="exampleInputTextDisable">Round Input</label>
                  <input
                    type="text"
                    className="form-control round"
                    id="exampleInputTextDisable"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}
