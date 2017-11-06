"use strict";
const test = require("ava");
const roman = require("../../roman");

test("parse should convert 1000 to I\u0305", t => {
  t.is(roman.parse(1000), "I\u0305");
});

test("parse should convert 10000 to X\u0305", t => {
  t.is(roman.parse(10000), "X\u0305");
});

test("parse should convert 5000 to V\u0305", t => {
  t.is(roman.parse(5000), "V\u0305");
});

test("parse should convert 9998 to I\u0305X\u0305CMXCVII", t => {
  t.is(roman.parse(9998), "I\u0305X\u0305CMXCVIII");
});

test("parse should convert 9999 to I\u0305X\u0305CMXCVII", t => {
  t.is(roman.parse(9999), "I\u0305X\u0305CMXCIX");
});

test("parse should convert 500000 to D\u0305", t => {
  t.is(roman.parse(500000), "D\u0305");
});
