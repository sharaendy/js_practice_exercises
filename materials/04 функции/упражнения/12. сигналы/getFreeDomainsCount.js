const emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
];

const freeEmailDomains = ['gmail.com', 'yandex.ru', 'hotmail.com', 'yahoo.com'];

//! лучшее
const getFreeDomainsCount = (emails) => emails
  .map((email) => {
    const [, domain] = email.split('@');
    return domain;
  })
  .filter((domain) => freeEmailDomains.includes(domain))
  .reduce((acc, domain) => {
    const count = get(acc, domain, 0) + 1;
    return { ...acc, [domain]: count };
  }, {});

//! решение 1
function counter(acc, item) {
  if (!Object.hasOwn(acc, item)) {
    acc[item] = 0;
  }
  acc[item] += 1;
  return acc;
}

const getFreeDomainsCount = (coll) => coll
  .map((item) => item.split('@')[1])
  .filter((item) => freeEmailDomains.includes(item))
  .reduce(counter, {});

export default getFreeDomainsCount;

console.log(getFreeDomainsCount(emails));
