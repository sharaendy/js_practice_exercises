import draft from '../src/draft.js';

test('проверка merge', () => {
  expect(draft([0, 0], [3, 4])).toBe(5);
});
