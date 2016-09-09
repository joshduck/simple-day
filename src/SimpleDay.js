const isLeapYear = require('./utils/isLeapYear');
const daysInMonth = require('./utils/daysInMonth');
const yearOffsetForMonth = require('./utils/yearOffsetForMonth');

function clone(input) {
  return {
    year: input.year,
    month: input.month,
    day: input.day,
  };
}

function normalize(input) {
  const overflowYear = yearOffsetForMonth(input.month);
  input.year += overflowYear;
  input.month -= overflowYear * 12;
  return input;
}

var SimpleDay = {
  create: function(year, month, day) {
    return normalize({
      year: year,
      month: month,
      day: day,
    });
  },

  normalize: function(input) {
    return normalize(clone(input));
  },
};

module.exports = SimpleDay;
