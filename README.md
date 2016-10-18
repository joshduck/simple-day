# SimpleDay

A simple library for working with calendar days (YYYY-MM-DD) as plain old
JavaScript objects.

## Usage

```javascript
SimpleDay.normalize({ year: 2011, month: 1, day: -1 });    // { year: 2010, month: 12, day: 30 }
```

```javascript
SimpleDay.addDays(  { year: 2011, month: 1, day: 1 }, 5); // { year: 2011, month: 1, day: 6 }
SimpleDay.addMonths({ year: 2011, month: 1, day: 1 }, 5); // { year: 2011, month: 6, day: 1 }
SimpleDay.addYears( { year: 2011, month: 1, day: 1 }, 5); // { year: 2016, month: 1, day: 1 }
```
