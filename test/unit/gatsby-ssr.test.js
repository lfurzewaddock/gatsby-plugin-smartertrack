const test = require("tape");
const td = require("testdouble");
const React = require("react");

function setup() {
  const defaultOptions = td.replace("../../src/plugin-config");
  const SmarterTrackLiveChatScript = td.replace("../../src/smartertrack-live-chat-script");
  const SmarterTrackLiveChatHtml = td.replace("../../src/smartertrack-live-chat-html");
  const SmarterTrackWhosOnScript = td.replace("../../src/smartertrack-whos-on-script");
  const ScriptTag = td.replace("react-script-tag").default;
  const subject = require("../../src/gatsby-ssr"); // eslint-disable-line global-require

  // Original postBodyComponents objects (keys only) fixture:
  const postBodyComponentsfixture = () => {
    const postBodyComponents = [{
      key: "gatsby-plugin-google-analytics",
    },
    {
      key: "gatsby-plugin-smartertrack-live-chat-element",
    },
    {
      key: "gatsby-plugin-smartertrack-live-chat-script",
    },
    {
      key: "gatsby-plugin-smartertrack-whos-on-script",
    },
    {
      key: "gatsby-plugin-smartertrack-whos-on-script-tag",
    },
    {
      key: "script-loader",
    },
    {
      key: "chunk-mapping",
    },
    {
      key: "/webpack-runtime-601d0917350e73c0bb65.js",
    },
    {
      key: "/app-c174296a010c820ec961.js",
    },
    {
      key: "/component---src-pages-404-js-5558b2f8b531898ee6c2.js",
    }];

    return postBodyComponents;
  };

  return {
    defaultOptions,
    SmarterTrackLiveChatScript,
    SmarterTrackLiveChatHtml,
    SmarterTrackWhosOnScript,
    ScriptTag,
    postBodyComponentsfixture,
    subject,
  };
}

function teardown(fixtures) {
  td.reset();
  // Assign reference to null for GC
  fixtures = null; // eslint-disable-line no-param-reassign
}

