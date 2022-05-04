//! лучшее
export default (params) => {
  const keys = Object.keys(params).sort();
  const result = [];

  for (const key of keys) {
    result.push(`${key}=${params[key]}`);
  }

  return result.join('&');
};

//! решение 1
function bqs(object) {
  const entries = Object.entries(object);
  const sortEntries = entries.sort();
  let entriesToString = '';
  for (const [key, value] of sortEntries) {
    entriesToString += `${key}=${value}&`;
  }
  const result = entriesToString.slice(0, entriesToString.length - 1);
  return result;
}

console.log(bqs({ per: 10, page: 1 }));
// page=1 & per=10
console.log(bqs({ param: 'all', param1: true }));
// param=all & param1=true
console.log(
  bqs({
    a: 10,
    s: 'Wow',
    d: 3.2,
    z: '89',
  }),
);
// a=10 & d=3.2 & s=Wow & z=89
