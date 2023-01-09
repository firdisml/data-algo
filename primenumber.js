function findPrimes(n) {
  // Initialize an empty array to store the prime numbers
  const primes = [];

  // Loop through the numbers from 2 to n
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    // Check if the current number is prime
    for (let j = 2; j <= Math.sqrt(i); j++) {
        
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    // If the number is prime, add it to the array
    if (isPrime) {
      primes.push(i);
    }
  }

  return primes;
}

// Find the prime numbers from 2 to 100
const primes = findPrimes(100);
console.log(primes); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
