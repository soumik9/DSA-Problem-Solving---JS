// *climbing staircase function
const towerOfHanoi = (n) => {

    const numOfWays = [1, 2];

    for (let i = 2; i <= n; i++) {
        numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2]
    }

    return numOfWays[n - 1];
}

console.log(towerOfHanoi(1));
console.log(towerOfHanoi(2));
console.log(towerOfHanoi(3));
console.log(towerOfHanoi(4));

/* 
 * Big O = O(n)
 * Linear time complexity 
*/