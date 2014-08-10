
// deepak_node_spec.js

'use strict';

var generator = require('../lib/deepak_node.js');
console.log('\nPassed afterwards\n');

console.log(JSON.stringify(exports));
console.log(JSON.stringify(generator));
var chopra    = exports.choprify();
console.log(JSON.stringify(exports));
console.log(JSON.stringify(generator));

describe('Deepak Chopra', function() {
/*
  it('Chopra', function() {
    generator;
  });
*/
  describe('globals', function() {
    it('generator should exist', function() {
        expect(generator).not.toBe(undefined);
    });
    it('chopra should exist', function() {
        expect(chopra).not.toBe(undefined);
    });
  });

  describe('randFrom', function() {
    it('should return non-negative integers', function() {
        var N = chopra.randFrom(100);
        expect(N).toBeGreaterThan(-1);
        expect(N).toBeLessThan(100);
    });
  });

});