const test = require("ava");
const romanize = require("../romanize");

test("romanize should convert 1000 to I\u0305", t => {
  t.is(romanize(1000), "I\u0305");
});

test("romanize should convert 10000 to X\u0305", t => {
  t.is(romanize(10000), "X\u0305");
});

test("romanize should convert 5000 to V\u0305", t => {
  t.is(romanize(5000), "V\u0305");
});

test("romanize should convert 9998 to I\u0305X\u0305CMXCVII", t => {
  t.is(romanize(9998), "I\u0305X\u0305CMXCVIII");
});

test("romanize should convert 9999 to I\u0305X\u0305CMXCVII", t => {
  t.is(romanize(9999), "I\u0305X\u0305CMXCIX");
});

test("romanize should convert 500000 to D\u0305", t => {
  t.is(romanize(500000), "D\u0305");
});
