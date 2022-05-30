// !решение 1
export default class Cart {
  constructor() {
    this.items = []; // товары в корзине
    this.count = 0; // кол-во товаров в корзине
    this.cost = 0; // стоимость корзины
  }

  addItem(item, count) {
    this.items.push({ item: { name: item.name, price: item.price }, count });
    this.count += count;
    this.cost += item.price * count;
  }

  getItems() {
    return this.items.map((good) => {
      const { item } = good;
      const { count } = good;
      return { item, count };
    });
  }

  getCount() {
    return this.count;
  }

  getCost() {
    return this.cost;
  }
}

const cart = new Cart();
console.log('1)', cart);
cart.addItem({ name: 'car', price: 3 }, 5);
console.log('2)', cart);
// cart.addItem({ name: 'house', price: 10 }, 2);
// console.log('3)',cart);
console.log('4)', cart.getItems());
// console.log(cart.getCost());
// console.log(cart.getCount());


// !решение 2 (лучшее)
export default class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item, count) {
    const items = this.getItems();
    items.push({ item, count });
  }

  getItems() {
    return this.items;
  }

  getCount() {
    return _.sumBy(this.getItems(), (goods) => goods.count);
  }

  getCost() {
    return _.sumBy(this.getItems(), (goods) => goods.item.price * goods.count);
  }
}