Реализуйте и экспортируйте по умолчанию функцию, которая выполняет глубокое копирование объектов.

```
import cloneDeep from '../objects.js';

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};

// result имеет такую же структуру, как и data
const result = cloneDeep(data);

// Но внутри другие объекты
result.key2 !== data.key2; // true
result.key2.innerKey !== data.key2.innerKey; // true
```

Для решения этой задачи, нужно последовательно обойти исходный объект и скопировать его данные в другой объект. Если значением какого-то свойства является объект, то нужно рекурсивно запустить реализованную функцию.

## Подсказки

- Для рекурсивного запуска понадобится имя для функции
- [_.isObject()](https://lodash.com/docs#isObject)
- [Object.entries()](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [Рекурсия](https://ru.hexlet.io/courses/introduction_to_programming/lessons/recursion/theory_unit)
- Для реализации этой задачи нельзя использовать функцию `cloneDeep()` библиотеки *lodash*.