//! лучшее 
const cloneDeep = (object) => {
  const result = {};
  const entries = Object.entries(object);
  for (const [key, value] of entries) {
    result[key] = isObject(value) ? cloneDeep(value) : value;
  }

  return result;
};

export default cloneDeep;

//! решение 1
export default function cloneDeep(obj) {
  const result = {};
  const entries = Object.entries(obj);

  for (const [key, value] of entries) {
    const isKeyObject = isObject(obj[key]);
    if (isKeyObject) {
      result[key] = cloneDeep(obj[key]);
    } else {
      result[key] = value;
    }
  }

  return result;
};
