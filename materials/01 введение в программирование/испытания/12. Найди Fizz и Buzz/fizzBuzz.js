//! лучшее
const fizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i += 1) {
    const hasFizz = i % 3 === 0;
    const hasBuzz = i % 5 === 0;
    const fizzPart = hasFizz ? 'Fizz' : '';
    const buzzPart = hasBuzz ? 'Buzz' : '';
    console.log(`${fizzPart}${buzzPart}` || i);
  }
};

export default fizzBuzz;

//! вариант 1
const fizzBuzz = (begin, end) => {
  let i = begin;
  while (i <= end) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
      i += 1;
    } else if (i % 5 === 0) {
      console.log("Buzz");
      i += 1;
    } else if (i % 3 === 0) {
      console.log("Fizz");
      i += 1;
    } else {
      console.log(i);
      i += 1;
    }
  }
};

//! вариант 2
function fizzBuzz(begin, end) {
  for (let i = begin; i <= end; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

//! вариант 3
function fizzBuzz(begin, end) {
  if (begin > end) {
    return null;
  }

  for (let i = begin; i <= end; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(11, 20);
