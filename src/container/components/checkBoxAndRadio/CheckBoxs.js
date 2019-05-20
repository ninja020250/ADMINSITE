import React, { Component } from "react";
import PropTypes from "prop-types";
export class SimpleBasicCheckbox extends Component {
  render() {
    return (
      <div
        className={`purple-basic-checkbox ${
          this.props.dataColor
        }-basic-checkbox`}
      >
        <div className={`basic-checkbox ${this.props.custom}`}>
          {this.props.textAlignRight ? (
            <span className="checkbox-description mr-2">
              {this.props.description}
            </span>
          ) : null}
          <label class="container-checkbox">
            <input
              disabled={this.props.disabled ? "disabled" : ""}
              type={`checkbox`}
              defaultChecked={this.props.checked ? "checked" : ""}
            />
            <span
              class={`checkmark  ${this.props.disabled ? "disabled" : ""}`}
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

export class CustomCheckbox extends Component {
  render() {
    return (
      <div
        className={`purple-custom-checkbox ${
          this.props.dataColor
        }-custom-checkbox`}
      >
        <div className={`custom-checkbox ${this.props.custom}`}>
          {this.props.textAlignRight ? (
            <span className="checkbox-description mr-2">
              {this.props.description}
            </span>
          ) : null}
          <label class="container-checkbox">
            <input
              disabled={this.props.disabled ? "disabled" : ""}
              type={`checkbox`}
              defaultChecked={this.props.checked ? "checked" : ""}
            />
            <span
              class={`checkmark  ${this.props.disabled ? "disabled" : ""}`}
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

CustomCheckbox.propTypes = {
  description: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  textAlignRight: PropTypes.bool
};
SimpleBasicCheckbox.propTypes = {
  description: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  textAlignRight: PropTypes.bool
};
