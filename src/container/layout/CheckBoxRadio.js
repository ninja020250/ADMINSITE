import React, { Component } from "react";
import {
  SimpleCheckBoxs,
  SimpleRadioButtons,
  SkinsColor
} from "../components/checkBoxAndRadio/index";
export default class CheckBoxRadio extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="row mt-3">
          <SimpleCheckBoxs />
        </div>
        <div className="row mt-5">
          <SimpleRadioButtons />
        </div>
        <div className="row mt-5">
          <SkinsColor />
        </div>
      </div>
    );
  }
}
