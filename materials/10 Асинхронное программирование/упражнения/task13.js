//! решение 1
export default function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => resolve('time is over!'), milliseconds);
  });
}

wait(5000).then(() => console.log('time is over!'));

//! решение 2
export default function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), milliseconds);
  });
}
wait(2000).then(() => console.log('time is over!'));


//! решение 3
export default (ms) => new Promise((resolve) => setTimeout(resolve, ms));
