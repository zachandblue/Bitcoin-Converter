import React, { Component } from "react";

export class DollarInput extends Component {
  constructor() {
    super();

    this.state = {
      dollars: ""
    };
  }
  render() {
    return (
      <div className="dollar-input">
        <form>
          <div className="dollars">
            <h3>US Dollars</h3>
          </div>
          <input
            type="text"
            placeholder="$"
            className="dollar-input"
            onChange={this.props.handleChange}
            value={this.props.dollars}
          />
        </form>
      </div>
    );
  }
}

export default DollarInput;
