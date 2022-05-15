В этом задании под деревом понимается любой массив элементов, которые в свою очередь могут быть также деревьями (массивами). Пример:

```javascript
[
  3, // лист
  [5, 3], // узел
  [[2]] // узел
]
```

Больше примеров в тестах.

## removeFirstLevel.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход дерево, и возвращает новое, элементами которого являются дети вложенных узлов (см. пример).

### Примеры

```javascript
import removeFirstLevel from '../removeFirstLevel.js';
 
// Второй уровень тут: 5, 3, 4
const tree1 = [[5], 1, [3, 4]];
removeFirstLevel(tree1); // [5, 3, 4]
 
const tree2 = [1, 2, [3, 5], [[4, 3], 2]];
removeFirstLevel(tree2);
// [3, 5, [4, 3], 2]
```

### Подсказки

- [Array.prototype.flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat) - возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень.
- [Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) - проверяет, является ли элемент массивом.