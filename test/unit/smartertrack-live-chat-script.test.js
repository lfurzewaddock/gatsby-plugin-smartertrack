import test from "tape";
import React from "react";
import { shallow } from "enzyme";

import "../enzyme-setup";
import SmarterTrackLiveChatScript from "../../src/smartertrack-live-chat-script";

test("SmarterTrackLiveChatScript", (t) => {
  t.test("supplied valid values for all props", (assert) => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<SmarterTrackLiveChatScript
      fqdn="test.com"
      port={1111}
      elementId="testId"
      configNum={0}
    />);

    const message = "should render a script tag containing expected html (ignoring white space)";
    const actual = wrapper.html();
    const expected = `<script type="text/javascript">// SmarterTrack Live Chat
      (function() {
        var c = document.createElement('script');
        c.type = 'text/javascript'; c.async = true;
        c.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + "test.com:1111/ChatLink.ashx?config=0&id=testId";
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(c,s);
    })();</script>`;

    assert.equal(actual.replace(/\s/g, ""), expected.replace(/\s/g, ""), message);
    assert.end();
  });
});
