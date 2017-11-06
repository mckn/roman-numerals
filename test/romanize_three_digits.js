const test = require("ava");
const romanize = require("../romanize");

test("romanize should convert 100 to C", t => {
  t.is(romanize(100), "C");
});

test("romanize should convert 300 to CCC", t => {
  t.is(romanize(300), "CCC");
});

test("romanize should convert 400 to CD", t => {
  t.is(romanize(400), "CD");
});

test("romanize should convert 500 to D", t => {
  t.is(romanize(500), "D");
});

test("romanize should convert 800 to DCCC", t => {
  t.is(romanize(800), "DCCC");
});

test("romanize should convert 900 to CM", t => {
  t.is(romanize(900), "CM");
});
