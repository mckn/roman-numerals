"use strict";

const base = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];

module.exports = convert;

function convert(number) {
  if (number >= 1000) {
    const index = calculateIndex(number, 1000);
    const thousands = formatAsThousands(convert(index));

    return thousands + convert(number % 1000);
  }

  if (number >= 100) {
    const index = calculateIndex(number, 100);
    return hundreds[index] + convert(number % 100);
  }

  if (number >= 10) {
    const index = calculateIndex(number, 10);
    return tens[index] + convert(number % 10);
  }

  if (number >= 0) {
    const index = calculateIndex(number, 1);
    return base[index];
  }

  return "";
}

function calculateIndex(number, part) {
  return Math.floor(number / part);
}

function formatAsThousands(numeral) {
  const thousand = "\u0305";

  return numeral
    .split("")
    .map(n => `${n}${thousand}`)
    .join("");
}
