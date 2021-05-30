import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

test('should receive string and return the same string with capital first letter', () => {
  const string = toCapitalizeFirstLetter('string');

  expect(string).toBe('String');
});
