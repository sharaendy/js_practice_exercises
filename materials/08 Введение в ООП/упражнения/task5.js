// !решение 1
function getValue() {
  return this.value;
}

function getCurrency() {
  return this.currency;
}

function exchangeTo(currency) {
  const value = this.getValue();
  const previous = this.getCurrency();
  // console.log(previous);
  let exchangedCurrency = '';
  let exchangedValue = 0;

  if (previous === currency) {
    exchangedValue = value * 1;
    exchangedCurrency = previous;
  } else if (currency === 'usd') {
    exchangedValue = value * 1.2;
    exchangedCurrency = 'usd';
  } else if (currency === 'eur') {
    exchangedValue = value * 0.7;
    exchangedCurrency = 'eur';
  }
  return new Money(exchangedValue, exchangedCurrency);
}

function add(money) {
  const value1 = this.value;
  // console.log('value1 =', value1);
  let value2 = money.value;
  const currency1 = this.currency;
  // console.log('currency1 =', currency1);
  const currency2 = money.currency;
  // console.log('currency2 =', currency2);
  if (currency1 !== currency2) {
    value2 = money.exchangeTo(currency1).value;
  }
  // console.log('value2 =', value2);
  const sum = value1 + value2;
  // console.log('sum = ', sum);
  return new Money(sum, currency1);
}

function format() {
  const { value } = this;
  const currency = this.currency.toUpperCase();
  // console.log('value =', value);
  return value.toLocaleString('en-IN', { style: 'currency', currency });
}

export default function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
  this.getValue = getValue;
  this.exchangeTo = exchangeTo;
  this.add = add;
  this.format = format;
  this.getCurrency = getCurrency;
}

// const money1 = new Money(100);
// console.log(money1.exchangeTo('eur'));
// console.log(money1.exchangeTo('usd'));
// console.log('money1 =', money1.getValue()); // 100
// console.log(money1.exchangeTo('eur').getValue()); // 70

// const money2 = new Money(200, 'eur');
// console.log('money2 =', money2.getValue()); // 200
// console.log(money2.exchangeTo('eur').getValue()); // 240

// const money3 = money2.add(money1);
// console.log('moneySum = ', money3.getValue()); // 320

// const money4 = money1.add(money2);
// console.log(money4.getValue()); // 340

// console.log(money1.format()); // "$100.00"
// console.log(money2.format()); // "€200.00"

// const money5 = new Money(10000);
// console.log('money5 =', money5.format()); // "$10,000.00"


//! решение 2 (лучшее)
// BEGIN
const rates = {
  usd: {
    eur: 0.7,
  },
  eur: {
    usd: 1.2,
  },
};

export default function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.format = function format() {
  // bad design (pass undefined to the function), but it is js
  return this.getValue().toLocaleString(undefined, { style: 'currency', currency: this.getCurrency() });
};

Money.prototype.getValue = function getValue() {
  return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(newCurrency) {
  const currency = this.getCurrency();
  const currentValue = this.getValue();
  if (currency === newCurrency) {
    return new Money(currentValue, currency);
  }
  const newValue = currentValue * rates[currency][newCurrency];
  return new Money(newValue, newCurrency);
};

Money.prototype.add = function add(money) {
  const currency = this.getCurrency();
  const convertedMoney = money.exchangeTo(currency);
  const additionalValue = convertedMoney.getValue();
  return new Money(this.getValue() + additionalValue, currency);
};
// END