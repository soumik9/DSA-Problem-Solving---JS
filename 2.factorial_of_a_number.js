// *factorial of a number function
const factorial = (n) => {
    let result = 1;

    /* 
    ! By starting the loop with i = 2, you skip the unnecessary multiplication by 1, 
    ! since any number multiplied by 1 remains unchanged. 
   */

    for (let i = 2; i <= n; i++) {
        result = result * i;
    }

    return result;
}

console.log(factorial(0), `factorial of 0`);
console.log(factorial(1), `factorial of 1`);
console.log(factorial(5), `factorial of 5`);

/* 
 * Big O = O(n)
 * Linear time complexity 
*/