import test from "tape";
import React from "react";
import { shallow } from "enzyme";

import "../enzyme-setup";
import SmarterTrackWhosOnScript from "../../src/smartertrack-whos-on-script";

test("smartertrack-whos-on-script.js", (t) => {
  t.test("supplied valid values for all props, except for virtualPage prop = empty string", (assert) => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<SmarterTrackWhosOnScript
      fqdn="test.com"
      port={1111}
      virtualPage=""
    />);

    const message = "should render a script tag containing expected html (ignoring white space)";
    const actual = wrapper.html();
    const expected = `<script type="text/javascript">// SmarterTrack Who's On
      function smarterTrackWhosOn_TrackPage(a) {
        a.TrackPage();
      }
    </script>`;

    assert.equal(actual.replace(/\s/g, ""), expected.replace(/\s/g, ""), message);
    assert.end();
  });
  t.test("supplied valid values for all props", (assert) => {
    // eslint-disable-next-line react/jsx-filename-extension
    const wrapper = shallow(<SmarterTrackWhosOnScript
      fqdn="test.com"
      port={1111}
      virtualPage="a-virtual-test-page"
    />);

    const message = "should render a script tag containing expected html (ignoring white space)";
    const actual = wrapper.html();
    const expected = `<script type="text/javascript">// SmarterTrack Who's On
      function smarterTrackWhosOn_TrackPage(a) {
        a.TrackVirtualPage('a-virtual-test-page');
      }
    </script>`;

    assert.equal(actual.replace(/\s/g, ""), expected.replace(/\s/g, ""), message);
    assert.end();
  });
});
