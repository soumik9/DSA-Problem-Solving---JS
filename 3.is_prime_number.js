// *is prime of a number function
const isPrime = (n) => {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(6));
console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(13));

/* 
 * Big O = O(n)
 * Linear time complexity 
*/