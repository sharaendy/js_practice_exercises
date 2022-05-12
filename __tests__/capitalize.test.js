import capitalize from '../src/capitalize.js';

test('проверка capitalize', () => {
  expect(capitalize('hexlet')).toBe('Hexlet');
  expect(capitalize('a')).toBe('A');
  expect(capitalize('')).toBe('');
});
