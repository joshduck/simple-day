var SimpleDay = require('./SimpleDay');

function d(year, month, day) {
  return SimpleDay.create(year, month, day);
}

it('Creates d objects', () => {
  expect(d(2010, 9, 8)).toEqual({
    year: 2010,
    month: 9,
    day: 8,
  });
});

it('Doesn\'t let months overflow', () => {
  expect(d(2011, 13, 8)).toEqual(d(2012, 1, 8));
  expect(d(2011, 48, 8)).toEqual(d(2014, 12, 8));
  expect(d(2011, 0, 8)).toEqual(d(2010, 12, 8));
  expect(d(2011, -11, 8)).toEqual(d(2010, 1, 8));
});
