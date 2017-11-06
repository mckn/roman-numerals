"use strict";
const test = require("ava");
const roman = require("../../roman");

test("parse should convert 100 to C", t => {
  t.is(roman.parse(100), "C");
});

test("parse should convert 300 to CCC", t => {
  t.is(roman.parse(300), "CCC");
});

test("parse should convert 400 to CD", t => {
  t.is(roman.parse(400), "CD");
});

test("parse should convert 500 to D", t => {
  t.is(roman.parse(500), "D");
});

test("parse should convert 800 to DCCC", t => {
  t.is(roman.parse(800), "DCCC");
});

test("parse should convert 900 to CM", t => {
  t.is(roman.parse(900), "CM");
});

test("parse should convert 999 to CMXCIX", t => {
  t.is(roman.parse(999), "CMXCIX");
});

test("parse should convert 499 to CDXCIX", t => {
  t.is(roman.parse(499), "CDXCIX");
});
