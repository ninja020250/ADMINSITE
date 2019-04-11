import React, { Component } from "react";

export default class InputSelect extends Component {
  render() {
    return (
      <div className="input-select match_parent">
        <div className="card card-custom">
          <div className="card-header">
            <h4 className="card-title">SELECT</h4>
          </div>
          <div className="card-body mt-1">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="form-group mb-3">
                  <label for="exampleFormControlTextarea1">Basic Input</label>
                  <select className="custom-select select-linear">
                    <option selected>Select Option</option>
                    <option value="1">Option One</option>
                    <option value="2">Option Two</option>
                    <option value="3">Option Three</option>
                  </select>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="form-group mb-3">
                  <label for="exampleFormControlTextarea1">Multi Select</label>
                  <select className="custom-select" multiple>
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="form-group mb-3">
                  <label for="exampleFormControlTextarea1">
                    Disable Select
                  </label>
                  <select className="custom-select select-linear" disabled="true">
                    <option selected>Select Option</option>
                    <option value="1">Option One</option>
                    <option value="2">Option Two</option>
                    <option value="3">Option Three</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
