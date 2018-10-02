const test = require("tape");
const td = require("testdouble");
const React = require("react");

let defaultOptions;
let SmarterTrackScript;
let SmarterTrackHtml;
let subject;

function setup() {
  defaultOptions = td.replace("../../src/plugin-config");
  SmarterTrackScript = td.replace("../../src/smartertrack-script");
  SmarterTrackHtml = td.replace("../../src/smartertrack-html");
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
      <SmarterTrackHtml
        elementId={defaultOptions.elementId}
        key="gatsby-plugin-smartertrack-widget-element"
      />,
      <SmarterTrackScript
        fqdn={options.fqdn}
        port={defaultOptions.port}
        elementId={defaultOptions.elementId}
        configNum={defaultOptions.configNum}
        key="gatsby-plugin-smartertrack-widget-script"
      />,
    ]));
    assert.equal(actual, expected, message);
    teardown();
    assert.end();
  });
});

