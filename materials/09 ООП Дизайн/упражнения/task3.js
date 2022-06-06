// ! решение 1
export default class Url {
  constructor(address) {
    this.address = address;
  }

  getScheme() {
    const url = new URL(this.address);
    const protocol = url.protocol.toString();
    return protocol.substring(0, protocol.length - 1);
  }

  getHostName() {
    const url = new URL(this.address);
    return url.hostname.toString();
  }

  getQueryParams() {
    const url = new URL(this.address);
    const entries = url.searchParams.entries();
    return Object.fromEntries(entries);
  }

  getQueryParam(param1, param2 = null) {
    const url = new URL(this.address);
    const getParam1 = url.searchParams.get(param1);
    if (getParam1 === null) {
      return param2;
    }
    return getParam1;
  }

  equals(url2) {
    const url1 = new Url(this.address);
    return url1.address === url2.address;
  }
}

// !решение 2 (лучшее)
export default class Url {
  constructor(url) {
    this.url = new URL(url);
    this.url.scheme = this.url.protocol.slice(0, -1);
    this.url.queryParams = Object.fromEntries(this.url.searchParams);
  }

  getScheme() {
    return this.url.scheme;
  }

  getHostName() {
    return this.url.hostname;
  }

  getQueryParams() {
    return this.url.queryParams;
  }

  getQueryParam(key, defaultValue = null) {
    return this.url.searchParams.get(key) ?? defaultValue;
  }

  toString() {
    return this.url.toString();
  }

  equals(url) {
    return (this.toString() === url.toString());
  }
}

// const url = new Url('http://yandex.ru:80?key=value&key2=value2');
// console.log('1)getScheme() =>', url.getScheme()); // 'http'
// console.log('2)getHostName() =>', url.getHostName()); // 'yandex.ru'
// console.log('3)getQueryParams() =>', url.getQueryParams()); // obj
// console.log('4)getQueryParam("key") =>', url.getQueryParam('key1')); // value
// console.log(url.getQueryParam('key2', 'lala')); // 'value2'
// console.log(url.getQueryParam('new', 'ehu')); // 'ehu'
// console.log(url.getQueryParam('new')); // null
// console.log('equals1-T =', url.equals(new Url('http://yandex.ru:80?key=value&key2=value2'))); // true
// console.log('equals2-F =', url.equals(new Url('http://yandex.ru:80?key=value'))); // false
