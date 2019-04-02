const calc = require('./index.js');

describe('calculateSum', () => {
  test('should return 5.338 when a=2.113, b=3.225,', () => {
      expect(calc.calculateSum(2.113, 3.225)).toBe(5.338);
  });
});