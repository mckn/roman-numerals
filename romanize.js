"use strict";

const base = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];

module.exports = number => {
  let converted = "";

  if (number > 99) {
    converted += hundreds[Math.floor(number / 100) - 1];
    number = number % 100;
  }

  if (number > 9) {
    converted += tens[Math.floor(number / 10) - 1];
    number = number % 10;
  }

  if (number <= 0) {
    return converted;
  }

  converted += base[number - 1];
  return converted;
};
