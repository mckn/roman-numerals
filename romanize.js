"use strict";

const base = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const tens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const hundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];

module.exports = number => append(number);

function append(number, special = "") {
  if (number > 999) {
    const index = Math.floor(number / 1000);
    number = number % 1000;

    return formatAsThousands(append(index)) + append(number);
  }

  if (number > 99) {
    const index = calculateIndex(number, 100);
    number = number % 100;
    return `${hundreds[index]}${special}` + append(number, special);
  }

  if (number > 9) {
    const index = calculateIndex(number, 10);
    number = number % 10;
    return `${tens[index]}${special}` + append(number, special);
  }

  if (number > 0) {
    const index = calculateIndex(number, 1);
    return `${base[index]}${special}`;
  }

  return "";
}

function calculateIndex(number, part) {
  return Math.floor(number / part) - 1;
}

function formatAsThousands(numeral) {
  const thousand = "\u0305";

  return numeral
    .split("")
    .map(n => `${n}${thousand}`)
    .join("");
}
