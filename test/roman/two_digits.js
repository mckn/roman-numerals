"use strict";
const test = require("ava");
const roman = require("../../roman");

test("parse should convert 11 to XI", t => {
  t.is(roman.parse(11), "XI");
});

test("parse should convert 12 to XII", t => {
  t.is(roman.parse(12), "XII");
});

test("parse should convert 14 to XIV", t => {
  t.is(roman.parse(14), "XIV");
});

test("parse should convert 15 to XV", t => {
  t.is(roman.parse(15), "XV");
});

test("parse should convert 16 to XVI", t => {
  t.is(roman.parse(16), "XVI");
});

test("parse should convert 19 to XIX", t => {
  t.is(roman.parse(19), "XIX");
});

test("parse should convert 20 to XX", t => {
  t.is(roman.parse(20), "XX");
});

test("parse should convert 25 to XXV", t => {
  t.is(roman.parse(25), "XXV");
});

test("parse should convert 34 to XXXIV", t => {
  t.is(roman.parse(34), "XXXIV");
});

test("parse should convert 50 to L", t => {
  t.is(roman.parse(50), "L");
});

test("parse should convert 74 to LXXIV", t => {
  t.is(roman.parse(74), "LXXIV");
});

test("parse should convert 80 to LXXX", t => {
  t.is(roman.parse(80), "LXXX");
});

test("parse should convert 99 to XCIX", t => {
  t.is(roman.parse(99), "XCIX");
});
