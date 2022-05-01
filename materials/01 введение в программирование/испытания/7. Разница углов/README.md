Напишите функцию `diff()`, которая принимает два угла (integer), каждый от 0 до 360, и возвращает разницу между ними.

Угол между лучами измеряется двумя способами:

![Измерение углов](https://cdn2.hexlet.io/derivations/image/original/eyJpZCI6ImMyNTBhYzg5YzVlNWM0M2ZhMjcxZWRhZGIxNWZhMDI2LnBuZyIsInN0b3JhZ2UiOiJjYWNoZSJ9?signature=3ac6c28472917a19d44710476697c7ea3fe3ea1c01eb9037bc8b558f9a9ba767)

Функция должна вернуть наименьшее значение.

Примеры:

```
diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
diff(0, 180) === 180;
diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
diff(120, 280) === 160;
```