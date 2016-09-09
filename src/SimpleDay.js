const isLeapYear = require('./utils/isLeapYear');
const daysInMonth = require('./utils/daysInMonth');

var SimpleDay = {
  create: function(year, month, day) {
    var overflowYear = 0;

    if (month > 12) {
      overflowYear = Math.ceil(month / 12) - 1;
    } else if (month < 1) {
      overflowYear = Math.floor((month - 1) / 12);
    }

    year += overflowYear;
    month -= overflowYear * 12;

    return {
      year: year,
      month: month,
      day: day,
    };
  }
};

module.exports = SimpleDay;
