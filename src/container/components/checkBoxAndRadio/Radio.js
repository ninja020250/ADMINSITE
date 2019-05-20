import React, { Component } from "react";

export class SimpleBasicRadio extends Component {
  render() {
    return (
      <div  className={`purple-basic-radio ${this.props.dataColor}-basic-radio `}>
        <div className={`basic-radio ${this.props.custom}`}>
          {this.props.textAlignRight ? (
            <span className="checkbox-description mr-2">
              {this.props.description}
            </span>
          ) : null}
          <label class="container-checkbox">
            <input
              disabled={this.props.disabled ? "disabled" : ""}
              type={`radio`}
              defaultChecked={this.props.checked ? "checked" : ""}
            />
            <span
              class={`checkmark-radio  ${
                this.props.disabled ? "disabled" : ""
              }`}
            />
          </label>
          {this.props.textAlignRight ? null : (
            <span className="checkbox-description ml-2">
              {this.props.description}
            </span>
          )}
        </div>
      </div>
    );
  }
}

export class CustomRadio extends Component {
  render() {
    return (
      <div className={`purple-custom-radio ${this.props.dataColor}-custom-radio`}>
        <div className={`custom-radio ${this.props.custom}`}>
          {this.props.textAlignRight ? (
            <span className="checkbox-description mr-2">
              {this.props.description}
            </span>
          ) : null}
          <label class="container-checkbox">
            <input
              disabled={this.props.disabled ? "disabled" : ""}
              type={`radio`}
              defaultChecked={this.props.checked ? "checked" : ""}
            />
            <span
              class={`checkmark-radio  ${
                this.props.disabled ? "disabled" : ""
              }`}
            />
          </label>
          {this.props.textAlignRight ? null : (
            <span className="checkbox-description ml-2">
              {this.props.description}
            </span>
          )}
        </div>
      </div>
    );
  }
}
