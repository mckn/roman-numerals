const test = require("ava");
const romanize = require("../romanize");

test("romanize should return empty when string is passed", t => {
  t.is(romanize("1000"), "");
});

test("romanize should return empty when bool is passed", t => {
  t.is(romanize(true), "");
});

test("romanize should return positive numeral when negative number is passed", t => {
  t.is(romanize(-5000), "V\u0305");
});

test("romanize should return empty string when nothing is passed", t => {
  t.is(romanize(), "");
});
