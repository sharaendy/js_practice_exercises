const getIndex = (key) => Math.abs(crc32.str(key)) % 1000;

const make = () => [];

const hasCollision = (map, key) => {
  const index = getIndex(key);
  const [currentKey] = map[index];
  return currentKey !== key;
};

const set = (map, key, value) => {
  const index = getIndex(key);
  if (map[index] && hasCollision(map, key)) {
    return false;
  }
  map[index] = [key, value];

  return true;
};

const get = (map, key, defaultValue = null) => {
  const index = getIndex(key);
  if (!map[index] || hasCollision(map, key)) {
    return defaultValue;
  }
  const [, value] = map[index];

  return value;
};

export { make, set, get };