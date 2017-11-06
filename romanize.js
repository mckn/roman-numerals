"use strict";

const base = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];

module.exports = number => {
  let converted = "";

  if (number > 10) {
    converted += tens[Math.floor(number / 10, 0) - 1];
    number = number % 10;
  }

  if (number <= 0) {
    return converted;
  }

  converted += base[number - 1];
  return converted;
};
