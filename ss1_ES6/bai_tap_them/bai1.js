const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17];

let primeNumber = numbers.filter(num => isPrime(num));
console.log("các số nguyên tố là : ");
console.log(primeNumber);