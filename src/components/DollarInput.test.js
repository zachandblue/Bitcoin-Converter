import React from "react";
import { shallow, mount } from "enzyme";
import { DollarInput } from "./DollarInput";
import { App } from "./App";

describe("DollarImport", () => {
  const dollarInput = shallow(<DollarInput />);
  it("renders correctly", () => {
    expect(dollarInput).toMatchSnapshot();
  });
  it("creates an input for dollars", () => {
    expect(dollarInput.find(".dollar-input").exists()).toBe(true);
  });
});
