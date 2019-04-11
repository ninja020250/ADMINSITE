import React, { Component } from "react";

export default class RadiusButton extends Component {
  render() {
    return <button className={`btn btn-radius ${this.props.custom}`}>{this.props.name}</button>;
  }
}
