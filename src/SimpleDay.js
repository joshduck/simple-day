const isLeapYear = require('./utils/isLeapYear');
const daysInMonth = require('./utils/daysInMonth');
const yearOffsetForMonth = require('./utils/yearOffsetForMonth');
const { toOffset, toDate } = require('date-offset');

function normalizeAndClone(input) {
  const yearOffset = yearOffsetForMonth(input.month);
  const year = input.year + yearOffset;
  const month = input.month - yearOffset * 12;
  return toDate(toOffset(year, month, input.day));
}

function wrapMonth(input) {
  const yearOffset = yearOffsetForMonth(input.month);
  input.year += yearOffset;
  input.month -= yearOffset * 12;
}

function clipDay(input) {
  input.day = Math.min(input.day, daysInMonth(input.year, input.month));
}

var SimpleDay = {
  create: function(year, month, day) {
    return normalizeAndClone({
      year: year,
      month: month,
      day: day
    });
  },

  normalize: function(input) {
    return normalizeAndClone(input);
  },

  addYears: function(input, years) {
    const output = normalizeAndClone(input);
    output.year += years;
    clipDay(output);
    return output;
  },

  addMonths: function(input, months) {
    const output = normalizeAndClone(input);
    output.month += months;
    wrapMonth(output);
    clipDay(output);
    return output;
  },

  addDays: function(input, days) {
    const normalized = normalizeAndClone(input);
    const offset = toOffset(normalized.year, normalized.month, normalized.day);
    return toDate(offset + days);
  }
};

module.exports = SimpleDay;
