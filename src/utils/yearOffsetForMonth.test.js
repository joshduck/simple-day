const yearOffsetForMonth = require('./yearOffsetForMonth');

it('Handles valid months', () => {
  expect(yearOffsetForMonth(1)).toBe(0);
  expect(yearOffsetForMonth(12)).toBe(0);
});

it('Overflows backwards', () => {
  expect(yearOffsetForMonth(0)).toBe(-1);
  expect(yearOffsetForMonth(-1)).toBe(-1);
  expect(yearOffsetForMonth(-11)).toBe(-1);
  expect(yearOffsetForMonth(-12)).toBe(-2);
});

it('Overflows forwards', () => {
  expect(yearOffsetForMonth(13)).toBe(1);
  expect(yearOffsetForMonth(24)).toBe(1);
  expect(yearOffsetForMonth(25)).toBe(2);
});