test("gatsby-ssr.js", (t) => {
  t.test("onRenderBody", (assert) => {
    const fixtures = setup();

    const message = "should be a function";
    const expected = "function";
    const actual = typeof fixtures.subject.onRenderBody;

    assert.equal(actual, expected, message);
    teardown(fixtures);
    assert.end();
  });
  t.test("onRenderBody", (assert) => {
    const fixtures = setup();

    const message = "should NOT invoke 1st arg fn, when 2nd arg not present";
    const expected = undefined;

    const fakeFn = td.func();
    const actual = fixtures.subject.onRenderBody({ setPostBodyComponents: fakeFn });

    td.verify(fakeFn(), { times: 0 });
    assert.equal(actual, expected, message);
    teardown(fixtures);
    assert.end();
  });
  t.test("onRenderBody", (assert) => {
    const fixtures = setup();

    const message = "should NOT invoke 1st arg fn, when 2nd arg obj contains falsey property: fqdn";
    const expected = undefined;

    const fakeFn = td.func();
    const options = { fqdn: "" };
    const actual = fixtures.subject.onRenderBody({ setPostBodyComponents: fakeFn }, options);

    td.verify(fakeFn(), { times: 0 });
    assert.equal(actual, expected, message);
    teardown(fixtures);
    assert.end();
  });
  t.test("onRenderBody", (assert) => {
    const fixtures = setup();

    const message = "should invoke 1st arg fn, when 2nd arg obj contains truthy property: fqdn";
    const expected = undefined;

    const fakeFn = td.func();
    const options = { fqdn: "test.com" };
    const actual = fixtures.subject.onRenderBody({ setPostBodyComponents: fakeFn }, options);

    td.verify(fakeFn([
      // eslint-disable-next-line react/jsx-filename-extension
      <fixtures.SmarterTrackLiveChatHtml
        elementId={fixtures.defaultOptions.liveChat.options.elementId}
        key="gatsby-plugin-smartertrack-live-chat-element"
      />,
      <fixtures.SmarterTrackLiveChatScript
        fqdn={options.fqdn}
        port={fixtures.defaultOptions.port}
        elementId={fixtures.defaultOptions.liveChat.options.elementId}
        configNum={fixtures.defaultOptions.liveChat.options.configNum}
        key="gatsby-plugin-smartertrack-live-chat-script"
      />,
      <fixtures.SmarterTrackWhosOnScript
        virtualPage={fixtures.defaultOptions.whosOn.options.virtualPage}
        key="gatsby-plugin-smartertrack-whos-on-script"
      />,
      <fixtures.ScriptTag
        isHydrating
        type="text/javascript"
        src="//test.com:443/ST.ashx?scriptonly=true"
        key="gatsby-plugin-smartertrack-whos-on-script-tag"
      />,
    ]));
    assert.equal(actual, expected, message);
    teardown(fixtures);
    assert.end();
  });
  t.test("onRenderBody", (assert) => {
    const fixtures = setup();

    const message = "should invoke 1st arg fn arg [SmarterTrackWhosOnScript], when 2nd arg obj contains truthy property: fqdn and liveChat.isEnabled = false";
    const expected = undefined;

    const fakeFn = td.func();
    const options = {
      fqdn: "test.com",
      liveChat: {
        isEnabled: false,
      },
    };
    const actual = fixtures.subject.onRenderBody({ setPostBodyComponents: fakeFn }, options);

    td.verify(fakeFn([
      // eslint-disable-next-line react/jsx-filename-extension
      <fixtures.SmarterTrackWhosOnScript
        virtualPage={fixtures.defaultOptions.whosOn.options.virtualPage}
        key="gatsby-plugin-smartertrack-whos-on-script"
      />,
      <fixtures.ScriptTag
        isHydrating
        type="text/javascript"
        src="//test.com:443/ST.ashx?scriptonly=true"
        key="gatsby-plugin-smartertrack-whos-on-script-tag"
      />,
    ]));
    assert.equal(actual, expected, message);
    teardown(fixtures);
    assert.end();
  });
  t.test("onRenderBody", (assert) => {
    const fixtures = setup();

    const message = "should invoke 1st arg fn args [SmarterTrackLiveChatHtml,SmarterTrackLiveChatScript], when 2nd arg obj contains truthy property: fqdn and whosOn.isEnabled = false";
    const expected = undefined;

    const fakeFn = td.func();
    const options = {
      fqdn: "test.com",
      whosOn: {
        isEnabled: false,
      },
    };
    const actual = fixtures.subject.onRenderBody({ setPostBodyComponents: fakeFn }, options);

    td.verify(fakeFn([
      // eslint-disable-next-line react/jsx-filename-extension
      <fixtures.SmarterTrackLiveChatHtml
        elementId={fixtures.defaultOptions.liveChat.options.elementId}
        key="gatsby-plugin-smartertrack-live-chat-element"
      />,
      <fixtures.SmarterTrackLiveChatScript
        fqdn={options.fqdn}
        port={fixtures.defaultOptions.port}
        elementId={fixtures.defaultOptions.liveChat.options.elementId}
        configNum={fixtures.defaultOptions.liveChat.options.configNum}
        key="gatsby-plugin-smartertrack-live-chat-script"
      />,
    ]));
    assert.equal(actual, expected, message);
    teardown(fixtures);
    assert.end();
  });
  t.test("onPreRenderHTML", (assert) => {
    const fixtures = setup();

    const message = "should be a function";
    const expected = "function";
    const actual = typeof fixtures.subject.onPreRenderHTML;

    assert.equal(actual, expected, message);
    teardown(fixtures);
    assert.end();
  });
  t.test("onPreRenderHTML", (assert) => {
    const fixtures = setup();

    // Reordered postBodyComponents objects (keys only) fixture:
    const postBodyComponents =
      [{
        key: "gatsby-plugin-google-analytics",
      },
      {
        key: "gatsby-plugin-smartertrack-live-chat-element",
      },
      {
        key: "gatsby-plugin-smartertrack-live-chat-script",
      },
      {
        key: "script-loader",
      },
      {
        key: "chunk-mapping",
      },
      {
        key: "/webpack-runtime-601d0917350e73c0bb65.js",
      },
      {
        key: "/app-c174296a010c820ec961.js",
      },
      {
        key: "/component---src-pages-404-js-5558b2f8b531898ee6c2.js",
      },
      {
        key: "gatsby-plugin-smartertrack-whos-on-script",
      },
      {
        key: "gatsby-plugin-smartertrack-whos-on-script-tag",
      }];

    const fakeFn = td.func();

    const message = "should move objects with who's on (script and tag keys) to last postions in array";
    const expected = undefined;
    const actual = fixtures.subject.onPreRenderHTML({
      getPostBodyComponents: fixtures.postBodyComponentsfixture,
      replacePostBodyComponents: fakeFn,
    });

    td.verify(fakeFn(postBodyComponents));

    assert.equal(actual, expected, message);
    teardown(fixtures);
    assert.end();
  });
});

