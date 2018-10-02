import test from "tape";
import React from "react";
import { shallow } from "enzyme";

import "../enzyme-setup";
import SmarterTrackHtml from "../../src/smartertrack-html";

test("SmarterTrackHtml", (t) => {
  const wrapper = shallow(<SmarterTrackHtml elementId="testId" />); // eslint-disable-line react/jsx-filename-extension

  const message = "should render a div with id equal to 'testId'";
  const actual = wrapper.contains(<div id="testId" />);
  const expected = true;

  t.equal(actual, expected, message);
  t.end();
});
