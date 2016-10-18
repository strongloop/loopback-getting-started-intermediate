var app = require('../server/server');
var assert = require('assert');
var loopback = require('loopback');

describe('smoke test', function() {
  it('boots with models', function() {
    var modelNames = Object.keys(app.models);
    assert.equal(5, modelNames.indexOf('CoffeeShop'));
  });
});
