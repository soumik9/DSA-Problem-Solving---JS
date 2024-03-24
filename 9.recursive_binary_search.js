// *recursive binary search function
const recursiveBinarySearch = (arr, target) => {
    return search(arr, target, 0, arr.length - 1);
}

const search = (arr, target, leftIndex, rightIndex) => {

    if (leftIndex > rightIndex) {
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
        return middleIndex;
    }

    if (target < arr[middleIndex]) {
        return search(arr, target, 0, middleIndex - 1);
    } else {
        return search(arr, target, middleIndex + 1, rightIndex);
    }
}

const a = [-5, 2, 4, 6, 10];

console.log(recursiveBinarySearch(a, 10), `search of 10`);
console.log(recursiveBinarySearch(a, 5), `search of 5`);
console.log(recursiveBinarySearch(a, 6), `search of 6`);


/* 
 * O(logn) time complexity
*/