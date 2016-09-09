const foo = 1;

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
  }
};

module.exports = SimpleDay;
