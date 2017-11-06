"use strict";

const base = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
const thousand = "\u0305";

module.exports = number => {
  let converted = "";

  if (number > 999) {
    number = number / 1000;
    return append(converted, number, thousand);
  }

  return append(converted, number);
};

function append(converted, number, special = "") {
  if (number > 99) {
    const index = calculateIndex(number, 100);
    converted += `${hundreds[index]}${special}`;
    number = number % 100;
  }

  if (number > 9) {
    const index = calculateIndex(number, 10);
    converted += `${tens[index]}${special}`;
    number = number % 10;
  }

  if (number > 0) {
    const index = calculateIndex(number, 1);
    converted += `${base[index]}${special}`;
  }

  return converted;
}

function calculateIndex(number, part) {
  return Math.floor(number / part) - 1;
}
