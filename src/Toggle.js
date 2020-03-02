import React, { Component } from "react";
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: true };

    // This binding is necessary to make `this` work in the callback

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggle: !state.isToggle
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isToggle ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}

export default Toggle;
