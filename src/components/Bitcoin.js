import React, { Component } from "react";

class Bitcoin extends Component {
  render() {
    return (
      <div>
        <div className="exchange-rate-label">
          <h3>Rate</h3>
        </div>
        <h3 className="rate">
          <div className="exchange-rate">
            {(1 * this.props.exchangeRate).toFixed(2)}
          </div>
        </h3>
        <div className="bitcoin-value-label">
          <h3>Bitcoins</h3>
        </div>
        <h1 className="bitcoin-value">
          <div className="bitcoin">
            {(this.props.dollars / this.props.exchangeRate).toFixed(2)}
          </div>
        </h1>
      </div>
    );
  }
}

export default Bitcoin;
