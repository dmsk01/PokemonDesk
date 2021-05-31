import capitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('capitalize first letter function tests', () => {
  test('should receive string and return the same string with capital first letter', () => {
    const string = capitalizeFirstLetter('string');

    expect(string).toBe('String');
  });
  test('should receive empty string and return 0', () => {
    expect(capitalizeFirstLetter('')).toBe(0);
  });
  test('should receive string with spaces and return 0', () => {
    expect(capitalizeFirstLetter('    ')).toBe(0);
  });
  test('should receive string with non letter symbols and return 0', () => {
    expect(capitalizeFirstLetter('***')).toBe(0);
  });
});
