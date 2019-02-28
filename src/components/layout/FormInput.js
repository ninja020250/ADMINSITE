import React, { Component } from "react";
import {TextInput} from '../page/formInput'
export default class FormInput extends Component {
  render() {
    return <div className="main-wrapper">
    <div className="row">
    <TextInput/>
    </div>
    </div>;
  }
}
