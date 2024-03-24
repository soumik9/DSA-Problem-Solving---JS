// *recursive factorial of a number function
const recursiveFactorialNumber = (n) => {

    if (n === 0) {
        return 1;
    }

    return n * recursiveFactorialNumber(n - 1);
}

console.log(recursiveFactorialNumber(0), `factorial of 0`);
console.log(recursiveFactorialNumber(5), `factorial of 1`);
console.log(recursiveFactorialNumber(6), `factorial of 6`);

/* 
 * O(n) - Linear
 * recursive 
*/