import React, { Component } from "react";
import {
  LinearButton,
  LinearButtonUpload,
  LinearButtonUploadAdvance,
  LinearButtonColorSelector
} from "../../LinearButton";
export default class OtherInput extends Component {
  render() {
    return (
      <div className="other-input match_parent">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">OTHERS</h4>
          </div>
          <div className="card-body mt-1">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div class="form-group ">
                  <label for="exampleInputText">Basic Upload File</label>
                  <LinearButtonUpload content="Browse Files" id="upload1"/>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div class="form-group ">
                  <label for="exampleInputText">Advance Upload Files</label>
                  <LinearButtonUploadAdvance content="Browse Files"  id="upload2"/>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div class="form-group ">
                  <label for="exampleInputTextDisable">Select Color</label>
                <LinearButtonColorSelector/>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div class="form-group ">
                  <label for="exampleInputTextDisable">Select Color</label>
                <LinearButtonColorSelector/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
