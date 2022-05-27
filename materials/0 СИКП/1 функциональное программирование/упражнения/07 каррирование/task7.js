export const If = (func) => func;

export const True = (value1) => () => value1;
export const False = () => (value2) => value2;

const ConditionFunction1 = If(True);
console.log(ConditionFunction1('one')('two')); // one
const ConditionFunction2 = If(False);
console.log(ConditionFunction2('one')('two')); // two
