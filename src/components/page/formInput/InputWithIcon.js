import React, { Component } from "react";
import {email,lock,notification,phone,search,user} from '../../../common/icon';
export default class InputWithIcon extends Component {
  render() {
    return (
      <div className="input-with-icon match_parent">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">INPUT WITH ICON</h4>
          </div>
          <div className="card-body mt-1">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div class="form-group ">
                  <label for="exampleInputText">Icon Left search</label>
                  <div className="form-icon form-icon-left">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputText"
                      aria-describedby="emailHelp"
                    />
                    <svg src={search} alt="" className="svg" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div class="form-group ">
                  <label for="exampleInputText">Icon Left email</label>
                  <div className="form-icon form-icon-left">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputText"
                      aria-describedby="emailHelp"
                    />
                    <svg src={email} alt="" className="svg" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div class="form-group ">
                  <label for="exampleInputText">Icon Left user</label>
                  <div className="form-icon form-icon-left">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputText"
                      aria-describedby="emailHelp"
                    />
                    <svg src={user} alt="" className="svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
              <div class="form-group ">
                  <label for="exampleInputText">Icon Right notification</label>
                  <div className="form-icon form-icon-right">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputText"
                      aria-describedby="emailHelp"
                    />
                    <svg src={notification} alt="" className="svg" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div class="form-group ">
                  <label for="exampleInputText">Icon Right phone</label>
                  <div className="form-icon form-icon-right">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputText"
                      aria-describedby="emailHelp"
                    />
                    <svg src={phone} alt="" className="svg" />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <div class="form-group ">
                  <label for="exampleInputText">Icon Right lock</label>
                  <div className="form-icon form-icon-right">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputText"
                      aria-describedby="emailHelp"
                    />
                    <svg src={lock} alt="" className="svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
