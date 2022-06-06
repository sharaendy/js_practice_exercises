// !решение 1 
export default function normalize(list) {
  const townsByContries = {};
  const corrector = (str) => str.trim().toLowerCase();

  for (const { name, country } of list) {
    const fixedCountry = corrector(country);
    const fixedName = corrector(name);

    if (!Object.hasOwn(townsByContries, fixedCountry)) {
      townsByContries[fixedCountry] = [];
    }

    if (!townsByContries[fixedCountry].includes(fixedName)) {
      townsByContries[fixedCountry].push(fixedName);
      townsByContries[fixedCountry].sort();
    }
  }
  return townsByContries;
}

// !решение 2
export default (data) => data
  .map(({ name, country }) => ({ city: name.toLowerCase(), country: country.toLowerCase() }))
  .map(({ city, country }) => ({ city: city.trim(), country: country.trim() }))
  .map(({ city, country }) => [country, city])
  .sort() // sort countries and cities
  .reduce((acc, [country, city]) => {
    const citiesAcc = acc[country] ?? [];
    const cities = citiesAcc.concat(city);
    const uniqueCities = new Set(cities);
    return { ...acc, [country]: [...uniqueCities] };
  }, {});

const raw = [
  { name: 'istanbul', country: 'turkey' },
  { name: 'Moscow ', country: ' Russia' },
  { name: 'iStanbul', country: 'tUrkey' },
  { name: 'antalia', country: 'turkeY ' },
  { name: 'samarA', country: '  ruSsiA' },
  { name: 'Miami', country: 'usa' },
];

console.log(normalize(raw));
// {
//   russia: [
//     'moscow',
//     'samara',
//   ],
//   usa: [
//     'miami',
//   ],
// }
