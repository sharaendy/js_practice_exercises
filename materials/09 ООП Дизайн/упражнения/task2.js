// !решение 1
export default class Truncater {
  static defaultOptions = {
    separator: '...',
    length: Infinity,
  };

  constructor(constructorOptions) {
    this.options = { ...Truncater.defaultOptions, ...constructorOptions };
    this.newOptions = {};
  }

  truncate(text, methodOptions) {
    this.newOptions = { ...this.options, ...methodOptions };
    if (text.length <= this.newOptions.length) {
      return `${text}`;
    }
    const cutedText = text.substring(0, this.newOptions.length);
    return `${cutedText}${this.newOptions.separator}`;
  }
}

const truncater = new Truncater();
// console.log(truncater)
// console.log(truncater.truncate('one two')); // 'one two'
// console.log(truncater.truncate('one two', { 'length': 6 })); // 'one tw...'

// const truncater2 = new Truncater({ 'length': 6 });
// console.log(truncater2.truncate('one two', { 'separator': '.' })); // 'one tw.'
// console.log(truncater2.truncate('one two', { 'length': '3' })); // 'one...'



// !решение лучшее
export default class Truncater {
  static defaultOptions = {
    separator: '...',
    length: Infinity,
  };

constructor(options = {}) {
  this.options = { ...this.constructor.defaultOptions, ...options };
}

truncate(text, options = {}) {
  const { length, separator } = { ...this.options, ...options };
  console.log('==>', length, separator)
  return (text.length <= length) ? text : text.substring(0, length).concat(separator);
}
}

const truncater = new Truncater();
// console.log(truncater)
console.log(truncater.truncate('one two')); // 'one two'
console.log(truncater.truncate('one two', { 'length': 6 })); // 'one tw...'

// const truncater2 = new Truncater({ 'length': 6 });
// console.log(truncater2.truncate('one two', { 'separator': '.' })); // 'one tw.'
// console.log(truncater2.truncate('one two', { 'length': '3' })); // 'one...'