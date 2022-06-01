// !решение 1
export default class Time {
  static fromString(str) {
    const result1 = new Time(str.slice(0, 2), str.slice(3));
    const result2 = new Time(str.slice(0, 1), str.slice(2));
    return (str.length === 5) ? result1 : result2;
  }

  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}

// !решение 2
export default class Time {
  static fromString(str) {
    const [hours, minutes] = str.split(':');
    return new Time(hours, minutes);
  }

  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  toString() {
    return `${this.hours}:${this.minutes}`;
  }
}

const time = Time.fromString('10:23');
console.log(`The time is ${time}`);
const time2 = Time.fromString('3:8');
console.log(`The time is ${time2}`);
