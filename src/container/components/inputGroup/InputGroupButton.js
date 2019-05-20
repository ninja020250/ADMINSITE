import React, { Component } from "react";

export default class InputGroupButton extends Component {
  render() {
    return (
      <div className="input-select match_parent">
        <div className="card card-custom">
          <div className="card-header">
            <h4 className="card-title">INPUT GROUPS BUTTON</h4>
          </div>
          <div className="card-body mt-1">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">
                  Button on Left
                </label>
                <ButtonOnLeft
                  custom="mb-3"
                  icon="@"
                  placeholder="your message"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">
                  Button on right
                </label>
                <ButtonOnRight
                  custom="mb-3"
                  icon="Submit"
                  placeholder="your Email"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">
                  Left Right Button
                </label>
                <ButtonBothSides
                  custom="mb-3"
                  iconLeft="+"
                  iconRight="-"
                  placeholder="Amount of money"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">
                  Input Group With Dropdown
                </label>
                <ButtonGroupWithDropdown
                  custom="mb-3"
                  placeholder="Enter keywords"
                />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <label for="exampleInputText" className="bold">
                  Input Group With Switchery
                </label>
                <ButtonGroupWithSwitchery
                  custom="mb-3"
                  placeholder="Enter keywords"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ButtonOnLeft extends Component {
  render() {
    return (
      <div class={`input-group ${this.props.custom}`}>
        <div class="input-group-prepend">
          <button
            class="btn custom-form-button custom-form-button-left"
            type="button"
            id="button-addon1"
          >
            <i class="fa fa-microphone" aria-hidden="true" />
          </button>
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

class ButtonOnRight extends Component {
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
          <button
            class="btn custom-form-button custom-form-button-right"
            type="button"
            id="button-addon1"
          >
            {this.props.icon}
          </button>
        </div>
      </div>
    );
  }
}

class ButtonBothSides extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0
    };
  }

  handleInput = e => {
    var name = e.target.name;
    var value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  plus = () => {
    this.setState({
      amount: this.state.amount + 1
    });
  };

  minus = () => {
    this.setState({
      amount: this.state.amount - 1
    });
  };
  render() {
    return (
      <div class={`input-group ${this.props.custom}`}>
        <div class="input-group-prepend">
          <button
            onClick={this.plus}
            class="btn custom-form-button custom-form-button-left"
            type="button"
            id="button-addon1"
          >
            {this.props.iconLeft}
          </button>
        </div>
        <input
          name="amount"
          onChange={this.handleInput}
          type="number"
          class="form-control"
          placeholder={this.props.placeholder}
          disabled={this.props.disabled ? "disabled" : ""}
          value={this.state.amount}
        />
        <div class="input-group-append">
          <button
            onClick={this.minus}
            class="btn custom-form-button custom-form-button-right"
            type="button"
            id="button-addon1"
          >
            {this.props.iconRight}
          </button>
        </div>
      </div>
    );
  }
}

class ButtonGroupWithDropdown extends Component {
  render() {
    return (
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          aria-label="Text input with dropdown button"
          placeholder={this.props.placeholder}
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary dropdown-toggle custom-form-button"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Category
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
            <div role="separator" class="dropdown-divider" />
            <a class="dropdown-item" href="#">
              Separated link
            </a>
          </div>
        </div>
      </div>
    );
  }
}

class ButtonGroupWithSwitchery extends Component {
  render() {
    return (
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          aria-label="Text input with dropdown button"
        />
        <div class="input-group-append">
          <div className=" custom-form-button custom-form-button-right">
            <div class="toggle-switch">
              <input
                type="checkbox"
                id="togle-swith"
                placeholder={this.props.placeholder}
              />
              <label for="togle-swith" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
