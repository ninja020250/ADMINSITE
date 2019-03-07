import React, { Component } from "react";

export class LinearButton extends Component {
  handleClick = () => {
    if (this.props.onClick !== undefined) {
      this.props.onClick();
    }
  };
  render() {
    return (
      <div className={`linear-button-container ${this.props.bonusClass}`}>
        <input
          className="linear-button"
          value={this.props.content}
          type="button"
        />
      </div>
    );
  }
}

export class LinearButtonUpload extends Component {
  handleClick = () => {
    if (this.props.onClick !== undefined) {
      this.props.onClick();
    }
  };

  render() {
    return (
      <div className="upload-btn-container">
        <label for={this.props.id} className="linear-button mr-3">{this.props.content}</label>
        <button>Select file</button>
        <input type="file" name="myfile" id={this.props.id} />
      </div>
    );
  }
}

export class LinearButtonUploadAdvance extends Component {
  handleClick = () => {
    if (this.props.onClick !== undefined) {
      this.props.onClick();
    }
  };

  render() {
    return (
      <div className="upload-btn-container-advance">
      <label for={this.props.id}  className="linear-button mr-3">{this.props.content}</label>
      <button for={this.props.id}>Select file</button>
      <input type="file" name="myfile" id={this.props.id} />
      </div>
    );
  }
}

export class LinearButtonColorSelector extends Component {
  handleClick = () => {
    if (this.props.onClick !== undefined) {
      this.props.onClick();
    }
  };

  render() {
    return (
      <div className="select-color-btn-container">
     <input name="Color Picker" type="color"/>
      </div>
    );
  }
}