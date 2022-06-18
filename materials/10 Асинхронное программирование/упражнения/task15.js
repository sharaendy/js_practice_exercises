import { URL } from 'url';
import axios from 'axios';

const extractLinks = (content) => {
  const host = 'http://localhost:8080';
  const linkRx = /href="(.+?)"/gi;
  const results = content.matchAll(linkRx);
  return Array.from(results)
    .map((r) => r[1])
    .map((rawLink) => new URL(rawLink, host).toString());
};

//! решение 1 ( не работает )

async function getBadLinks(url) {
  const response = await axios.get(url);
  const links = extractLinks(response.data); // массив со всеми ссылками по url;

  let brokenLinks = [];

  links.forEach((link) => {
    axios.get(link).catch(() => {
      brokenLinks.push(link);
    });
  });
  return brokenLinks;
}

getBadLinks('https://ru.hexlet.io');

//! решение 2
export default async (initialLink) => {
  const response = await axios.get(initialLink);
  const links = extractLinks(response.data);
  const request = (link) => axios.get(link).then(() => null).catch(() => link);
  const promises = links.map(request);
  const results = await Promise.all(promises);
  return results.filter((result) => result !== null);
};
