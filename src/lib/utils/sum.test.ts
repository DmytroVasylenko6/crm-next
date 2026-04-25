import sum from './sum';

describe('sum', () => {
  it('should return the sum of two positive numbers', () => {
    expect(sum(3, 7)).toBe(10);
  });

  it('should return the sum of two negative numbers', () => {
    expect(sum(-5, -8)).toBe(-13);
  });

  it('should return the sum of a positive and a negative number', () => {
    expect(sum(10, -3)).toBe(7);
  });

  it('should return the sum when one of the numbers is zero', () => {
    expect(sum(0, 5)).toBe(5);
    expect(sum(5, 0)).toBe(5);
  });

  it('should return zero when both numbers are zero', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should handle the sum of large numbers', () => {
    expect(sum(1000000, 2000000)).toBe(3000000);
  });
});