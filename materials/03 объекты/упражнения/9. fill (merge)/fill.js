//! лучшее
import _ from 'lodash';
export default (object, keys, data) => {
  const filteredData = keys.length > 0 ? _.pick(data, keys) : data;
  Object.assign(object, filteredData);
};

//! решение 1
function fill(originalObj, keys, donorObj) {
  if (keys.length === 0) Object.assign(originalObj, donorObj);
  const modifDonorObj = _.pick(donorObj, keys);
  const assignedObj = Object.assign(originalObj, modifDonorObj);
  return assignedObj;
}
