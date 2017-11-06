const test = require("ava");
const romanize = require("../romanize");

test("romanize should convert 1000 to I\u0305", t => {
  t.is(romanize(1000), "I\u0305");
});

test("romanize should convert 10000 to X\u0305", t => {
  t.is(romanize(10000), "X\u0305");
});
