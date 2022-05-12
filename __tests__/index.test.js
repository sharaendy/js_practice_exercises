import reverse from '../src/reverse.js';

test('проверка reverse', () => {
  expect(reverse('hexlet')).toEqual('telxeh');
  expect(reverse('')).toBe('');
});
