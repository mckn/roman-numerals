const test = require("ava");
const romanize = require("../romanize");

test("romanize should convert 11 to XI", t => {
  t.is(romanize(11), "XI");
});

test("romanize should convert 12 to XII", t => {
  t.is(romanize(12), "XII");
});

test("romanize should convert 14 to XIV", t => {
  t.is(romanize(14), "XIV");
});

test("romanize should convert 15 to XV", t => {
  t.is(romanize(15), "XV");
});

test("romanize should convert 16 to XVI", t => {
  t.is(romanize(16), "XVI");
});

test("romanize should convert 19 to XIX", t => {
  t.is(romanize(19), "XIX");
});

test("romanize should convert 20 to XX", t => {
  t.is(romanize(20), "XX");
});

test("romanize should convert 25 to XXV", t => {
  t.is(romanize(25), "XXV");
});

test("romanize should convert 34 to XXXIV", t => {
  t.is(romanize(34), "XXXIV");
});

test("romanize should convert 50 to L", t => {
  t.is(romanize(50), "L");
});
