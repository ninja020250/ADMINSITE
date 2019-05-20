import React, { Component } from "react";

export default class BasicExample extends Component {
  render() {
    return (
      <div className="input-select match_parent">
        <div className="card card-custom">
          <div className="card-header">
            <h4 className="card-title">BASIC EXAMPLES</h4>
          </div>
          <div className="card-body mt-1">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">Left Addon</label>
                <LeftAddon custom="mb-3" icon="@" placeholder="Your Email"/>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">Right Addon</label>
                <RightAddon
                  custom="mb-3"
                  placeholder="User name"
                  icon="@mail.com"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">Left Right Addon</label>
                <LeftRightAddon
                  custom="mb-3"
                  placeholder="Amount of money"
                  iconLeft="$"
                  iconRight="00.0"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">Icon Addon</label>
                <IconAddon
                  custom="mb-3"
                  placeholder="Your phone number"
                  icon="fa fa-phone"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">Disable input group</label>
                <LeftAddon
                  custom="mb-3"
                  placeholder="Your name"
                  icon="@"
                  disabled={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class LeftAddon extends Component {
  render() {
    return (
      <div class={`input-group ${this.props.custom}`}>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            {this.props.icon}
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
class RightAddon extends Component {
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
            {this.props.icon}
          </span>
        </div>
      </div>
    );
  }
}

class LeftRightAddon extends Component {
  render() {
    return (
      <div class={`input-group ${this.props.custom}`}>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            {this.props.iconLeft}
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder={this.props.placeholder}
          disabled={this.props.disabled ? "disabled" : ""}
        />
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon1">
            {this.props.iconRight}
          </span>
        </div>
      </div>
    );
  }
}

class IconAddon extends Component {
  render() {
    return (
      <div class={`input-group ${this.props.custom}`}>
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            <i class={`${this.props.icon}`} aria-hidden="true" />
          </span>
        </div>
        <input
          disabled={this.props.disabled ? "disabled" : ""}
          type="text"
          class="form-control"
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}
