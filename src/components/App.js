import React, { Component } from "react";
import DollarInput from "./DollarInput";
import Bitcoin from "./Bitcoin";
import getData from "../api";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      dollars: "",
      exchangeRate: "",
      bitcoins: ""
    };

    this.apiCall = this.apiCall.bind(this);
  }

  handleChange = e => {
    const dollars = e.target.value;
    this.setState({ dollars });
  };

  apiCall = async () => {
    const result = await getData();
    const exchangeRate = result.bpi.USD.rate_float;
    this.setState({ exchangeRate });
    return true;
  };

  componentDidMount = () => {
    this.apiCall();
  };
  render() {
    return (
      <div className="main">
        <div className="header">
          <h1>Cash To Bitcoin</h1>
          <i className="fab fa-bitcoin" />
          <div className="header-triangle-1" />
          <div className="header-triangle-2" />
        </div>

        <div className="app">
          <div className=" main-box-1" />
          <DollarInput
            handleChange={this.handleChange}
            dollars={this.state.dollars}
          />

          <Bitcoin
            exchangeRate={this.state.exchangeRate}
            dollars={this.state.dollars}
            exchangeRate={this.state.exchangeRate}
          />
          <div className=" main-box-2" />
          <div className=" main-box-3" />
          <div className=" main-box-4" />
          <div className=" main-box-5" />
          <div className=" main-box-6" />
          <div className="credits">
            Powered by <a href="http://www.coindesk.com/price">CoinDesk</a>
          </div>
        </div>

        <div className="footer">
          {/* <div className="footer-triangle-1" /> */}
        </div>
      </div>
    );
  }
}

export default App;
