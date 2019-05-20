import React, { Component } from "react";
import {
  CustomCheckbox,
  SimpleBasicCheckbox
} from "../checkBoxAndRadio/CheckBoxs";
import { SimpleBasicRadio, CustomRadio } from "../checkBoxAndRadio/Radio";
export default class CheckBoxAndRadio extends Component {
  render() {
    return (
      <div className="input-select match_parent">
        <div className="card card-custom">
          <div className="card-header">
            <h4 className="card-title">CHECKBOXES & RADIO ADDONS</h4>
          </div>
          <div className="card-body mt-1">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">
                  Left Checkbox
                </label>
                <LeftCheckBox custom="mb-3" icon="@" placeholder="Text here" />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">
                  Left Checkbox Style 1
                </label>
                <LeftCheckBox
                  custom="mb-3"
                  icon="@"
                  checked={true}
                  placeholder="Text here"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">
                  Left Checkbox Style 2
                </label>
                <LeftCheckBox
                  custom="mb-3"
                  icon="@"
                  checked={true}
                  border={true}
                  placeholder="Text here"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">
                  Right Checkbox
                </label>
                <RightCheckBox custom="mb-3" icon="@" placeholder="Text here" />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">
                  Left Right Checkbox
                </label>
                <LeftRightCheckBox
                  custom="mb-3"
                  icon="@example.com"
                  placeholder="Your Email"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">
                  Disable input group with Checkbox
                </label>
                <LeftCheckBox
                  custom="mb-3"
                  icon="@"
                  disabled={true}
                  placeholder="Text here"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">
                  Left Radio Button
                </label>
                <LeftRadio custom="mb-3" icon="@" placeholder="Text here" />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">
                  Left Radio Checked Style 1
                </label>
                <LeftRadio
                  custom="mb-3"
                  icon="@"
                  checked={true}
                  placeholder="Text here"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">
                  Left Radio Checked Style 2
                </label>
                <LeftRadio
                  custom="mb-3"
                  icon="@"
                  checked={true}
                  border={true}
                  placeholder="Text here"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">
                  Right Radio Button
                </label>
                <RightRadio
                  custom="mb-3"
                  icon="@"
                  checked={false}
                  placeholder="Text here"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">
                  Left Right Checkbox
                </label>
                <LeftRightRadio
                  custom="mb-3"
                  icon="@"
                  checked={false}
                  icon="@mail.com"
                  placeholder="Your Email"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">
                  Disable Input Group With Left Radio Button
                </label>
                <LeftRadio
                  custom="mb-3"
                  icon="@"
                  disabled={true}
                  placeholder="Text here"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class LeftCheckBox extends Component {
  render() {
    return (
      <div class={`input-group ${this.props.custom}`}>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            {this.props.border ? (
              <SimpleBasicCheckbox
                dataColor="green"
                disabled={this.props.disabled}
                checked={this.props.checked}
              />
            ) : (
              <CustomCheckbox
                disabled={this.props.disabled}
                checked={this.props.checked}
              />
            )}
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder={this.props.placeholder}
          disabled={this.props.disabled ? "disabled" : ""}
        />
      </div>
    );
  }
}

class RightCheckBox extends Component {
  render() {
    return (
      <div class={`input-group ${this.props.custom}`}>
        <input
          type="text"
          class="form-control"
          placeholder={this.props.placeholder}
          disabled={this.props.disabled ? "disabled" : ""}
        />
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon1">
          {this.props.border ? (
              <SimpleBasicCheckbox
                dataColor="green"
                disabled={this.props.disabled}
                checked={this.props.checked}
              />
            ) : (
              <CustomCheckbox
                disabled={this.props.disabled}
                checked={this.props.checked}
              />
            )}
            {/* <CustomCheckbox
              disabled={this.props.disabled}
              checked={this.props.checked}
            /> */}
          </span>
        </div>
      </div>
    );
  }
}

class LeftRightCheckBox extends Component {
  render() {
    return (
      <div class={`input-group ${this.props.custom}`}>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            <CustomCheckbox
              disabled={this.props.disabled}
              checked={this.props.checked}
            />
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder={this.props.placeholder}
          disabled={this.props.disabled ? "disabled" : ""}
        />
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">
            {this.props.icon}
          </span>
        </div>
      </div>
    );
  }
}
////////////////////////// radio //////////////////////////////////////////

class LeftRadio extends Component {
  render() {
    return (
      <div class={`input-group ${this.props.custom}`}>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            {/* <label class="container-checkbox">
              <input
                disabled={this.props.disabled ? "disabled" : ""}
                type={`radio`}
                defaultChecked={this.props.checked ? "checked" : ""}
              />
              <span
                class={`checkmark-radio ${
                  this.props.border ? "radio-border" : ""
                } ${this.props.disabled ? "disabled" : ""}`}
              />
            </label> */}
        {this.props.border ? (   
           <SimpleBasicRadio
           dataColor="green"
               disabled={this.props.disabled}
               checked={this.props.checked}
            />): (   <CustomRadio
              disabled={this.props.disabled}
              checked={this.props.checked}
           />)}
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder={this.props.placeholder}
          disabled={this.props.disabled ? "disabled" : ""}
        />
      </div>
    );
  }
}

class RightRadio extends Component {
  render() {
    return (
      <div class={`input-group ${this.props.custom}`}>
        <input
          type="text"
          class="form-control"
          placeholder={this.props.placeholder}
          disabled={this.props.disabled ? "disabled" : ""}
        />

        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon1">
          {this.props.border ? (   
           <SimpleBasicRadio
           dataColor="green"
               disabled={this.props.disabled}
               checked={this.props.checked}
            />): (   <CustomRadio
              disabled={this.props.disabled}
              checked={this.props.checked}
           />)}
          </span>
        </div>
      </div>
    );
  }
}

class LeftRightRadio extends Component {
  render() {
    return (
      <div class={`input-group ${this.props.custom}`}>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
          {this.props.border ? (   
           <SimpleBasicRadio
           dataColor="green"
               disabled={this.props.disabled}
               checked={this.props.checked}
            />): (   <CustomRadio
              disabled={this.props.disabled}
              checked={this.props.checked}
           />)}
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder={this.props.placeholder}
          disabled={this.props.disabled ? "disabled" : ""}
        />
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">
            {this.props.icon}
          </span>
        </div>
      </div>
    );
  }
}
