const test = require("ava");
const romanize = require("../romanize");

test("romanize should convert 1 to I", t => {
  t.is(romanize(1), "I");
});

test("romanize should convert 2 to II", t => {
  t.is(romanize(2), "II");
});

test("romanize should convert 3 to III", t => {
  t.is(romanize(3), "III");
});

test("romanize should convert 4 to IV", t => {
  t.is(romanize(4), "IV");
});

test("romanize should convert 5 to V", t => {
  t.is(romanize(5), "V");
});

test("romanize should convert 6 to VI", t => {
  t.is(romanize(6), "VI");
});

test("romanize should convert 7 to VII", t => {
  t.is(romanize(7), "VII");
});

test("romanize should convert 8 to VIII", t => {
  t.is(romanize(8), "VIII");
});

test("romanize should convert 9 to IX", t => {
  t.is(romanize(9), "IX");
});
