//! лучшее
export default (name, data = {}) => {
  const defaultData = {
    state: 'moderating',
    createdAt: Date.now(),
  };

  return { ...defaultData, ...data, name };
};

//! решение 1
function make(name, props) {
  const company = { name, ...props };

  if (!Object.hasOwn(company, 'state')) {
    company.state = 'moderating';
  }
  if (!Object.hasOwn(company, 'createdAt ')) {
    company.createdAt = new Date();
  }

  return company;
}

const company = make('Hexlet');
console.log(company);
