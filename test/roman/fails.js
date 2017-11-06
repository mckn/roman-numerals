"use strict";
const test = require("ava");
const roman = require("../../roman");

test("parse should return empty when string is passed", t => {
  t.is(roman.parse("1000"), "");
});

test("parse should return empty when bool is passed", t => {
  t.is(roman.parse(true), "");
});

test("parse should return positive numeral when negative number is passed", t => {
  t.is(roman.parse(-5000), "V\u0305");
});

test("parse should return empty string when nothing is passed", t => {
  t.is(roman.parse(), "");
});
