// *climbing staircase function
const climbingStairCase = (n) => {

    const numOfWays = [1, 2];

    for (let i = 2; i <= n; i++) {
        numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2]
    }

    return numOfWays[n - 1];
}

console.log(climbingStairCase(1));
console.log(climbingStairCase(2));
console.log(climbingStairCase(3));
console.log(climbingStairCase(4));

/* 
 * Big O = O(n)
 * Linear time complexity 
*/