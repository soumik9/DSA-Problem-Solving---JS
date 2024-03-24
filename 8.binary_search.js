// *binary search function
const binarySearch = (arr, target) => {

    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if (target === arr[middleIndex]) {
            return middleIndex;
        }

        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }

    return -1;
}

const a = [-5, 2, 4, 6, 10];

console.log(binarySearch(a, 10), `search of 10`);
console.log(binarySearch(a, 5), `search of 5`);
console.log(binarySearch(a, 6), `search of 6`);

/* 
 * O(logn) time complexity
*/