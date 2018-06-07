import React from "react";
import { shallow, mount } from "enzyme";
import DollarInput from "./DollarInput";
import { App } from "./App";

describe("DollarImport", () => {
  const dollarInput = shallow(<DollarInput />);
  it("renders correctly", () => {
    expect(dollarInput).toMatchSnapshot();
  });
  it("creates an input for dollars", () => {
    expect(dollarInput.find(".dollar-input").exists()).toBe(true);
  });

  describe("when form is submitted", () => {
    it("calls `handleSubmit` when the form is submitted", () => {
      const fakeEvent = { preventDefault: () => console.log("preventDefault") };
      const dollar = shallow(<DollarInput />);
      const spy = jest.spyOn(dollar.instance(), "handleSubmit");
      dollar.find("form").simulate("submit", fakeEvent);
      expect();
    });
    // const handleSubmit = jest.fn();
    // const dollar = shallow(<DollarInput handleSubmit={handleSubmit} />);
    //
    // it("calls `handleSubmit` function", () => {
    //   expect(dollar.find("form").length).toBe(1);
    //   dollar.find("form").simulate("submit", fakeEvent);
    //   expect(handleSubmit).toHaveBeenCalled();
    // });
  });
});
