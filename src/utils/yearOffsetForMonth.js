function yearOffsetForMonth(month) {
  if (month > 12) {
    return Math.ceil(month / 12) - 1;
  } else if (month < 1) {
    return Math.floor((month - 1) / 12);
  } else {
    return 0;
  }
}

module.exports = yearOffsetForMonth;
