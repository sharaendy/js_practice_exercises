const students = [
  { name: 'Tirion', class: 'B', mark: 2 },
  { name: 'Keit', class: 'A', mark: 3 },
  { name: 'Ramsey', class: 'A', mark: 4 },
  { name: 'Bronn', class: 'B', mark: 3 },
  { name: 'Sam', class: 'A', mark: 2 },
  { name: 'Aria', class: 'B', mark: 5 },
  { name: 'Keit', class: 'B', mark: 4 },
  { name: 'Rob', class: 'B', mark: 4 },
  { name: 'Taywin', class: 'A', mark: 5 },
];

console.log(groupBy(students, 'mark'));

//! лучшее
const groupBy = (objects, key) => objects.reduce((acc, object) => {
  // из каждого объекта берётся значение по ключу
  const groupName = object[key];
  // контейнером группы выступает массив
  // Оператор нулевого слияния возвращает пустой массив, если в аккумуляторе ничего нет
  const group = acc[groupName] ?? [];
  // возвращается новый объект аккумулятора
  // старый аккумулятор деструктурируется, для текущей группы записывается новый массив с данными
  // квадратные скобки нужны, чтобы указать имя группы в качестве ключа
  return { ...acc, [groupName]: group.concat(object) };
}, {});

//! решение 1 (цикл)
// function groupBy(obj, id) {
//   const result = {};

//   for (const item of obj) {
//     if (!Object.hasOwn(result, item[id])) {
//       result[item[id]] = [];
//     }
//     result[item[id]].push(item);
//   }
//   return result;
// }

//! решение 2 (reduce)
function groupBy(coll, value) {
  const id = value; 

  function enforcer(acc, item) {
    if (!Object.hasOwn(acc, item[id])) {
      acc[item[id]] = [];
    }
    acc[item[id]].push(item);
    return acc;
  }

  return coll.reduce(enforcer, {});
}
