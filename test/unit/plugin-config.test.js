import test from "tape";

import pluginOptions from "../../src/plugin-config";

test("plugin-options", (t) => {
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
    const message = "should have a number property: 'elementId'";
    const expected = "string";
    const actual = typeof pluginOptions.elementId;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions", (assert) => {
    const message = "string property 'elementId' should contain 'chattab'";
    const expected = "chattab";
    const actual = pluginOptions.elementId;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions", (assert) => {
    const message = "should have a number property: 'configNum'";
    const expected = "number";
    const actual = typeof pluginOptions.configNum;

    assert.equal(actual, expected, message);
    assert.end();
  });

  t.test("pluginOptions", (assert) => {
    const message = "number property 'configNum' should contain 1";
    const expected = 0;
    const actual = pluginOptions.configNum;

    assert.equal(actual, expected, message);
    assert.end();
  });
});
