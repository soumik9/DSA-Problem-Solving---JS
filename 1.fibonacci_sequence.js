// *fibonacci series fn
function fibonacci(n) {
    const fibon = [0, 1];

    // *solution --------  1
    for (let i = 2; i < n; i++) {
        fibon[i] = fibon[i - 1] + fibon[i - 2];
    }

    // *solution --------  2
    // for (let i = 0; i < (n - 2); i++) {
    //     const length = fibon.length;
    //     fibon.push(fibon[length - 1] + fibon[length - 2]);
    // }

    return fibon;
}

console.log(fibonacci(2), `fibonacci sequence for 2`);
console.log(fibonacci(3), `fibonacci sequence for 3`);
console.log(fibonacci(7), `fibonacci sequence for 7`);

/* 
 * Big O = O(n)
 * Linear time complexity 
*/