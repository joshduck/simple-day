function isLeapYear(y) {
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

module.exports = isLeapYear;
