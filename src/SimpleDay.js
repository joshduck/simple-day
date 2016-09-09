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

var SimpleDay = {
  create: function(y, m, d) {
    var overflowY = 0;

    if (m > 12) {
      overflowY = Math.ceil(m / 12) - 1;
    } else if (m < 1) {
      overflowY = Math.floor((m - 1) / 12);
    }

    y += overflowY;
    m -= overflowY * 12;

    return {
      year: y,
      month: m,
      day: d,
    };
  },

  daysInMonth(y, m) {
    if (m === 2 && SimpleDay.isLeapYear(y)) {
      return 29;
    } else {
      return DAYS_IN_MONTH[m - 1];
    }
  },

  isLeapYear(y) {
    if (y % 4 !== 0) {
      return false;
    } else if (y % 400 == 0) {
      return true;
    } else if (y % 100 == 0) {
      return false;
    } else {
      return true;
    }
  }
};

module.exports = SimpleDay;
