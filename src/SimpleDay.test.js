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

describe('Years', () => {
  it('Adds years', () => {
    expect(SimpleDay.addYears({
      year: 2011,
      month: 2,
      day: 1,
    }, 1)).toEqual({
      year: 2012,
      month: 2,
      day: 1,
    });
  });

  it('Handles uneven month lengths', () => {
    expect(SimpleDay.addYears({
      year: 2012,
      month: 2,
      day: 29,
    }, 1)).toEqual({
      year: 2013,
      month: 2,
      day: 28,
    });
  });
});

describe('Months', () => {
  it('Adds months', () => {
    expect(SimpleDay.addMonths({
      year: 2011,
      month: 2,
      day: 1,
    }, 1)).toEqual({
      year: 2011,
      month: 3,
      day: 1,
    });
  });

  it('Handles uneven month lengths', () => {
    expect(SimpleDay.addMonths({
      year: 2011,
      month: 1,
      day: 30,
    }, 1)).toEqual({
      year: 2011,
      month: 2,
      day: 28,
    });
  });
});

describe('Days', () => {
  it('Adds days', () => {
    expect(SimpleDay.addDays({
      year: 2011,
      month: 3,
      day: 2,
    }, 5)).toEqual({
      year: 2011,
      month: 3,
      day: 7,
    });
  });

  it('Handles leap years', () => {
    expect(SimpleDay.addDays({
      year: 2011,
      month: 3,
      day: 2,
    }, 365)).toEqual({
      year: 2012,
      month: 3,
      day: 1,
    });
  });
});
