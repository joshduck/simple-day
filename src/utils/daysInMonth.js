const isLeapYear = require('./isLeapYear');

const DAYS_IN_MONTH = [
  31,
  28,
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];

function daysInMonth(year, month) {
  if (month === 2 && isLeapYear(year)) {
    return 29;
  } else {
    return DAYS_IN_MONTH[month - 1];
  }
};

module.exports = daysInMonth;
