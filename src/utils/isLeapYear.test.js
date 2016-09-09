const isLeapYear = require('./isLeapYear');

it('Knows which years are leap years', () => {
  expect(isLeapYear(1700)).toBe(false);
  expect(isLeapYear(1800)).toBe(false);
  expect(isLeapYear(1900)).toBe(false);
  expect(isLeapYear(1999)).toBe(false);
  expect(isLeapYear(1600)).toBe(true);
  expect(isLeapYear(2000)).toBe(true);
  expect(isLeapYear(2004)).toBe(true);
  expect(isLeapYear(2008)).toBe(true);
});
