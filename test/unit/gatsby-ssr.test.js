const test = require("tape");
const td = require("testdouble");
const React = require("react");

let defaultOptions;
let SmarterTrackLiveChatScript;
let SmarterTrackLiveChatHtml;
let SmarterTrackWhosOnScript;
let subject;

function setup() {
  defaultOptions = td.replace("../../src/plugin-config");
  SmarterTrackLiveChatScript = td.replace("../../src/smartertrack-live-chat-script");
  SmarterTrackLiveChatHtml = td.replace("../../src/smartertrack-live-chat-html");
  SmarterTrackWhosOnScript = td.replace("../../src/smartertrack-whos-on-script");
  subject = require("../../src/gatsby-ssr").onRenderBody; // eslint-disable-line global-require
}

function teardown() {
  td.reset();
}

test("gatsby-ssr", (t) => {
  t.test("onRenderBody", (assert) => {
    setup();

    const message = "should be a function";
    const expected = "function";
    const actual = typeof subject;

    assert.equal(actual, expected, message);
    teardown();
    assert.end();
  });
  t.test("onRenderBody", (assert) => {
    setup();

    const message = "should NOT invoke 1st arg fn, when 2nd arg not present";
    const expected = undefined;

    const func = td.func();
    const actual = subject({ setPostBodyComponents: func });

    td.verify(func(), { times: 0 });
    assert.equal(actual, expected, message);
    teardown();
    assert.end();
  });
  t.test("onRenderBody", (assert) => {
    setup();

    const message = "should NOT invoke 1st arg fn, when 2nd arg obj contains falsey property: fqdn";
    const expected = undefined;

    const func = td.func();
    const options = { fqdn: "" };
    const actual = subject({ setPostBodyComponents: func }, options);

    td.verify(func(), { times: 0 });
    assert.equal(actual, expected, message);
    teardown();
    assert.end();
  });
  t.test("onRenderBody", (assert) => {
    setup();

    const message = "should invoke 1st arg fn, when 2nd arg obj contains truthy property: fqdn";
    const expected = undefined;

    const func = td.func();
    const options = { fqdn: "test.com" };
    const actual = subject({ setPostBodyComponents: func }, options);

    td.verify(func([
      // eslint-disable-next-line react/jsx-filename-extension
      <SmarterTrackLiveChatHtml
        elementId={defaultOptions.liveChat.options.elementId}
        key="gatsby-plugin-smartertrack-widget-element"
      />,
      <SmarterTrackLiveChatScript
        fqdn={options.fqdn}
        port={defaultOptions.port}
        elementId={defaultOptions.liveChat.options.elementId}
        configNum={defaultOptions.liveChat.options.configNum}
        key="gatsby-plugin-smartertrack-widget-script"
      />,
      <SmarterTrackWhosOnScript
        fqdn={options.fqdn}
        port={defaultOptions.port}
        virtualPage={defaultOptions.whosOn.options.virtualPage}
        key="gatsby-plugin-smartertrack-whos-on-script"
      />,
    ]));
    assert.equal(actual, expected, message);
    teardown();
    assert.end();
  });
  t.test("onRenderBody", (assert) => {
    setup();

    const message = "should invoke 1st arg fn arg [SmarterTrackWhosOnScript], when 2nd arg obj contains truthy property: fqdn and liveChat.isEnabled = false";
    const expected = undefined;

    const func = td.func();
    const options = {
      fqdn: "test.com",
      liveChat: {
        isEnabled: false,
      },
    };
    const actual = subject({ setPostBodyComponents: func }, options);

    td.verify(func([
      // eslint-disable-next-line react/jsx-filename-extension
      <SmarterTrackWhosOnScript
        fqdn={options.fqdn}
        port={defaultOptions.port}
        virtualPage={defaultOptions.whosOn.options.virtualPage}
        key="gatsby-plugin-smartertrack-whos-on-script"
      />,
    ]));
    assert.equal(actual, expected, message);
    teardown();
    assert.end();
  });
  t.test("onRenderBody", (assert) => {
    setup();

    const message = "should invoke 1st arg fn args [SmarterTrackLiveChatHtml,SmarterTrackLiveChatScript], when 2nd arg obj contains truthy property: fqdn and whosOn.isEnabled = false";
    const expected = undefined;

    const func = td.func();
    const options = {
      fqdn: "test.com",
      whosOn: {
        isEnabled: false,
      },
    };
    const actual = subject({ setPostBodyComponents: func }, options);

    td.verify(func([
      // eslint-disable-next-line react/jsx-filename-extension
      <SmarterTrackLiveChatHtml
        elementId={defaultOptions.liveChat.options.elementId}
        key="gatsby-plugin-smartertrack-widget-element"
      />,
      <SmarterTrackLiveChatScript
        fqdn={options.fqdn}
        port={defaultOptions.port}
        elementId={defaultOptions.liveChat.options.elementId}
        configNum={defaultOptions.liveChat.options.configNum}
        key="gatsby-plugin-smartertrack-widget-script"
      />,
    ]));
    assert.equal(actual, expected, message);
    teardown();
    assert.end();
  });
});

