import test from "tape";
import React from "react";
import { shallow } from "enzyme";

import "../enzyme-setup";
import SmarterTrackLiveChatHtml from "../../src/smartertrack-live-chat-html";

test("smartertrack-live-chat-html.js", (t) => {
  t.test("SmarterTrackLiveChatHtml", (assert) => {
    const wrapper = shallow(<SmarterTrackLiveChatHtml elementId="testId" />); // eslint-disable-line react/jsx-filename-extension

    const message = "should render a div with id equal to 'testId'";
    const actual = wrapper.contains(<div id="testId" />);
    const expected = true;

    assert.equal(actual, expected, message);
    assert.end();
  });
});
