import test from "tape";

import pluginOptions from "../../src/plugin-config";

test("pluginOptions", (t) => {
  t.test("pluginOptions", (assert) => {
    const message = "should be an object";
    const expected = "object";
    const actual = typeof pluginOptions;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions", (assert) => {
    const message = "should have a string property: 'fqdn'";
    const expected = "string";
    const actual = typeof pluginOptions.fqdn;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions", (assert) => {
    const message = "string property 'fqdn' should contain an empty string";
    const expected = "";
    const actual = pluginOptions.fqdn;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions", (assert) => {
    const message = "should have a number property: 'port'";
    const expected = "number";
    const actual = typeof pluginOptions.port;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions", (assert) => {
    const message = "number property 'port' should contain 443";
    const expected = 443;
    const actual = pluginOptions.port;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions", (assert) => {
    const message = "should contain a 'liveChat' object";
    const expected = "object";
    const actual = typeof pluginOptions.liveChat;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions.liveChat", (assert) => {
    const message = "should have a boolean property: 'isEnabled'";
    const expected = "boolean";
    const actual = typeof pluginOptions.liveChat.isEnabled;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions.liveChat", (assert) => {
    const message = "boolean 'isEnabled' should contain true";
    const expected = true;
    const actual = pluginOptions.liveChat.isEnabled;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions.liveChat", (assert) => {
    const message = "should contain an 'options' object";
    const expected = "object";
    const actual = typeof pluginOptions.liveChat.options;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions.liveChat.options", (assert) => {
    const message = "should have a string property: 'elementId'";
    const expected = "string";
    const actual = typeof pluginOptions.liveChat.options.elementId;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions.liveChat.options", (assert) => {
    const message = "string property 'elementId' should contain 'chattab'";
    const expected = "chattab";
    const actual = pluginOptions.liveChat.options.elementId;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions.liveChat.options", (assert) => {
    const message = "should have a number property: 'configNum'";
    const expected = "number";
    const actual = typeof pluginOptions.liveChat.options.configNum;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions.liveChat.options", (assert) => {
    const message = "number property 'configNum' should contain 0";
    const expected = 0;
    const actual = pluginOptions.liveChat.options.configNum;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions", (assert) => {
    const message = "should contain a 'whosOn' object";
    const expected = "object";
    const actual = typeof pluginOptions.whosOn;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions.whosOn", (assert) => {
    const message = "should have a boolean property: 'isEnabled'";
    const expected = "boolean";
    const actual = typeof pluginOptions.whosOn.isEnabled;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions.whosOn", (assert) => {
    const message = "boolean 'isEnabled' should contain true";
    const expected = true;
    const actual = pluginOptions.whosOn.isEnabled;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions.whosOn", (assert) => {
    const message = "should contain an 'options' object";
    const expected = "object";
    const actual = typeof pluginOptions.whosOn.options;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions.whosOn.options", (assert) => {
    const message = "should have a string property: 'virtualPage'";
    const expected = "string";
    const actual = typeof pluginOptions.whosOn.options.virtualPage;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions.whosOn.options", (assert) => {
    const message = "string property 'virtualPage' should contain an empty string";
    const expected = "";
    const actual = pluginOptions.whosOn.options.virtualPage;

    assert.equal(actual, expected, message);
    assert.end();
  });
});
