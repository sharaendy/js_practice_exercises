Реализуйте и экспортируйте по умолчанию функцию, которая возвращает длину последнего слова переданной на вход строки. Словом считается любая последовательность, не содержащая пробелов.

```
import getLastWordLength from './solution.js';

getLastWordLength(''); // 0

getLastWordLength('man in BlacK'); // 5

getLastWordLength('hello, world!  '); // 6
```

### Подсказки

- Убрать лишние пробелы поможет метод [trim](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/Trim)