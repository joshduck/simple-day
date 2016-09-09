const daysInMonth = require('./daysInMonth');

it('Knows how many days are in a month', () => {
  expect(daysInMonth(2000, 1)).toBe(31);
  expect(daysInMonth(2000, 2)).toBe(29);
  expect(daysInMonth(2001, 2)).toBe(28);
  expect(daysInMonth(2001, 3)).toBe(31);
  expect(daysInMonth(2001, 4)).toBe(30);
  expect(daysInMonth(2001, 5)).toBe(31);
  expect(daysInMonth(2001, 6)).toBe(30);
  expect(daysInMonth(2001, 7)).toBe(31);
  expect(daysInMonth(2001, 8)).toBe(31);
  expect(daysInMonth(2001, 9)).toBe(30);
  expect(daysInMonth(2001, 10)).toBe(31);
  expect(daysInMonth(2001, 11)).toBe(30);
  expect(daysInMonth(2001, 12)).toBe(31);
});
