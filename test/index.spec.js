const { describe, it } = require('mocha');
const { assert, expect } = require('chai');
const {
  doSomething
} = require('../index.js');

describe('Sample Test Suite', () => {
  it('should be a test', () => {
    assert.equal(doSomething(), 'did something');
  })
})