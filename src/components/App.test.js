import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Bitcoin from "./Bitcoin";
import DollarInput from "./DollarInput";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import getData from "../api";

describe("App", () => {
  const app = shallow(<App />);
  it("renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("has child component `DollarInput`", () => {
    expect(app.find("DollarInput").exists()).toBe(true);
  });
  it("initializes `state` with empty `dollars`, `exchangeRate`, and `bitcoins` keys", () => {
    expect(app.state()).toEqual({
      dollars: "",
      exchangeRate: "",
      bitcoins: ""
    });
  });

  // it("should do what I like", () => {
  //   app.instance().apiCall = jest.fn();
  //   expect(app.instance().apiCall).toMatchSnapshot();
  // });

  it("calls getData function when the component mounts", () => {
    app.instance().apiCall = jest.fn();

    app.update();
    app.instance().componentDidMount();
    expect(app.instance().apiCall).toHaveBeenCalledTimes(1);
  });

  // it("returns the expected result", () => {
  //   app.instance().apiCall = jest.fn();
  //   app.update();
  //   app.instance().componentDidMount();
  //   expect(app.instance().apiCall()).toBe(true);
  // });

  describe("when the `getData` function is called in `ComponentDidMount`", () => {
    let result;
    const mock = new MockAdapter(axios);
    const sample = { data: { bpi: { USD: { rate_float: 5 } } } };

    beforeEach(async () => {
      mock
        .onGet("https://api.coindesk.com/v1/bpi/currentprice.json")
        .reply(200, sample);
      result = await getData();
    });

    it("calls bitcoin API to retrieve exchange rate", async () => {
      expect(result).toEqual(sample);
    });

    it("updates the state of `exchangeRate` to be the result of the API call", async () => {
      const exchangeRate = result.data.bpi.USD.rate_float;
      const mounted = shallow(<Bitcoin exchangeRate={exchangeRate} />);
      expect(parseInt(mounted.find(".exchange-rate").text()), 10).toEqual(
        parseInt(exchangeRate, 10)
      );
    });
  });

  describe("when `handleChange` is called", () => {
    it("updates the `dollars` state", () => {
      const dollars = 100;
      const e = { target: { value: dollars } };

      app.instance().handleChange(e);

      expect(app.state().dollars).toEqual(dollars);
    });
  });
});
