import React from "react";
import { shallow, mount } from "enzyme";
import Bitcoin from "./Bitcoin";

describe("Bitcoin", () => {
  // dollars / exchange rate = bitcoin

  const props = { dollars: 100, exchangeRate: 10 };
  const bitcoin = mount(<Bitcoin {...props} />);

  it("renders correctly", () => {
    expect(bitcoin).toMatchSnapshot();
  });

  it("correctly converts dollars into bitcoins using the given exchange rate", () => {
    expect(parseInt(bitcoin.find(".bitcoin").text(), 10)).toEqual(10);
  });
});
