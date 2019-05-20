import React, { Component } from "react";
import { SimpleBasicCheckbox, CustomCheckbox } from "./CheckBoxs";
import { SimpleBasicRadio, CustomRadio } from "./Radio";
export class SimpleCheckBoxs extends Component {
  render() {
    return (
      <div className="input-select match_parent">
        <div className="card card-custom">
          <div className="card-header">
            <h4 className="card-title">Simple Checkboxes</h4>
          </div>
          <div className="card-body mt-1">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <label for="exampleInputText" class="bold mt-3 mb-3">
                  Basic Checkbox
                </label>
                <SimpleBasicCheckbox description="Unchecked checkbox" />
                <br />
                <SimpleBasicCheckbox
                  description="Checked checkbox"
                  checked={true}
                />
                <br />
                <SimpleBasicCheckbox
                  description="Disable unchecked checkbox"
                  disabled={true}
                />
                <br />
                <SimpleBasicCheckbox
                  description="Disable checked checkbox"
                  checked={true}
                  disabled={true}
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <label for="exampleInputText" class="bold mt-3 mb-3">
                  Basic Right Checkbox
                </label>
                <SimpleBasicCheckbox
                  description="Unchecked checkbox"
                  textAlignRight={true}
                  custom="flex-space-between pr-5"
                />
                <br />
                <SimpleBasicCheckbox
                  description="Checked checkbox"
                  checked={true}
                  textAlignRight={true}
                  custom="flex-space-between pr-5"
                />
                <br />
                <SimpleBasicCheckbox
                  description="Disable unchecked checkbox"
                  disabled={true}
                  textAlignRight={true}
                  custom="flex-space-between pr-5"
                />
                <br />
                <SimpleBasicCheckbox
                  description="Disable checked checkbox"
                  checked={true}
                  textAlignRight={true}
                  disabled={true}
                  custom="flex-space-between pr-5"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <label for="exampleInputText" class="bold  mt-3 mb-3">
                  Custom Checkbox
                </label>
                <CustomCheckbox description="Unchecked checkbox" />
                <br />
                <CustomCheckbox description="Checked checkbox" checked={true} />
                <br />
                <CustomCheckbox
                  description="Disable unchecked checkbox"
                  disabled={true}
                />
                <br />
                <CustomCheckbox
                  description="Disable checked checkbox"
                  checked={true}
                  disabled={true}
                />
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 ">
                <label for="exampleInputText" class="bold mt-3 mb-3">
                  Custom Right Checkbox
                </label>
                <CustomCheckbox
                  description="Unchecked checkbox"
                  textAlignRight={true}
                  custom="flex-space-between pr-5"
                />
                <br />
                <CustomCheckbox
                  description="Checked checkbox"
                  checked={true}
                  textAlignRight={true}
                  custom="flex-space-between pr-5"
                />
                <br />
                <CustomCheckbox
                  description="Disable unchecked checkbox"
                  disabled={true}
                  textAlignRight={true}
                  custom="flex-space-between pr-5"
                />
                <br />
                <CustomCheckbox
                  description="Disable checked checkbox"
                  checked={true}
                  textAlignRight={true}
                  disabled={true}
                  custom="flex-space-between pr-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class SimpleRadioButtons extends Component {
  render() {
    return (
      <div className="input-select match_parent">
        <div className="card card-custom">
          <div className="card-header">
            <h4 className="card-title">Simple Checkboxes</h4>
          </div>
          <div className="card-body mt-1">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <label for="exampleInputText" class="bold mt-3 mb-3">
                  Basic Radio Buttons
                </label>
                <SimpleBasicRadio description="Unchecked checkbox" />
                <br />
                <SimpleBasicRadio
                  description="Checked checkbox"
                  checked={true}
                />
                <br />
                <SimpleBasicRadio
                  description="Disable unchecked checkbox"
                  disabled={true}
                />
                <br />
                <SimpleBasicRadio
                  description="Disable checked checkbox"
                  checked={true}
                  disabled={true}
                />
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <label for="exampleInputText" class="bold mt-3 mb-3">
                  Basic Right Radio Buttons
                </label>
                <SimpleBasicRadio
                  description="Unchecked checkbox"
                  textAlignRight={true}
                  custom="flex-space-between pr-5"
                />
                <br />
                <SimpleBasicRadio
                  description="Checked checkbox"
                  checked={true}
                  textAlignRight={true}
                  custom="flex-space-between pr-5"
                />
                <br />
                <SimpleBasicRadio
                  description="Disable unchecked checkbox"
                  disabled={true}
                  textAlignRight={true}
                  custom="flex-space-between pr-5"
                />
                <br />
                <SimpleBasicRadio
                  description="Disable checked checkbox"
                  checked={true}
                  textAlignRight={true}
                  disabled={true}
                  custom="flex-space-between pr-5"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <label for="exampleInputText" class="bold  mt-3 mb-3">
                  Custom Radio Buttons
                </label>
                <CustomRadio description="Unchecked checkbox" />
                <br />
                <CustomRadio description="Checked checkbox" checked={true} />
                <br />
                <CustomRadio
                  description="Disable unchecked checkbox"
                  disabled={true}
                />
                <br />
                <CustomRadio
                  description="Disable checked checkbox"
                  checked={true}
                  disabled={true}
                />
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 ">
                <label for="exampleInputText" class="bold mt-3 mb-3">
                  Custom Right Radio Buttons
                </label>
                <CustomRadio
                  description="Unchecked checkbox"
                  textAlignRight={true}
                  custom="flex-space-between pr-5"
                />
                <br />
                <CustomRadio
                  description="Checked checkbox"
                  checked={true}
                  textAlignRight={true}
                  custom="flex-space-between pr-5"
                />
                <br />
                <CustomRadio
                  description="Disable unchecked checkbox"
                  disabled={true}
                  textAlignRight={true}
                  custom="flex-space-between pr-5"
                />
                <br />
                <CustomRadio
                  description="Disable checked checkbox"
                  checked={true}
                  textAlignRight={true}
                  disabled={true}
                  custom="flex-space-between pr-5 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class SkinsColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataColor: "orange",
      colorPickers: [
        {
          color: "purple",
          active: false
        },
        {
          color: "orange",
          active: true
        },
        {
          color: "pink",
          active: false
        },
        {
          color: "blue",
          active: false
        },
        {
          color: "green",
          active: false
        },
        {
          color: "light-purple",
          active: false
        }
      ]
    };
  }
  onSelectColor = c => {
    var { colorPickers } = this.state;

    colorPickers.forEach(element => {
      if (element.color === c) {
        
        element.active = true;
      } else {
      
        element.active = false;
      }
    });
    this.setState({
      colorPickers: colorPickers,
      dataColor: c
    });
  };
  render() {
    return (
      <div className="input-select match_parent">
        <div className="card card-custom">
          <div className="card-header">
            <h4 className="card-title">Simple Checkboxes</h4>
          </div>
          <div className="card-body mt-1">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <label for="exampleInputText" class="bold mt-3 mb-3">
                  Basic Checkbox
                </label>
                <SimpleBasicCheckbox
                  description="Unchecked checkbox"
                  dataColor={this.state.dataColor}
                />
                <br />
                <SimpleBasicCheckbox
                  description="Checked checkbox"
                  checked={true}
                  dataColor={this.state.dataColor}
                />
                <br />
                <SimpleBasicCheckbox
                  description="Disable unchecked checkbox"
                  disabled={true}
                  dataColor={this.state.dataColor}
                />
                <br />
                <SimpleBasicCheckbox
                  description="Disable checked checkbox"
                  checked={true}
                  disabled={true}
                  dataColor={this.state.dataColor}
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <label for="exampleInputText" class="bold  mt-3 mb-3">
                  Custom Checkbox
                </label>
                <CustomCheckbox
                  description="Unchecked checkbox"
                  dataColor={this.state.dataColor}
                />
                <br />
                <CustomCheckbox
                  description="Checked checkbox"
                  checked={true}
                  dataColor={this.state.dataColor}
                />
                <br />
                <CustomCheckbox
                  description="Disable unchecked checkbox"
                  disabled={true}
                  dataColor={this.state.dataColor}
                />
                <br />
                <CustomCheckbox
                  description="Disable checked checkbox"
                  checked={true}
                  disabled={true}
                  dataColor={this.state.dataColor}
                />
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <label for="exampleInputText" class="bold mt-3 mb-3">
                  Basic Radio Buttons
                </label>
                <SimpleBasicRadio
                  description="Unchecked checkbox"
                  dataColor={this.state.dataColor}
                />
                <br />
                <SimpleBasicRadio
                  description="Checked checkbox"
                  checked={true}
                  dataColor={this.state.dataColor}
                />
                <br />
                <SimpleBasicRadio
                  description="Disable unchecked checkbox"
                  disabled={true}
                  dataColor={this.state.dataColor}
                />
                <br />
                <SimpleBasicRadio
                  description="Disable checked checkbox"
                  checked={true}
                  disabled={true}
                  dataColor={this.state.dataColor}
                />
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                <label for="exampleInputText" class="bold  mt-3 mb-3">
                  Custom Radio Buttons
                </label>
                <CustomRadio
                  description="Unchecked checkbox"
                  dataColor={this.state.dataColor}
                />
                <br />
                <CustomRadio
                  description="Checked checkbox"
                  checked={true}
                  dataColor={this.state.dataColor}
                />
                <br />
                <CustomRadio
                  description="Disable unchecked checkbox"
                  disabled={true}
                  dataColor={this.state.dataColor}
                />
                <br />
                <CustomRadio
                  description="Disable checked checkbox"
                  checked={true}
                  disabled={true}
                  dataColor={this.state.dataColor}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div
                  class="btn-group mt-3"
                  role="group"
                  aria-label="Basic example"
                  style={{ height: "20px", alignItems:"center" }}
                >
                  {this.state.colorPickers.map(c => {
                    return (
                      <span
                        key={c.color}
                        className={`color-picker-circle btn-${
                          c.color
                        } ${c.active && "active"}`}
                        onClick={() => this.onSelectColor(c.color)}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
