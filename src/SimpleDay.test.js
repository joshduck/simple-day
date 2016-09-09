var SimpleDay = require('./SimpleDay');

it('Creates dates', () => {
  expect(SimpleDay.create(2010, 9, 8)).toEqual({
    year: 2010,
    month: 9,
    day: 8,
  });
});

it('Doesn\'t let months overflow', () => {
  expect(SimpleDay.create(2011, 13, 8)).toEqual({
    year: 2012,
    month: 1,
    day: 8,
  });
  expect(SimpleDay.create(2011, 48, 8)).toEqual({
    year: 2014,
    month: 12,
    day: 8,
  });
  expect(SimpleDay.create(2011, 0, 8)).toEqual({
    year: 2010,
    month: 12,
    day: 8,
  });
  expect(SimpleDay.create(2011, -11, 8)).toEqual({
    year: 2010,
    month: 1,
    day: 8,
  });
});

it('Knows which years are leap years', () => {
  expect(SimpleDay.isLeapYear(1700)).toBe(false);
  expect(SimpleDay.isLeapYear(1800)).toBe(false);
  expect(SimpleDay.isLeapYear(1900)).toBe(false);
  expect(SimpleDay.isLeapYear(1999)).toBe(false);
  expect(SimpleDay.isLeapYear(1600)).toBe(true);
  expect(SimpleDay.isLeapYear(2000)).toBe(true);
  expect(SimpleDay.isLeapYear(2004)).toBe(true);
  expect(SimpleDay.isLeapYear(2008)).toBe(true);
});

it('Knows how many days are in a month', () => {
  expect(SimpleDay.daysInMonth(2000, 1)).toBe(31);
  expect(SimpleDay.daysInMonth(2000, 2)).toBe(29);
  expect(SimpleDay.daysInMonth(2001, 2)).toBe(28);
  expect(SimpleDay.daysInMonth(2001, 3)).toBe(31);
  expect(SimpleDay.daysInMonth(2001, 4)).toBe(30);
  expect(SimpleDay.daysInMonth(2001, 5)).toBe(31);
  expect(SimpleDay.daysInMonth(2001, 6)).toBe(30);
  expect(SimpleDay.daysInMonth(2001, 7)).toBe(31);
  expect(SimpleDay.daysInMonth(2001, 8)).toBe(31);
  expect(SimpleDay.daysInMonth(2001, 9)).toBe(30);
  expect(SimpleDay.daysInMonth(2001, 10)).toBe(31);
  expect(SimpleDay.daysInMonth(2001, 11)).toBe(30);
  expect(SimpleDay.daysInMonth(2001, 12)).toBe(31);
});
