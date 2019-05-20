import React, { Component } from "react";
import $ from 'jquery';
import icon from '../../common/handleIconSVG';
import {
  TextInput,
  TextAreas,
  InputWithIcon,
  InputSelect,
  OtherInput,
  InputStyle
} from "../components/formInput";
export default class FormInput extends Component {
  componentDidMount(){
    $("svg.svg").each(icon);
  }
  render() {
    return (
      <div className="main-wrapper">
        <div className="row mt-3">
          <TextInput />
        </div>
        <div className="row mt-5">
          <TextAreas />
        </div>
        <div className="row mt-5">
          <InputSelect />
        </div>
        <div className="row mt-5">
          <InputWithIcon />
        </div>
        <div className="row mt-5">
          <InputStyle />
        </div>
        <div className="row mt-5">
          <OtherInput />
        </div>
      </div>
    );
  }
}
