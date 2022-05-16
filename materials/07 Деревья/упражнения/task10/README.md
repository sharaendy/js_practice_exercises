Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход файловое дерево и заменяет во всех узлах имя класса, имена классов передаются через параметры. Функция не должна мутировать исходное дерево.

### Примеры

```
import changeClass from '../changeClass.js';

const tree = {
  name: 'div',
  type: 'tag-internal',
  className: 'hexlet-community',
  children: [
    {
      name: 'div',
      type: 'tag-internal',
      className: 'old-class',
      children: [],
    },
    {
      name: 'div',
      type: 'tag-internal',
      className: 'old-class',
      children: [],
    },
  ],
};

const result = changeClass(tree, 'old-class', 'new-class');
// Результат:
// {
//   name: 'div',
//   type: 'tag-internal',
//   className: 'hexlet-community',
//   children: [
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//     {
//       name: 'div',
//       type: 'tag-internal',
//       className: 'new-class',
//       children: [],
//     },
//   ],
// }
```