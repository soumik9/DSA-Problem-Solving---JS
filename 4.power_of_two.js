// *finding power of two of a number
const isPowerOfTwo = (n) => {

    if (n < 1) return false;

    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2
    }

    return true;
}

console.log(isPowerOfTwo(1), `number is 1`);
console.log(isPowerOfTwo(2), `number is 2`);
console.log(isPowerOfTwo(5), `number is 5`);
console.log(isPowerOfTwo(31), `number is 31`);

/* 
 * Big O = O(logn)
 * input size reduced by half 
*/