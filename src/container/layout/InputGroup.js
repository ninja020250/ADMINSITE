import React, { Component } from "react";
import {
  BasicExample,
  CheckBoxAndRadio,
  InputGroupButton
} from "../components/inputGroup";
export default class InputGroup extends Component {
  render() {
    return (
      <div className="main-wrapper">
        <div className="row mt-3">
          <BasicExample />
        </div>
        <div className="row mt-5">
          <CheckBoxAndRadio />
        </div>
        <div className="row mt-5">
          <InputGroupButton />
        </div>
      </div>
    );
  }
}
