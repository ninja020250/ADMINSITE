import React, { Component } from "react";

export default class TextInput extends Component {
  render() {
    return (
      <div className="text-input match_parent">
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
                  <label for="exampleInputText">Input With Hint Text</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputText"
                    aria-describedby="emailHelp"
                    placeholder="Text here"
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="form-group ">
                  <label for="exampleInputTextDisable">Disable Input</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputTextDisable"
                    aria-describedby="emailHelp"
                    placeholder="Readonly"
                    readonly="true"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div className="form-group ">
                  <label for="exampleInputText">Input With Help</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputText"
                    aria-describedby="emailHelp"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    At least 10 characters
                  </small>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="form-group ">
                  <label for="exampleInputText">Password Input</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputText"
                    aria-describedby="password"
                    value="sample"
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="form-group ">
                  <label for="exampleInputTextDisable">Static Text</label>
                  <input
                    type="text"
                    className="form-control-plaintext"
                    id="exampleInputTextDisable"
                    aria-describedby="emailHelp"
                    value="Text title number 1"
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
