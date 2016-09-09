const SimpleDay = require('./SimpleDay');

describe('Create', () => {
  const create = SimpleDay.create;

  it('Creates date objects', () => {
    expect(create(2010, 9, 8)).toEqual({
      year: 2010,
      month: 9,
      day: 8,
    });
  });

  it('Normalizes invalid months', () => {
    expect(create(2011, 13, 8)).toEqual(create(2012, 1, 8));
    expect(create(2011, 48, 8)).toEqual(create(2014, 12, 8));
    expect(create(2011, 0, 8)).toEqual(create(2010, 12, 8));
    expect(create(2011, -11, 8)).toEqual(create(2010, 1, 8));
  });
});

describe('Normalize', () => {
  it('Clones normalized input', () => {
    var original = SimpleDay.create(2010, 1, 1);
    var normalized = SimpleDay.normalize(original);
    expect(original).not.toBe(normalized);
  });

  it('Normalizes plain objects', () => {
    expect(SimpleDay.normalize({
      year: 2010,
      month: 13,
      day: 8,
    })).toEqual({
      year: 2011,
      month: 1,
      day: 8,
    });
  });
});
