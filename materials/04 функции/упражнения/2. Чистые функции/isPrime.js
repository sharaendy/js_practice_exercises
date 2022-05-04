//! лучшее
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
const sayPrimeOrNot = (num) => {
  const text = isPrime(num) ? 'yes' : 'no';
  console.log(text);
};
export default sayPrimeOrNot;

sayPrimeOrNot(2)
sayPrimeOrNot(3)
sayPrimeOrNot(19)
sayPrimeOrNot(23)
sayPrimeOrNot(47)
sayPrimeOrNot(5)
sayPrimeOrNot(7)
sayPrimeOrNot(13)