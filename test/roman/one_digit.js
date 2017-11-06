"use strict";
const test = require("ava");
const roman = require("../../roman");

test("parse should convert 1 to I", t => {
  t.is(roman.parse(1), "I");
});

test("parse should convert 2 to II", t => {
  t.is(roman.parse(2), "II");
});

test("parse should convert 3 to III", t => {
  t.is(roman.parse(3), "III");
});

test("parse should convert 4 to IV", t => {
  t.is(roman.parse(4), "IV");
});

test("parse should convert 5 to V", t => {
  t.is(roman.parse(5), "V");
});

test("parse should convert 6 to VI", t => {
  t.is(roman.parse(6), "VI");
});

test("parse should convert 7 to VII", t => {
  t.is(roman.parse(7), "VII");
});

test("parse should convert 8 to VIII", t => {
  t.is(roman.parse(8), "VIII");
});

test("parse should convert 9 to IX", t => {
  t.is(roman.parse(9), "IX");
});
