import _ from 'lodash';

const average = (...numbers) => {
  const count = numbers.length;

  if (count === 0) {
    return null;
  }

  return _.sum(numbers) / count;
};

export default average;