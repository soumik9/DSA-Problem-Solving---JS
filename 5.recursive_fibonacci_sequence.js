// *fibonacci series function
const recursiveFibonacci = (n) => {

    if (n < 2) {
        return n;
    }

    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0), `fibonacci sequence of 0`);
console.log(recursiveFibonacci(1), `fibonacci sequence of 1`);
console.log(recursiveFibonacci(6), `fibonacci sequence of 6`);

/* 
 * O(n) - Iterative
 * O (2^n) - recursive which is not a good solution for fibonacci 
*/